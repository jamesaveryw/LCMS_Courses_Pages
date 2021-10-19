using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LCMS.Services.ViewModels;
using LCMS.Services.Services;

namespace LCMS.Web.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class PagesKeywordsController : ControllerBase
    {
        private readonly IPagesKeywordsService _pagesKeywordsService;

        public PagesKeywordsController(IPagesKeywordsService pagesKeywordsService)
        {
            _pagesKeywordsService = pagesKeywordsService;
        }

        [HttpGet("keywords/{id}")]
        public IActionResult GetPageKeywords(int id)
        {
            IEnumerable<KeywordViewModel> keywordsInPage = _pagesKeywordsService.GetPageKeywords(id);

            return Ok(keywordsInPage);
        }

        [HttpGet("pages/{id}")]
        public IActionResult GetPagesKeywordsIn(int id)
        {
            IEnumerable<PageViewModel> pagesKeywordIn = _pagesKeywordsService.GetPagesKeywordIn(id);

            return Ok(pagesKeywordIn);
        }

        [HttpPost]
        public IActionResult Post(PageKeywordViewModel pageKeywordForm)
        {
            PageKeywordViewModel pageKeywordToReturn = _pagesKeywordsService.CreatePageKeyword(pageKeywordForm);

            return Created("createPageKeyword", pageKeywordToReturn);
        }

        [HttpDelete("{pgId}-{kwId}")]
        public IActionResult Delete(int pgId, int kwId)
        {
            _pagesKeywordsService.DeletePageKeyword(pgId, kwId);

            return NoContent();
        }
    }
}
