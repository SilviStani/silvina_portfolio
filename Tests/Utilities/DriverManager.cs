using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;

namespace SilvanaPortfolioTests.Utilities;

public class DriverManager
{
    private static IWebDriver? _driver;

    public static IWebDriver InitializeDriver(bool headless = false)
    {
        new DriverManager().SetUpDriver(new ChromeConfig());
        
        var options = new ChromeOptions();
        if (headless)
        {
            options.AddArgument("--headless");
        }
        
        options.AddArgument("--no-sandbox");
        options.AddArgument("--disable-dev-shm-usage");
        options.AddArgument("--disable-blink-features=AutomationControlled");
        options.AddExcludedArgument("enable-automation");
        options.AddAdditionalOption("useAutomationExtension", false);

        _driver = new ChromeDriver(options);
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
