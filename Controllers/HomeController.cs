using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using nr_log_asp.Data;
using nr_log_asp.Models;

namespace nr_log_asp.Controllers;

public class HomeController : Controller
{
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
