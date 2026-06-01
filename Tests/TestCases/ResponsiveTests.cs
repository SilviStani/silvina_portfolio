using NUnit.Framework;
using SilvanaPortfolioTests.Pages;
using SilvanaPortfolioTests.Utilities;
using OpenQA.Selenium;

namespace SilvanaPortfolioTests.TestCases;

[TestFixture]
public class ResponsiveTests
{
    private IWebDriver _driver;
    private NavBarPage _navBarPage;

    [SetUp]
    public void Setup()
    {
        _driver = DriverManager.InitializeDriver(headless: TestConfig.IsHeadless());
        _driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(TestConfig.GetImplicitWait());
        
        _navBarPage = new NavBarPage(_driver);
    }

    [TearDown]
    public void TearDown()
    {
        DriverManager.QuitDriver();
    }

    [Test]
    [Description("Mobile view (426px): QA and Skills items should NOT be visible")]
    public void TestMobileNavBarHidesQAAndSkills()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.SetWindowSize(426, 768);
        
        // About, Projects, and Contact should be visible
        Assert.IsTrue(_navBarPage.IsAboutItemVisibleOnMobile(), "About should be visible on mobile");
        Assert.IsTrue(_navBarPage.IsProjectsItemVisibleOnMobile(), "Projects should be visible on mobile");
        Assert.IsTrue(_navBarPage.IsContactItemVisibleOnMobile(), "Contact should be visible on mobile");
        
        // QA and Skills should be hidden
        Assert.IsFalse(_navBarPage.IsQAItemVisibleOnMobile(), "QA should NOT be visible on mobile");
        Assert.IsFalse(_navBarPage.IsSkillsItemVisibleOnMobile(), "Skills should NOT be visible on mobile");
    }

    [Test]
    [Description("Tablet view (768px): All nav items should be visible")]
    public void TestTabletNavBarShowsAllItems()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.SetWindowSize(768, 1024);
        
        Assert.IsTrue(_navBarPage.IsNavMenuDisplayed(), "Nav menu should be displayed on tablet");
    }

    [Test]
    [Description("Desktop view (1920px): All nav items should be visible")]
    public void TestDesktopNavBarShowsAllItems()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.SetWindowSize(1920, 1080);
        
        Assert.IsTrue(_navBarPage.IsNavMenuDisplayed(), "Nav menu should be displayed on desktop");
    }

    [Test]
    [Description("Mobile view: NavBar should not require horizontal scrolling")]
    public void TestMobileNavBarDoesNotRequireScrolling()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.SetWindowSize(426, 768);
        
        // Get navbar container
        var navbarWidth = _driver.Manage().Window.Size.Width;
        
        // NavBar should fit within viewport
        Assert.IsTrue(_navBarPage.IsNavBarDisplayed(), "NavBar should be displayed without scrolling");
    }

    [Test]
    [Description("Hero section should be responsive on mobile")]
    public void TestHeroSectionResponsiveOnMobile()
    {
        var introPage = new IntroPage(_driver);
        introPage.NavigateTo("/");
        introPage.SetWindowSize(426, 768);
        
        Assert.IsTrue(introPage.IsHeroSectionDisplayed(), "Hero section should display on mobile");
        Assert.IsTrue(introPage.IsTitleDisplayed(), "Hero title should display on mobile");
        Assert.IsTrue(introPage.IsViewProjectsButtonDisplayed(), "CTA buttons should display on mobile");
    }

    [Test]
    [Description("Featured projects should be 1 column on mobile")]
    public void TestMyProjectsGridResponsiveOnMobile()
    {
        var myProjectsPage = new MyProjectsPage(_driver);
        myProjectsPage.NavigateTo("/");
        myProjectsPage.SetWindowSize(426, 768);
        myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        
        Assert.IsTrue(myProjectsPage.IsFeaturedGridDisplayed(), "Featured grid should display on mobile");
    }

    [Test]
    [Description("Featured projects should be 2 columns on tablet")]
    public void TestMyProjectsGridResponsiveOnTablet()
    {
        var myProjectsPage = new MyProjectsPage(_driver);
        myProjectsPage.NavigateTo("/");
        myProjectsPage.SetWindowSize(768, 1024);
        myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        
        Assert.IsTrue(myProjectsPage.IsFeaturedGridDisplayed(), "Featured grid should display on tablet");
    }

    [Test]
    [Description("Featured projects should be 3 columns on desktop")]
    public void TestMyProjectsGridResponsiveOnDesktop()
    {
        var myProjectsPage = new MyProjectsPage(_driver);
        myProjectsPage.NavigateTo("/");
        myProjectsPage.SetWindowSize(1920, 1080);
        myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        
        Assert.IsTrue(myProjectsPage.IsFeaturedGridDisplayed(), "Featured grid should display on desktop");
    }
}
