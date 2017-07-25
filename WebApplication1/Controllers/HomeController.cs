using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace BunnyHopApplication.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
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
              

        public ActionResult GetPartsList()
        {
            var items = new List<String>();

            //foreach (part => part.)
            //{
                items.Add("...TO DO read line");
            //}

            BunnyHopBase.Models.Data.AccessServerless SQLite = new BunnyHopBase.Models.Data.AccessServerless();

            string part = SQLite.Query("parts");
            
            //AccessServ

            return Json(items, JsonRequestBehavior.AllowGet);
        }
    }
}