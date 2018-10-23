using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Clippers_Salon.Models;

namespace Clippers_Salon.Controllers
{    

    public class HomeController : Controller
    {
        private ClipperSalonDbContext db = new ClipperSalonDbContext();

        public ActionResult Index()
        {
            ViewData["Title"] = "Clippers Salon";

            return View(db);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}