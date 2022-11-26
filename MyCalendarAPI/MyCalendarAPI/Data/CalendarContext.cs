using Microsoft.EntityFrameworkCore;
using MyCalendarAPI.Entities.DataModels;

namespace MyCalendarAPI.Data
{
    public class CalendarContext : DbContext
    {
        public CalendarContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<JournalEntry> JournalEntries { get; set; }
        public DbSet<Event> Events { get; set; }
    }
}
