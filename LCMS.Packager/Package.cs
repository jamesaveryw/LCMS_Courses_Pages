using System;
using System.IO;
using LCMS.Domain;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Xml;
using Newtonsoft.Json;
using System.Xml.Linq;
using System.Text;
using System.Linq;

namespace LCMS.Packager
{
    public class Package
    {
        public Package()
        {

        }

        public Package(IEnumerable<PagesInCourse> pages, Course course)
        {
            Crs_pgs = pages;
            Crs = course;
        }

        public IEnumerable<PagesInCourse> Crs_pgs { get; set; }
        public Course Crs { get; set; }

        public void CloneTemplate()
        {
            // working directory
            string workingDir = Directory.GetCurrentDirectory();
            // template directory
            string templateDir = workingDir + "\\CourseTemplate";
            // new directory for  course package
            string destDir = workingDir + "\\temp";
            // copy
            DirCopy(templateDir, destDir, true);

            // create new directories for specific course files
            string crsFilesDir = destDir + "\\" + this.Crs.Crs_Number;
            Directory.CreateDirectory(crsFilesDir);
            /*Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\audio");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\images");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\json");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\pdf");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\transcripts");*/
        }

        public void CreateHTMLFiles()
        {
            string htmlHead = "<html lang=\"en-US\"><head><meta charset=\"utf-8\"><meta name=\"robots\" content=\"noindex\"><meta name=\"google\" content=\"notranslate\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
            string htmlStart = "<link rel=\"stylesheet\" href=\"../shared/css/bootstrap.min.css\"><link rel=\"stylesheet\" href=\"../shared/css/font-awesome.css\"><link rel=\"stylesheet\" href=\"../shared/css/hioc.css\"><meta id=\"viewport\" name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"></head><body class=\"notranslate\" style=\"overflow: hidden;\"><div id=\"portalContents\" tabindex=\"-1\" style=\"display: none; overflow-y: auto; top: 75px; height: 1152px; z-index: 99;\"></div><style> #lessonContent p {width: 100%;}</style><div tabindex=\"0\" id=\"JcComponents\" class=\"col-lg-12 col-md-12 col-xs-12 lsn_scrl body_style\" style=\"display: block; background-color: white; width: 100%; height: 1102px; overflow: hidden auto; padding-bottom: 100px; position: relative; top: 50px;\" align=\"center\"><div style=\"height:0px\">";
            string htmlEnd = "</div><div class=\"col-lg-12 col-md-12 col-xs-12 panel-group\" style=\"display: block; margin-bottom:20px;\"></div><script type=\"text/javascript\" src=\"../shared/js/jquery.min.js\"></script><script type=\"text/javascript\" src=\"../shared/js/jack_builder_creator.js\"></script><script type=\"text/javascript\" src=\"../shared/js/bootstrap.min.js\"></script><script type=\"text/javascript\" src=\"jshared/js/jquery.navgoco.js\"></script><script type=\"text/javascript\" src=\"../shared/js/jq_flip.js\"></script><script type=\"text/javascript\" src=\"../shared/js/patch.js\"></script><span class=\"px-viewport-dimensions tr px-viewport-dimensions--hidden\"></span></body></html>";
            
            // get all pages in the course
            IEnumerable<PagesInCourse> pages = this.Crs_pgs;
            // save the course number for directory structure
            string courseNum = this.Crs.Crs_Number;
            string htmlDir = Directory.GetCurrentDirectory() + "\\temp\\" + this.Crs.Crs_Number;

            // loop through all pages and create an HTML file for each
            int i = 0;
            foreach (var page in pages)
            {
                string htmlFile = courseNum + "_P" + ++i + ".html";
                string writePath = htmlDir + "\\" + htmlFile;
                StreamWriter sw = new StreamWriter(writePath);
                string html = page.Pg_HTML;
                sw.Write(htmlHead);
                sw.Write("<title>" + page.Pg_Title + "</title>");
                sw.Write(htmlStart);
                sw.Write(html);
                sw.Write(htmlEnd);
                sw.Close();
            }
        }

        /*public void CreateJSONFiles()
        {
            // get all pages in the course
            IEnumerable<PagesInCourse> pages = this.Crs_pgs;
            // save the course number for directory structure
            string courseNum = this.Crs.Crs_Number;
            string jsonDir = Directory.GetCurrentDirectory() + "\\CrsExport\\" + this.Crs.Crs_Number + "\\Modules\\Mod_01\\json";

            // loop through all pages and create a json file for each
            int i = 0;
            foreach (var page in pages)
            {
                string jsonFile = courseNum + "_P" + ++i + ".json";
                string writePath = jsonDir + "\\" + jsonFile;
                StreamWriter sw = new StreamWriter(writePath);
                string json = page.Pg_Content;
                sw.WriteLine(json); 
                sw.Close();
            }
        }*/

        public void CreateSCOFiles()
        {
            XmlWriterSettings settings = new XmlWriterSettings();
            settings.Indent = true;
            settings.IndentChars = "    ";
            settings.OmitXmlDeclaration = false;
            settings.Encoding = Encoding.UTF8;

            using (XmlWriter xw = XmlWriter.Create(Directory.GetCurrentDirectory() + "\\temp\\imsmanifest.xml", settings))
            {
                // start manifest
                xw.WriteStartElement("manifest", "http://www.imsproject.org/xsd/imscp_rootv1p1p2");
                xw.WriteStartAttribute("identifier");
                xw.WriteString("com.scorm.golfsamples.contentpackaging.multioscosinglefile.12");
                xw.WriteEndAttribute();
                xw.WriteAttributeString("xmlns", "adlcp", null, "http://www.adlnet.org/xsd/adlcp_rootv1p2");
                xw.WriteAttributeString("xmlns", "xsi", null, "http://www.w3.org/2001/XMLSchema-instance");
                xw.WriteAttributeString("xsi", "schemaLocation", null, "http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd");
                
                // start metadata
                xw.WriteStartElement("metadata");
                // schema
                xw.WriteElementString("schema", "ADL SCORM");
                // schemaversion
                xw.WriteElementString("schemaversion", "1.2");
                // end metadata
                xw.WriteEndElement();
                
                // start organizations
                xw.WriteStartElement("organizations");
                xw.WriteAttributeString("default", this.Crs.Crs_Number);

                // start organization
                xw.WriteStartElement("organization");
                xw.WriteAttributeString("identifier", this.Crs.Crs_Number);
                
                // title
                xw.WriteElementString("title", this.Crs.Crs_Title);
                
                // items
                int i = 1;
                foreach (PagesInCourse page in this.Crs_pgs)
                {
                    xw.WriteStartElement("item");
                    xw.WriteAttributeString("identifier", "p_" + i + "_item");
                    xw.WriteAttributeString("identifierref", "p_" + i + "_resource");
                    xw.WriteElementString("title", page.Pg_Title);
                    xw.WriteEndElement();
                    i++;
                }
                
                // end organization
                xw.WriteEndElement();
                // end organizations
                xw.WriteEndElement();

                // resources
                xw.WriteStartElement("resources");
                i = 1;
                foreach (PagesInCourse page in this.Crs_pgs)
                {
                    // resource
                    xw.WriteStartElement("resource");
                    xw.WriteAttributeString("identifier", "p_" + i + "_resource");
                    xw.WriteAttributeString("type", "webcontent");
                    xw.WriteAttributeString("adlcp", "scormtype", null, "asset");
                    xw.WriteAttributeString("href", this.Crs.Crs_Number + "/" + this.Crs.Crs_Number + "_P" + i + ".html");
                    // file
                    xw.WriteStartElement("file");
                    xw.WriteAttributeString("href", this.Crs.Crs_Number + "/" + this.Crs.Crs_Number + "_P" + i + ".html");
                    xw.WriteEndElement();
                    // dependency
                    xw.WriteStartElement("dependency");
                    xw.WriteAttributeString("identifierref", "common_files");
                    xw.WriteEndElement();
                    xw.WriteEndElement();
                    i++;
                }

                // shared resources
                xw.WriteStartElement("resource");
                xw.WriteAttributeString("identifier", "common_files");
                xw.WriteAttributeString("type", "webcontent");
                xw.WriteAttributeString("adlcp", "scormtype", null, "asset");

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/css/bootstrap.min.css");
                xw.WriteEndElement();

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/css/font-awesome.css");
                xw.WriteEndElement();

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/css/hioc.css");
                xw.WriteEndElement();

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/js/bootstrap.min.js");
                xw.WriteEndElement();

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/js/jquery.min.js");
                xw.WriteEndElement();

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/js/jack_builder_creator.js");
                xw.WriteEndElement();

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/js/jquery.navgoco.js");
                xw.WriteEndElement();

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/js/jq_flip.js");
                xw.WriteEndElement();

                xw.WriteStartElement("file");
                xw.WriteAttributeString("href", "../shared/js/patch.js");
                xw.WriteEndElement();

                xw.WriteEndElement();

                // end manifest
                xw.WriteEndElement();
                xw.Flush();
            }
        }

        public void ZipPackage()
        {
            string startPath = @".\temp";
            string zipPath = @".\output\" + this.Crs.Crs_Number + "package.zip";

            System.IO.Compression.ZipFile.CreateFromDirectory(startPath, zipPath);
        }

        /*public void UpdateSetupFile()
        {
            // read jcc_setup file
            string setupFile = Directory.GetCurrentDirectory() + "\\CrsExport\\includes\\scripts\\json\\jcc_setup.js";
            string json = File.ReadAllText(setupFile);

            // array of regex to clean up the file contents
            string rmvLineCommentsPtrn = @"(?<!https?:)\/\/.*?\n";
            string rmvEndSemiPtrn = @"};";
            string rmvVarNamePtrn = @"var course_settings = ";

            string[] jsonFixes =
            {
                @"\/\*(?:.|\n)*?\*\/",
                @"\s*\t*\n\s*\t*"
            };

            json = Regex.Replace(json, rmvLineCommentsPtrn, "\n");
            json = Regex.Replace(json, rmvEndSemiPtrn, "}");
            json = Regex.Replace(json, rmvVarNamePtrn, "");
            // all regex replacements that replace empty
            for (int i = 0; i < 2; i++)
            {
                json = Regex.Replace(json, jsonFixes[i], "");
            }

            dynamic jsonObj = JsonConvert.DeserializeObject(json);
            jsonObj.Portal_Setup.Course_Type = this.Crs.Crs_Type;
            jsonObj.Portal_Setup.Course_Number = this.Crs.Crs_Number;
            jsonObj.Portal_Setup.Course_Folder = this.Crs.Crs_Number;
            jsonObj.Portal_Setup.Course_Name = this.Crs.Crs_Title;
            jsonObj.Portal_Setup.Course_Title = this.Crs.Crs_Title;
            jsonObj.Portal_Setup.Welcome_text.shortcourse = this.Crs.Crs_Blurb;
            using StreamWriter file = File.CreateText(setupFile);


            using (JsonWriter writer = new JsonTextWriter(file))
            {
                file.Write("var course_settings = ");
                //writer.Formatting = Formatting.Indented;
                jsonObj.WriteTo(writer);
                file.Write(";");
            }
        }*/

        private void DirCopy(string templateDir, string destDir, bool copySubs)
        {
            // get template directory to copy
            DirectoryInfo dir = new DirectoryInfo(templateDir);

            // throw error if the directory doesn't exist
            if (!dir.Exists)
            {
                throw new DirectoryNotFoundException(
                    "Source directory does not exist or could not be found: "
                    + templateDir);
            }

            // get all subdirs
            DirectoryInfo[] dirs = dir.GetDirectories();
            // create a new directory for course package
            Directory.CreateDirectory(destDir);

            // get all files and loop through to copy
            FileInfo[] files = dir.GetFiles();
            foreach (FileInfo file in files)
            {
                string tempPath = Path.Combine(destDir, file.Name);
                file.CopyTo(tempPath, true);
            }

            // if copying subdirectories loop through each and re-call same method
            if (copySubs)
            {
                foreach (DirectoryInfo subdir in dirs)
                {
                    string tempPath = Path.Combine(destDir, subdir.Name);
                    DirCopy(subdir.FullName, tempPath, copySubs);
                }
            }
        }
    }
}
