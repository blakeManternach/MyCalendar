namespace MyCalendarAPI.Entities.DataModels
{
    public class JournalEntry : BaseEntity
    {
        public int JournalEntryID { get; set; }
        public string? Title { get; set; }
        public string? EntryText { get; set; }
    }
}
