using MyCalendarAPI.Entities.DTOs;
using System.Collections;

namespace MyCalendarAPI.Services.Interfaces
{
    public interface IEventService
    {
        public Task<IEnumerable<EventDTO>> GetAllEvents();
        public Task<EventDTO> GetEventByID(int id);
        public Task<EventDTO> CreateEvent(EventDTO newEvent);
        public Task<EventDTO> EditEvent(EventDTO existingEvent);
        public Task<BaseDTO> DeleteEvent(int id);
    }
}
