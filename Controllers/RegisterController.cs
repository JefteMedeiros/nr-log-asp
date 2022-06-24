using Microsoft.AspNetCore.Mvc;

namespace nr_log_asp.Controllers
{
	public class RegisterController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
