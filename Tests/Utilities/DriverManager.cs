#nullable enable

using System;
using System.Drawing;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;

namespace SilvinaPortfolioTests.Utilities;

public class DriverManager
{
    private static IWebDriver? _driver;

    public static IWebDriver InitializeDriver(bool headless = false)
    {
        new WebDriverManager.DriverManager().SetUpDriver(new ChromeConfig());
        
        var chromeOptions = new ChromeOptions();
        if (headless)
        {
            chromeOptions.AddArgument("--headless");
        }
        
        chromeOptions.AddArgument("--no-sandbox");
        chromeOptions.AddArgument("--disable-dev-shm-usage");
        chromeOptions.AddArgument("--disable-blink-features=AutomationControlled");
        chromeOptions.AddExcludedArgument("enable-automation");
        chromeOptions.AddAdditionalOption("useAutomationExtension", false);

        _driver = new ChromeDriver(chromeOptions);
        return _driver;
    }

    public static IWebDriver GetDriver()
    {
        return _driver ?? throw new Exception("WebDriver is not initialized. Call InitializeDriver() first.");
    }

    public static void QuitDriver()
    {
        if (_driver != null)
        {
            _driver.Quit();
            _driver.Dispose();
            _driver = null;
        }
    }

    public static void SetWindowSize(int width, int height)
    {
        GetDriver().Manage().Window.Size = new System.Drawing.Size(width, height);
    }

    public static void NavigateTo(string url)
    {
        GetDriver().Navigate().GoToUrl(url);
    }
}
