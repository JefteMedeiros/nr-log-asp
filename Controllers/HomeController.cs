using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using nr_log_asp.Models;

namespace nr_log_asp.Controllers;

public class HomeController : Controller
{
  public IActionResult Index()
  {
    return View();
  }
}
