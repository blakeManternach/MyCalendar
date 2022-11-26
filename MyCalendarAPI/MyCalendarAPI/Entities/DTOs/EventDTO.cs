namespace MyCalendarAPI.Entities.DTOs
{
    public class EventDTO : BaseDTO
    {
        public int EventID { get; set; }
        public string EventTitle { get; set; }
        public string EventDescription { get; set; }
        public DateTime EventDate { get; set; }
    }
}
