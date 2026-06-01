#nullable enable

using System;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace SilvinaPortfolioTests.Utilities;

public class TestConfig
{
    private static IConfiguration? _configuration;

    public static IConfiguration GetConfiguration()
    {
        if (_configuration == null)
        {
            var basePath = Directory.GetCurrentDirectory();
            _configuration = new ConfigurationBuilder()
                .SetBasePath(basePath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();
        }
        return _configuration;
    }

    public static string GetBaseUrl()
    {
        return GetConfiguration()["Selenium:BaseUrl"] ?? "http://localhost:3000";
    }

    public static string GetBrowserType()
    {
        return GetConfiguration()["Selenium:BrowserType"] ?? "Chrome";
    }

    public static bool IsHeadless()
    {
        return bool.Parse(GetConfiguration()["Selenium:Headless"] ?? "false");
    }

    public static int GetImplicitWait()
    {
        return int.Parse(GetConfiguration()["Selenium:ImplicitWait"] ?? "10");
    }

    public static int GetExplicitWait()
    {
        return int.Parse(GetConfiguration()["Selenium:ExplicitWait"] ?? "15");
    }

    public static int GetPageLoadTimeout()
    {
        return int.Parse(GetConfiguration()["Selenium:PageLoadTimeout"] ?? "30");
    }
}
