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
            // template directory
            string templateDir = workingDir + "\\CourseTemplate";
            // new directory for  course package
            string destDir = workingDir + "\\CrsExport";
            // copy
            DirCopy(templateDir, destDir, true);

            // get course number for directory
            Course curCrs = this.Crs;

            // create new directories for specific course files
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

        }

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
