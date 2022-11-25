namespace MyCalendarAPI.Entities
{
    public class Event : BaseEntity
    {
        public int EventID { get; set; }
        public string EventTitle { get; set; }
        public string EventDescription { get; set; }
        public DateTime EventDate { get; set; }
    }
}


