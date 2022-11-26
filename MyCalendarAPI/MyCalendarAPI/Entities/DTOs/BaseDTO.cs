namespace MyCalendarAPI.Entities.DTOs
{
    public class BaseDTO
    {
        public DateTime CreatedOn { get; set; }
        public DateTime LastModifiedOn { get; set; }
        public bool IsValid { get; set; } = true;
        public bool Message { get; set; }
        public bool Success { get; set; } = true;
    }
}
