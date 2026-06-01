using OpenQA.Selenium;
using SilvanaPortfolioTests.Utilities;

namespace SilvanaPortfolioTests.Pages;

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

    protected IWebElement FindElement(By locator)
    {
        return Wait.WaitForElementVisible(locator);
    }

    protected void Click(By locator)
    {
        var element = Wait.WaitForElementClickable(locator);
        element.Click();
    }

    protected void SendKeys(By locator, string text)
    {
        var element = FindElement(locator);
        element.Clear();
        element.SendKeys(text);
    }

    protected string GetText(By locator)
    {
        return FindElement(locator).Text;
    }

    protected string GetAttribute(By locator, string attributeName)
    {
        return FindElement(locator).GetAttribute(attributeName);
    }

    protected bool IsElementDisplayed(By locator)
    {
        return Wait.IsElementDisplayed(locator);
    }

    protected void NavigateTo(string path)
    {
        Driver.Navigate().GoToUrl($"{BaseUrl}{path}");
    }

    protected void WaitForUrl(string urlPortion)
    {
        Wait.WaitForUrlContains(urlPortion);
    }

    protected void ScrollToElement(By locator)
    {
        var element = FindElement(locator);
        Wait.ScrollToElement(element);
    }

    protected void ScrollToTop()
    {
        Wait.ScrollToTop();
    }

    protected void ScrollToBottom()
    {
        Wait.ScrollToBottom();
    }

    protected void SetWindowSize(int width, int height)
    {
        DriverManager.SetWindowSize(width, height);
    }
}
