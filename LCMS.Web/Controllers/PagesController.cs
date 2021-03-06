using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LCMS.Services.Services;
using LCMS.Services.ViewModels;
using Microsoft.AspNetCore.Http;

namespace LCMS.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PagesController : ControllerBase
    {
        private readonly IPagesService _pagesService;

        public PagesController(IPagesService pagesService)
        {
            _pagesService = pagesService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<PageViewModel> pages = _pagesService.GetPages();

            return Ok(pages);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            PageViewModel page = _pagesService.GetPage(id);

            return Ok(page);
        }

        [HttpPost]
        public IActionResult Post(PageViewModel pageForm)
        {
            PageViewModel pageToReturn = _pagesService.CreatePage(pageForm);

            return Created("createpage", pageToReturn);
        }

        [HttpPost("upload"), DisableRequestSizeLimit]
        public IActionResult Upload(IFormFile file)
        {
            string contents;
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    using (var sr = new System.IO.StreamReader(stream))
                    {
                        contents = sr.ReadToEnd();
                        FileJsonViewModel fileViewModel = new FileJsonViewModel()
                        {
                            name = file.FileName,
                            json = contents
                        };
          
                        return Ok(fileViewModel);
                    }
                }
            }
            
            return NoContent();                
        }

        [HttpPut("update-page")]
        public IActionResult Update(PageViewModel pageForm)
        {
            PageViewModel updatedPage = _pagesService.UpdatePage(pageForm);

            return Ok(updatedPage);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _pagesService.DeletePage(id);

            return NoContent();
        }
    }
}
