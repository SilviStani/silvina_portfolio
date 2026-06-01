using System;
using System.Threading;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;

namespace SilvinaPortfolioTests.Utilities;

public class WaitHelper
{
    private readonly IWebDriver _driver;
    private readonly WebDriverWait _wait;

    public WaitHelper(IWebDriver driver, int timeoutSeconds = 15)
    {
        _driver = driver;
        _wait = new WebDriverWait(driver, TimeSpan.FromSeconds(timeoutSeconds));
    }

    public IWebElement WaitForElementVisible(By locator)
    {
        return _wait.Until(driver => 
        {
            var element = driver.FindElement(locator);
            return element.Displayed ? element : null;
        });
    }

    public IWebElement WaitForElementClickable(By locator)
    {
        return _wait.Until(driver => 
        {
            var element = driver.FindElement(locator);
            return element.Displayed && element.Enabled ? element : null;
        });
    }

    public bool WaitForElementPresent(By locator)
    {
        try
        {
            _wait.Until(driver => driver.FindElement(locator));
            return true;
        }
        catch
        {
            return false;
        }
    }

    public bool WaitForElementInvisible(By locator)
    {
        try
        {
            _wait.Until(driver => 
            {
                try
                {
                    var element = driver.FindElement(locator);
                    return !element.Displayed ? true : false;
                }
                catch
                {
                    return true; // element not found, considered invisible
                }
            });
            return true;
        }
        catch
        {
            return false;
        }
    }

    public void WaitForUrlContains(string urlPortion)
    {
        _wait.Until(driver => driver.Url.Contains(urlPortion));
    }

    public void ScrollToElement(IWebElement element)
    {
        var executor = (IJavaScriptExecutor)_driver;
        executor.ExecuteScript("arguments[0].scrollIntoView(true);", element);
        Thread.Sleep(500);
    }

    public void ScrollToTop()
    {
        var executor = (IJavaScriptExecutor)_driver;
        executor.ExecuteScript("window.scrollTo(0, 0);");
    }

    public void ScrollToBottom()
    {
        var executor = (IJavaScriptExecutor)_driver;
        executor.ExecuteScript("window.scrollTo(0, document.body.scrollHeight);");
    }

    public bool IsElementDisplayed(By locator)
    {
        try
        {
            return _driver.FindElement(locator).Displayed;
        }
        catch
        {
            return false;
        }
    }
}
