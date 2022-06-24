using Microsoft.EntityFrameworkCore;
using nr_log_asp.Models;

namespace nr_log_asp.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{

		}

		public DbSet<RegisterModel> Clients { get; set; }
	}
}
