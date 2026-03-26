using Microsoft.AspNetCore.Mvc;
using MvcApiCrudDepartamentos.Models;
using MvcApiCrudDepartamentos.Services;

namespace MvcApiCrudDepartamentos.Controllers
{
    public class DepartamentosController : Controller
    {
        private ServiceDepartamentos service;

        public DepartamentosController(ServiceDepartamentos service)
        {
            this.service = service;
        }

        public IActionResult Cliente()
        {
            return View();
        }

        public async Task<IActionResult> Index()
        {
            List<Departamento> depts = await service.GetDepartamentosAsync();
            return View(depts);
        }

        public async Task<IActionResult> Details(int iddepartamento)
        {
            Departamento dept = await service.FindDepartamentoAsync(iddepartamento);
            return View(dept);
        }

        public async Task<IActionResult> Post()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Post(Departamento dept)
        {
            await service.PostDepartamentoAsync(dept.IdDepartamento, dept.Nombre, dept.Localidad);
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Put(int iddepartamento)
        {
            Departamento dept = await service.FindDepartamentoAsync(iddepartamento);
            return View(dept);
        }

        [HttpPost]
        public async Task<IActionResult> Put(Departamento dept)
        {
            await service.PutDepartamentoAsync(dept.IdDepartamento, dept.Nombre, dept.Localidad);
            return RedirectToAction("Index");
        }

        public async Task<IActionResult> Delete(int iddepartamento)
        {
            await service.DeleteDepartamentoAsync(iddepartamento);
            return RedirectToAction("Index");
        }
    }
}
