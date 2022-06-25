using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using nr_log_asp.Data;
using nr_log_asp.Models;

namespace nr_log_asp.Controllers;

public class HomeController : Controller
{
		private protected AppDbContext _db;

		public HomeController(AppDbContext db)
		{
			_db = db;
		}

		public IActionResult Login()
		{
			if(HttpContext.Session.GetString("Login") != null)
			{
				return RedirectToAction("", "");
			}
			else
			{
				return View();
			}
		}

		[HttpPost]
		public IActionResult Login(LoginModel newLogin)
		{
			var categoriesList = _db.Clients.ToList();
		
			if (categoriesList.Any(e => e.UserName == newLogin.UserName && e.Password == newLogin.Password))
			{
				HttpContext.Session.SetString("Login", newLogin.UserName);
				return RedirectToAction("", "");
			}
			else
			{
				return View(newLogin);
			}
		}

		public IActionResult Index()
		{
			ViewData["Login"] = HttpContext.Session.GetString("Login");
			return View();
		}

		[HttpPost]
		public IActionResult DeleteSession()
		{
			//Delete the Session object.
			HttpContext.Session.Remove("Login");

			return RedirectToAction("Index");
		}

}
