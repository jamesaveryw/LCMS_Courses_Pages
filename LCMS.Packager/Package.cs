using System;
using System.IO;
using LCMS.Domain;
using System.Collections.Generic;

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
            string templateDir = workingDir + "\\CourseTemplate";
            string destDir = workingDir + "\\CrsExport";
            DirCopy(templateDir, destDir, true);

            Course curCrs = this.Crs;

            string crsFilesDir = destDir + "\\" + curCrs.Crs_Number;
            Directory.CreateDirectory(crsFilesDir);
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\audio");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\images");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\json");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\pdf");
            Directory.CreateDirectory(crsFilesDir + "\\Modules\\Mod_01\\transcripts");
        }

        public void CreateJSONFiles()
        {
            IEnumerable<PagesInCourse> pages = this.Crs_pgs;
            string courseNum = this.Crs.Crs_Number;
            string jsonDir = Directory.GetCurrentDirectory() + "\\CrsExport\\" + this.Crs.Crs_Number + "\\Modules\\Mod_01\\json";
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

        }

        private void DirCopy(string templateDir, string destDir, bool copySubs)
        {
            DirectoryInfo dir = new DirectoryInfo(templateDir);
            if (!dir.Exists)
            {
                throw new DirectoryNotFoundException(
                    "Source directory does not exist or could not be found: "
                    + templateDir);
            }

            DirectoryInfo[] dirs = dir.GetDirectories();
            Directory.CreateDirectory(destDir);

            FileInfo[] files = dir.GetFiles();
            foreach (FileInfo file in files)
            {
                string tempPath = Path.Combine(destDir, file.Name);
                file.CopyTo(tempPath, true);
            }

            
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
