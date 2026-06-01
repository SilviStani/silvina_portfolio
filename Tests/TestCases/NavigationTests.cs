using NUnit.Framework;
using SilvanaPortfolioTests.Pages;
using SilvanaPortfolioTests.Utilities;
using OpenQA.Selenium;

namespace SilvanaPortfolioTests.TestCases;

[TestFixture]
public class NavigationTests
{
    private IWebDriver _driver;
    private NavBarPage _navBarPage;
    private IntroPage _introPage;

    [SetUp]
    public void Setup()
    {
        _driver = DriverManager.InitializeDriver(headless: TestConfig.IsHeadless());
        _driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(TestConfig.GetImplicitWait());
        _driver.Manage().Timeouts().PageLoadTimeout = TimeSpan.FromSeconds(TestConfig.GetPageLoadTimeout());
        
        _navBarPage = new NavBarPage(_driver);
        _introPage = new IntroPage(_driver);
    }

    [TearDown]
    public void TearDown()
    {
        DriverManager.QuitDriver();
    }

    [Test]
    public void TestNavBarIsDisplayedOnHomePage()
    {
        _navBarPage.NavigateTo("/");
        Assert.IsTrue(_navBarPage.IsNavBarDisplayed(), "NavBar should be displayed");
    }

    [Test]
    public void TestNavMenuIsDisplayedOnHomePage()
    {
        _navBarPage.NavigateTo("/");
        Assert.IsTrue(_navBarPage.IsNavMenuDisplayed(), "Nav menu should be displayed");
    }

    [Test]
    public void TestLogoIsClickable()
    {
        _navBarPage.NavigateTo("/");
        Assert.IsTrue(_navBarPage.IsLogoClickable(), "Logo should be clickable");
    }

    [Test]
    public void TestLogoNavigatesToHome()
    {
        _navBarPage.NavigateTo("/projects");
        _navBarPage.ClickLogo();
        Thread.Sleep(1000);
        Assert.AreEqual("http://localhost:3000/", _driver.Url, "Logo should navigate to home");
    }

    [Test]
    public void TestAboutLinkNavigation()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.ClickAboutLink();
        Thread.Sleep(1000);
        Assert.IsTrue(_driver.Url.Contains("#about"), "Should navigate to About section");
    }

    [Test]
    public void TestProjectsLinkNavigation()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.ClickProjectsLink();
        Thread.Sleep(1000);
        Assert.AreEqual("http://localhost:3000/projects", _driver.Url, "Should navigate to Projects page");
    }

    [Test]
    public void TestContactLinkNavigation()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.ClickContactLink();
        Thread.Sleep(1000);
        Assert.AreEqual("http://localhost:3000/contact", _driver.Url, "Should navigate to Contact");
    }

    [Test]
    public void TestViewProjectsButtonFromHero()
    {
        _introPage.NavigateTo("/");
        _introPage.ClickViewProjectsButton();
        Thread.Sleep(1000);
        Assert.AreEqual("http://localhost:3000/projects", _driver.Url, "Should navigate to Projects");
    }

    [Test]
    public void TestContactCTAButtonFromHero()
    {
        _introPage.NavigateTo("/");
        _introPage.ClickContactCTAButton();
        Thread.Sleep(1000);
        Assert.AreEqual("http://localhost:3000/contact", _driver.Url, "Should navigate to Contact");
    }
}
