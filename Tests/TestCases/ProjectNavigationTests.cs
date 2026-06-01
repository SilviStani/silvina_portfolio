using NUnit.Framework;
using SilvanaPortfolioTests.Pages;
using SilvanaPortfolioTests.Utilities;
using OpenQA.Selenium;

namespace SilvanaPortfolioTests.TestCases;

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
        Assert.IsTrue(_myProjectsPage.IsFeaturedProjectDisplayed("henryapp"), "henryapp project should be displayed");
        Assert.IsTrue(_myProjectsPage.IsFeaturedProjectDisplayed("pom-selenium"), "pom-selenium project should be displayed");
        Assert.IsTrue(_myProjectsPage.IsFeaturedProjectDisplayed("walter"), "walter project should be displayed");
    }

    [Test]
    public void TestFeaturedProjectNavigationToPortfolio()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-project-link-henryapp']"));
        
        var expectedHref = "/projects#project-henryapp";
        var actualHref = _myProjectsPage.GetFeaturedProjectLinkHref("henryapp");
        
        Assert.AreEqual(expectedHref, actualHref, "Featured project link should point to correct project");
    }

    [Test]
    public void TestClickFeaturedProjectNavigatesToPortfolio()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-project-link-henryapp']"));
        _myProjectsPage.ClickFeaturedProjectLink("henryapp");
        
        Thread.Sleep(1000);
        Assert.IsTrue(_driver.Url.Contains("/projects#project-henryapp"), "Should navigate to henryapp project");
    }

    [Test]
    public void TestViewAllProjectsButtonNavigation()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='view-all-projects-button']"));
        
        var href = _myProjectsPage.GetViewAllButtonHref();
        Assert.AreEqual("/projects", href, "View All button should link to /projects");
    }

    [Test]
    public void TestClickViewAllProjectsButton()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='view-all-projects-button']"));
        _myProjectsPage.ClickViewAllProjectsButton();
        
        Thread.Sleep(1000);
        Assert.AreEqual("http://localhost:3000/projects", _driver.Url, "Should navigate to full projects page");
    }

    [Test]
    public void TestFeaturedProjectMetadataDisplay()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-project-card-henryapp']"));
        
        var title = _myProjectsPage.GetFeaturedProjectTitle("henryapp");
        var category = _myProjectsPage.GetFeaturedProjectCategory("henryapp");
        
        Assert.IsNotEmpty(title, "Project title should not be empty");
        Assert.IsNotEmpty(category, "Project category should not be empty");
    }

    [Test]
    public void TestPortfolioPageProjectCards()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='projects-grid']"));
        
        // Test some featured projects are visible on portfolio page
        Assert.IsTrue(_portfolioPage.IsProjectCardDisplayed("henryapp"), "henryapp should be on portfolio page");
        Assert.IsTrue(_portfolioPage.IsProjectCardDisplayed("pom-selenium"), "pom-selenium should be on portfolio page");
    }

    [Test]
    public void TestDirectProjectNavigation()
    {
        _portfolioPage.NavigateToProject("henryapp");
        
        Thread.Sleep(1000);
        Assert.IsTrue(_driver.Url.Contains("/projects#project-henryapp"), "Should navigate to henryapp project");
    }

    [Test]
    public void TestProjectCardTitleDisplay()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='project-card-henryapp']"));
        
        var title = _portfolioPage.GetProjectTitle("henryapp");
        Assert.IsNotEmpty(title, "Project title should be displayed");
    }

    [Test]
    public void TestProjectCardCategoryDisplay()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='project-card-henryapp']"));
        
        var category = _portfolioPage.GetProjectCategory("henryapp");
        Assert.IsNotEmpty(category, "Project category should be displayed");
        Assert.AreEqual("Full Stack", category, "Henry App should be Full Stack category");
    }
}
