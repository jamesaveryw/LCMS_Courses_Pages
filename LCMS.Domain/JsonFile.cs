using System;
using System.Collections.Generic;
using System.Text;

namespace LCMS.Domain
{
    public class JsonFile
    {
        public JsonFile()
        {

        }

        public JsonFile(string fileName, string contents)
        {
            name = fileName;
            json = contents;
        }

        public string name { get; set; }
        public string json { get; set; }
    }
}
