using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using nr_log_asp.Data;
using nr_log_asp.Models;

namespace nr_log_asp.Controllers;

public class LoginController : Controller
{
	private protected AppDbContext _db;

	public LoginController(AppDbContext db)
	{
		_db = db;
	}

	public IActionResult Index()
	{
		if (HttpContext.Session.GetString("Login") != null)
		{
			return RedirectToAction("", "");
		}
		else
		{
			return View();
		}
	}

	[HttpPost]
	public IActionResult Index(LoginModel newLogin)
	{
		var categoriesList = _db.Clients.ToList();

		if (categoriesList.Any(e => e.UserName == newLogin.UserName && e.Password == newLogin.Password))
		{
			ViewData["LoginError"] = "";
			HttpContext.Session.SetString("Login", newLogin.UserName);
			return RedirectToAction("", "");
		}
		else
		{
			ViewData["LoginError"] = "Usuário ou senha incorretos!";
			return View(newLogin);
		}
	}
}
