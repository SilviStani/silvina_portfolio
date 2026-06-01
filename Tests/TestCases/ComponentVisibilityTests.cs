using NUnit.Framework;
using SilvanaPortfolioTests.Pages;
using SilvanaPortfolioTests.Utilities;
using OpenQA.Selenium;

namespace SilvanaPortfolioTests.TestCases;

[TestFixture]
public class ComponentVisibilityTests
{
    private IWebDriver _driver;
    private IntroPage _introPage;
    private MyProjectsPage _myProjectsPage;
    private PortfolioPage _portfolioPage;
    private SkillsPage _skillsPage;

    [SetUp]
    public void Setup()
    {
        _driver = DriverManager.InitializeDriver(headless: TestConfig.IsHeadless());
        _driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(TestConfig.GetImplicitWait());
        
        _introPage = new IntroPage(_driver);
        _myProjectsPage = new MyProjectsPage(_driver);
        _portfolioPage = new PortfolioPage(_driver);
        _skillsPage = new SkillsPage(_driver);
    }

    [TearDown]
    public void TearDown()
    {
        DriverManager.QuitDriver();
    }

    [Test]
    public void TestHeroSectionIsDisplayedOnHome()
    {
        _introPage.NavigateTo("/");
        Assert.IsTrue(_introPage.IsHeroSectionDisplayed(), "Hero section should be displayed");
    }

    [Test]
    public void TestHeroTitleIsDisplayed()
    {
        _introPage.NavigateTo("/");
        Assert.IsTrue(_introPage.IsTitleDisplayed(), "Hero title should be displayed");
        Assert.IsNotEmpty(_introPage.GetHeroTitle(), "Hero title should not be empty");
    }

    [Test]
    public void TestHeroDescriptionIsDisplayed()
    {
        _introPage.NavigateTo("/");
        Assert.IsTrue(_introPage.IsDescriptionDisplayed(), "Hero description should be displayed");
        Assert.IsNotEmpty(_introPage.GetHeroDescription(), "Description should not be empty");
    }

    [Test]
    public void TestCTAButtonsAreDisplayedOnHero()
    {
        _introPage.NavigateTo("/");
        Assert.IsTrue(_introPage.IsViewProjectsButtonDisplayed(), "View Projects button should be displayed");
        Assert.IsTrue(_introPage.IsContactCTAButtonDisplayed(), "Contact CTA button should be displayed");
    }

    [Test]
    public void TestMyProjectsSectionIsDisplayedOnHome()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='my-projects-section']"));
        Assert.IsTrue(_myProjectsPage.IsMyProjectsSectionDisplayed(), "MyProjects section should be displayed");
    }

    [Test]
    public void TestFeaturedGridIsDisplayedInMyProjects()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        Assert.IsTrue(_myProjectsPage.IsFeaturedGridDisplayed(), "Featured grid should be displayed");
    }

    [Test]
    public void TestViewAllButtonInMyProjects()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='view-all-projects-button']"));
        Assert.IsTrue(_myProjectsPage.IsViewAllButtonDisplayed(), "View All button should be displayed");
        Assert.IsNotEmpty(_myProjectsPage.GetViewAllButtonHref(), "View All button should have href");
    }

    [Test]
    public void TestPortfolioSectionIsDisplayedOnProjectsPage()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='portfolio-section']"));
        Assert.IsTrue(_portfolioPage.IsPortfolioSectionDisplayed(), "Portfolio section should be displayed");
    }

    [Test]
    public void TestProjectsGridIsDisplayed()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='projects-grid']"));
        Assert.IsTrue(_portfolioPage.IsProjectsGridDisplayed(), "Projects grid should be displayed");
    }

    [Test]
    public void TestSkillsSectionIsDisplayed()
    {
        _skillsPage.NavigateTo("/");
        _skillsPage.ScrollToElement(By.CssSelector("[data-testid='skills-section']"));
        Assert.IsTrue(_skillsPage.IsSkillsSectionDisplayed(), "Skills section should be displayed");
    }

    [Test]
    public void TestSendMessageButtonIsDisplayedInSkills()
    {
        _skillsPage.NavigateTo("/");
        _skillsPage.ScrollToElement(By.CssSelector("[data-testid='skills-section']"));
        Assert.IsTrue(_skillsPage.IsSendMessageButtonDisplayed(), "Send message button should be displayed");
    }

    [Test]
    public void TestSocialLinksAreDisplayed()
    {
        _skillsPage.NavigateTo("/");
        _skillsPage.ScrollToElement(By.CssSelector("[data-testid='social-links-container']"));
        Assert.IsTrue(_skillsPage.IsSocialLinksContainerDisplayed(), "Social links container should be displayed");
    }
}
