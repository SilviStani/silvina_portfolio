using System;
using System.Threading;
using OpenQA.Selenium;
using SilvinaPortfolioTests.Utilities;

namespace SilvinaPortfolioTests.Pages;

public abstract class BasePage
{
    protected IWebDriver Driver;
    protected WaitHelper Wait;
    protected string BaseUrl;

    protected BasePage(IWebDriver driver)
    {
        Driver = driver;
        Wait = new WaitHelper(driver);
        BaseUrl = TestConfig.GetBaseUrl();
    }

    public IWebElement FindElement(By locator)
    {
        return Wait.WaitForElementVisible(locator);
    }

    public void Click(By locator)
    {
        var element = Wait.WaitForElementClickable(locator);
        element.Click();
    }

    public void SendKeys(By locator, string text)
    {
        var element = FindElement(locator);
        element.Clear();
        element.SendKeys(text);
    }

    public string GetText(By locator)
    {
        return FindElement(locator).Text;
    }

    public string GetAttribute(By locator, string attributeName)
    {
        return FindElement(locator).GetAttribute(attributeName);
    }

    public bool IsElementDisplayed(By locator)
    {
        return Wait.IsElementDisplayed(locator);
    }

    public void NavigateTo(string path)
    {
        Driver.Navigate().GoToUrl($"{BaseUrl}{path}");
    }

    public void WaitForUrl(string urlPortion)
    {
        Wait.WaitForUrlContains(urlPortion);
    }

    public void ScrollToElement(By locator)
    {
        var element = FindElement(locator);
        Wait.ScrollToElement(element);
    }

    public void ScrollToTop()
    {
        Wait.ScrollToTop();
    }

    public void ScrollToBottom()
    {
        Wait.ScrollToBottom();
    }

    public void SetWindowSize(int width, int height)
    {
        DriverManager.SetWindowSize(width, height);
    }
}
