using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCalendarAPI.Entities.DataModels;

namespace MyCalendarAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JournalEntryController : ControllerBase
    {
        private readonly JournalEntry TestEntry = new JournalEntry()
        {
            CreatedOn = DateTime.Now,
            LastModifiedOn = DateTime.Now,
            EntryText = "This is a test entry",
            Title = "This is a test title"
        };

        [HttpGet("GetEntry")]
        public async Task<ActionResult<JournalEntry>> GetEntry()
        {
            return TestEntry;
        }
    }
}
