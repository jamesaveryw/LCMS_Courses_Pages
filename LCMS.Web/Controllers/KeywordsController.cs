using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LCMS.Services.Services;
using LCMS.Services.ViewModels;

namespace LCMS.Web.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class KeywordsController : ControllerBase
    {
    private readonly IKeywordsService _keywordsService;

        public KeywordsController(IKeywordsService keywordsService)
        {
            _keywordsService = keywordsService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<KeywordViewModel> keywords = _keywordsService.GetKeywords();

            return Ok(keywords);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            KeywordViewModel keyword = _keywordsService.GetKeyword(id);

            return Ok(keyword);
        }

        [HttpGet("{word}")]
        public IActionResult Get(string word)
        {
            KeywordViewModel keyword = _keywordsService.GetKeyword(word);

            return Ok(keyword);
        }

        [HttpPost]
        public IActionResult Post(KeywordViewModel keywordForm)
        {
            KeywordViewModel keywordToReturn = _keywordsService.CreateKeyword(keywordForm);

            return Created("createkeyword", keywordToReturn);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _keywordsService.DeleteKeyword(id);

            return NoContent();
        }
    }
}
