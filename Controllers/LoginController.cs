using Microsoft.AspNetCore.Mvc;

namespace nr_log_asp.Controllers
{
	public class LoginController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
