using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HelloWorldReact.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Web para probar MVC .Net con React";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Puedes encontrarme en";

            return View();
        }

        public ActionResult Form()
        {
            return View();
        }

        public JsonResult getmessage()
        {
            return new JsonResult
            {
                Data = "Hello World. I am from server-side",
                //JsonRequestBehaviour = JsonRequestBehaviour.AllowGet
            };
        }
    }
}