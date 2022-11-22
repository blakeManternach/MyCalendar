using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyCalendarAPI.Entities;

namespace MyCalendarAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly List<Event> events = new List<Event>()
        {
            new Event()
            {
                EventID = 1,
                EventDate = DateTime.Parse("12/12/12"),
                EventDescription = "test description",
                EventTitle = "Test Event Title"
            },
            new Event()
            {
                EventID = 2,
                EventDate = DateTime.Parse("01/12/12"),
                EventDescription = "test description 2",
                EventTitle = "Test Event Title 2"
            },
            new Event()
            {
                EventID = 1,
                EventDate = DateTime.Parse("02/12/12"),
                EventDescription = "test description 3",
                EventTitle = "Test Event Title 3"
            },
        };

        [HttpGet("GetAllEvents")]
        public async Task<ActionResult<IEnumerable<Event>>> GetAllEvents()
        {
            return events;
        }
    }
}
