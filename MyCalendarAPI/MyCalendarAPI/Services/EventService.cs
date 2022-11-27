using Microsoft.EntityFrameworkCore;
using MyCalendarAPI.Data;
using MyCalendarAPI.Entities.DataModels;
using MyCalendarAPI.Entities.DTOs;
using MyCalendarAPI.Services.Interfaces;

namespace MyCalendarAPI.Services
{
    public class EventService : IEventService
    {
        private readonly CalendarContext _context;

        public EventService(CalendarContext context)
        {
            _context = context;
        }

        public async Task<EventDTO> CreateEvent(EventDTO newEvent)
        {
            var dbEvent = ParseEvent(newEvent);
            _context.Events.Add(dbEvent);
            await _context.SaveChangesAsync();
            return ParseEventDTO(dbEvent);
        }

        public async Task<BaseDTO> DeleteEvent(int id)
        {
            var match = await _context.Events.FirstOrDefaultAsync(x => x.EventID == id);
            if (match == null)
            {
                return new BaseDTO() { Success = false };
            }
            _context.Events.Remove(match);
            await _context.SaveChangesAsync();

            return new BaseDTO();
        }

        public async Task<EventDTO> EditEvent(EventDTO existingEvent)
        {
            var dbModel = await _context.Events.FirstOrDefaultAsync(x => x.EventID == existingEvent.EventID);
            dbModel = ParseEvent(existingEvent);

            await _context.SaveChangesAsync();

            return ParseEventDTO(dbModel);
        }

        public async Task<IEnumerable<EventDTO>> GetAllEvents()
        {
            var events = await _context.Events.ToListAsync();
            return events.Select(x => ParseEventDTO(x));
        }

        public async Task<EventDTO> GetEventByID(int id)
        {
            var model = await _context.Events.FirstOrDefaultAsync(x => x.EventID.Equals(id));
            return ParseEventDTO(model);
        }

        private Event ParseEvent(EventDTO eventDTO)
        {
            return new Event()
            {
                CreatedOn = eventDTO.CreatedOn,
                EventDate = eventDTO.EventDate,
                EventDescription = eventDTO.EventDescription,
                EventID = eventDTO.EventID,
                EventTitle = eventDTO.EventTitle,
                LastModifiedOn = eventDTO.LastModifiedOn,
            };
        }

        private EventDTO ParseEventDTO(Event dbEvent)
        {
            return new EventDTO()
            {
                CreatedOn = dbEvent.CreatedOn,
                EventDate = dbEvent.EventDate,
                EventDescription = dbEvent.EventDescription,
                EventID = dbEvent.EventID,
                EventTitle = dbEvent.EventTitle,
                LastModifiedOn = dbEvent.LastModifiedOn,
            };
        }
    }
}
