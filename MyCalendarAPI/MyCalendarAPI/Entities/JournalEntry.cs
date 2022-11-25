namespace MyCalendarAPI.Entities
{
    public class JournalEntry : BaseEntity
    {
        public int JournalEntryID { get; set; }
        public string? Title { get; set; }
        public string? EntryText { get; set; }
    }
}
