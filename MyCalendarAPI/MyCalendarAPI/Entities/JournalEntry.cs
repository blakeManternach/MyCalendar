namespace MyCalendarAPI.Entities
{
    public class JournalEntry : BaseEntity
    {
        public string? Title { get; set; }
        public string? EntryText { get; set; }
    }
}
