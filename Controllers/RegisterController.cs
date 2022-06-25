using Microsoft.AspNetCore.Mvc;
using nr_log_asp.Data;
using nr_log_asp.Models;

namespace nr_log_asp.Controllers
{
	public class RegisterController : Controller
	{
		private readonly AppDbContext _context;

		public RegisterController(AppDbContext context)
		{
			_context = context;
		}

		public IActionResult Index()
		{
			return View();
		}

		[HttpPost]
		[ValidateAntiForgeryToken]
		public IActionResult Index(RegisterModel newUser)
		{
			if(ModelState.IsValid)
			{
				_context.Add(newUser);
				_context.SaveChanges();
				return View();
			}
			else
			{
				return View(newUser);
			}
		}
	}
}
