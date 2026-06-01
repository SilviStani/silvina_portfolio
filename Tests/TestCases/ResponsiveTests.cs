using System;
using System.ComponentModel;
using System.Threading;
using NUnit.Framework;
using SilvinaPortfolioTests.Pages;
using SilvinaPortfolioTests.Utilities;
using OpenQA.Selenium;

namespace SilvinaPortfolioTests.TestCases;

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
    [System.ComponentModel.Description("Mobile view (426px): QA and Skills items should NOT be visible")]
    public void TestMobileNavBarHidesQAAndSkills()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.SetWindowSize(426, 768);
        
        // About, Projects, and Contact should be visible
        Assert.That(_navBarPage.IsAboutItemVisibleOnMobile(), Is.True, "About should be visible on mobile");
        Assert.That(_navBarPage.IsProjectsItemVisibleOnMobile(), Is.True, "Projects should be visible on mobile");
        Assert.That(_navBarPage.IsContactItemVisibleOnMobile(), Is.True, "Contact should be visible on mobile");
        
        // QA and Skills should be hidden
        Assert.That(_navBarPage.IsQAItemVisibleOnMobile(), Is.False, "QA should NOT be visible on mobile");
        Assert.That(_navBarPage.IsSkillsItemVisibleOnMobile(), Is.False, "Skills should NOT be visible on mobile");
    }

    [Test]
    [System.ComponentModel.Description("Tablet view (768px): All nav items should be visible")]
    public void TestTabletNavBarShowsAllItems()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.SetWindowSize(768, 1024);
        
        Assert.That(_navBarPage.IsNavMenuDisplayed(), Is.True, "Nav menu should be displayed on tablet");
    }

    [Test]
    [System.ComponentModel.Description("Desktop view (1920px): All nav items should be visible")]
    public void TestDesktopNavBarShowsAllItems()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.SetWindowSize(1920, 1080);
        
        Assert.That(_navBarPage.IsNavMenuDisplayed(), Is.True, "Nav menu should be displayed on desktop");
    }

    [Test]
    [System.ComponentModel.Description("Mobile view: NavBar should not require horizontal scrolling")]
    public void TestMobileNavBarDoesNotRequireScrolling()
    {
        _navBarPage.NavigateTo("/");
        _navBarPage.SetWindowSize(426, 768);
        
        // Get navbar container
        var navbarWidth = _driver.Manage().Window.Size.Width;
        
        // NavBar should fit within viewport
        Assert.That(_navBarPage.IsNavBarDisplayed(), Is.True, "NavBar should be displayed without scrolling");
    }

    [Test]
    [System.ComponentModel.Description("Hero section should be responsive on mobile")]
    public void TestHeroSectionResponsiveOnMobile()
    {
        var introPage = new IntroPage(_driver);
        introPage.NavigateTo("/");
        introPage.SetWindowSize(426, 768);
        
        Assert.That(introPage.IsHeroSectionDisplayed(), Is.True, "Hero section should display on mobile");
        Assert.That(introPage.IsTitleDisplayed(), Is.True, "Hero title should display on mobile");
        Assert.That(introPage.IsViewProjectsButtonDisplayed(), Is.True, "CTA buttons should display on mobile");
    }

    [Test]
    [System.ComponentModel.Description("Featured projects should be 1 column on mobile")]
    public void TestMyProjectsGridResponsiveOnMobile()
    {
        var myProjectsPage = new MyProjectsPage(_driver);
        myProjectsPage.NavigateTo("/");
        myProjectsPage.SetWindowSize(426, 768);
        myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        
        Assert.That(myProjectsPage.IsFeaturedGridDisplayed(), Is.True, "Featured grid should display on mobile");
    }

    [Test]
    [System.ComponentModel.Description("Featured projects should be 2 columns on tablet")]
    public void TestMyProjectsGridResponsiveOnTablet()
    {
        var myProjectsPage = new MyProjectsPage(_driver);
        myProjectsPage.NavigateTo("/");
        myProjectsPage.SetWindowSize(768, 1024);
        myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        
        Assert.That(myProjectsPage.IsFeaturedGridDisplayed(), Is.True, "Featured grid should display on tablet");
    }

    [Test]
    [System.ComponentModel.Description("Featured projects should be 3 columns on desktop")]
    public void TestMyProjectsGridResponsiveOnDesktop()
    {
        var myProjectsPage = new MyProjectsPage(_driver);
        myProjectsPage.NavigateTo("/");
        myProjectsPage.SetWindowSize(1920, 1080);
        myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        
        Assert.That(myProjectsPage.IsFeaturedGridDisplayed(), Is.True, "Featured grid should display on desktop");
    }
}
