using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Npgsql;
using Dapper;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly IConfiguration _configuration;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IConfiguration configuration)
        {
            _configuration = configuration;
            _logger = logger;
        }


        [HttpGet]
        public async Task<IEnumerable<WeatherForecast>> Get()
        {
            
            await Task.Run(()=>{Console.WriteLine("somthing");});
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] UserCredentials credentials)
        {
            System.Console.WriteLine(credentials.username);
            System.Console.WriteLine(credentials.password);

            using (var connection = new NpgsqlConnection(_configuration.GetConnectionString("postgres")))
            {
                connection.Query<UserCredentials>("SELECT * FROM users");
            }
            
            await Task.Run(()=>{});
            
            if(credentials.password == "salasana")
                return Ok(new UserCredentialsResponse{token="ss8a9gagsahg8d9sagnd"});
            return Problem("Wrong Password",statusCode: 400, title: "Password Fail");
        }
    }
}
