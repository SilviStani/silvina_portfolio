using System;
using System.Threading;
using NUnit.Framework;
using SilvinaPortfolioTests.Pages;
using SilvinaPortfolioTests.Utilities;
using OpenQA.Selenium;

namespace SilvinaPortfolioTests.TestCases;

[TestFixture]
public class ProjectNavigationTests
{
    private IWebDriver _driver;
    private MyProjectsPage _myProjectsPage;
    private PortfolioPage _portfolioPage;

    [SetUp]
    public void Setup()
    {
        _driver = DriverManager.InitializeDriver(headless: TestConfig.IsHeadless());
        _driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(TestConfig.GetImplicitWait());
        
        _myProjectsPage = new MyProjectsPage(_driver);
        _portfolioPage = new PortfolioPage(_driver);
    }

    [TearDown]
    public void TearDown()
    {
        DriverManager.QuitDriver();
    }

    [Test]
    public void TestFeaturedProjectsDisplayed()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        
        // Check featured projects
        Assert.That(_myProjectsPage.IsFeaturedProjectDisplayed("henryapp"), Is.True, "henryapp project should be displayed");
        Assert.That(_myProjectsPage.IsFeaturedProjectDisplayed("pom-selenium"), Is.True, "pom-selenium project should be displayed");
        Assert.That(_myProjectsPage.IsFeaturedProjectDisplayed("walter"), Is.True, "walter project should be displayed");
    }

    [Test]
    public void TestFeaturedProjectNavigationToPortfolio()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-project-link-henryapp']"));
        
        var expectedHref = "/projects#project-henryapp";
        var actualHref = _myProjectsPage.GetFeaturedProjectLinkHref("henryapp");
        
        Assert.That(actualHref, Is.EqualTo(expectedHref), "Featured project link should point to correct project");
    }

    [Test]
    public void TestClickFeaturedProjectNavigatesToPortfolio()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-project-link-henryapp']"));
        _myProjectsPage.ClickFeaturedProjectLink("henryapp");
        
        Thread.Sleep(1000);
        Assert.That(_driver.Url, Does.Contain("/projects#project-henryapp"), "Should navigate to henryapp project");
    }

    [Test]
    public void TestViewAllProjectsButtonNavigation()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='view-all-projects-button']"));
        
        var href = _myProjectsPage.GetViewAllButtonHref();
        Assert.That(href, Is.EqualTo("/projects"), "View All button should link to /projects");
    }

    [Test]
    public void TestClickViewAllProjectsButton()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='view-all-projects-button']"));
        _myProjectsPage.ClickViewAllProjectsButton();
        
        Thread.Sleep(1000);
        Assert.That(_driver.Url, Is.EqualTo("http://localhost:3000/projects"), "Should navigate to full projects page");
    }

    [Test]
    public void TestFeaturedProjectMetadataDisplay()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-project-card-henryapp']"));
        
        var title = _myProjectsPage.GetFeaturedProjectTitle("henryapp");
        var category = _myProjectsPage.GetFeaturedProjectCategory("henryapp");
        
        Assert.That(title, Is.Not.Empty, "Project title should not be empty");
        Assert.That(category, Is.Not.Empty, "Project category should not be empty");
    }

    [Test]
    public void TestPortfolioPageProjectCards()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='projects-grid']"));
        
        // Test some featured projects are visible on portfolio page
        Assert.That(_portfolioPage.IsProjectCardDisplayed("henryapp"), Is.True, "henryapp should be on portfolio page");
        Assert.That(_portfolioPage.IsProjectCardDisplayed("pom-selenium"), Is.True, "pom-selenium should be on portfolio page");
    }

    [Test]
    public void TestDirectProjectNavigation()
    {
        _portfolioPage.NavigateToProject("henryapp");
        
        Thread.Sleep(1000);
        Assert.That(_driver.Url, Does.Contain("/projects#project-henryapp"), "Should navigate to henryapp project");
    }

    [Test]
    public void TestProjectCardTitleDisplay()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='project-card-henryapp']"));
        
        var title = _portfolioPage.GetProjectTitle("henryapp");
        Assert.That(title, Is.Not.Empty, "Project title should be displayed");
    }

    [Test]
    public void TestProjectCardCategoryDisplay()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='project-card-henryapp']"));
        
        var category = _portfolioPage.GetProjectCategory("henryapp");
        Assert.That(category, Is.Not.Empty, "Project category should be displayed");
        Assert.That(category, Is.EqualTo("Full Stack"), "Henry App should be Full Stack category");
    }
}
