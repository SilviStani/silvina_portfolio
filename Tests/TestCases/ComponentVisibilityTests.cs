using System;
using System.Threading;
using NUnit.Framework;
using SilvinaPortfolioTests.Pages;
using SilvinaPortfolioTests.Utilities;
using OpenQA.Selenium;

namespace SilvinaPortfolioTests.TestCases;

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
        Assert.That(_introPage.IsHeroSectionDisplayed(), Is.True, "Hero section should be displayed");
    }

    [Test]
    public void TestHeroTitleIsDisplayed()
    {
        _introPage.NavigateTo("/");
        Assert.That(_introPage.IsTitleDisplayed(), Is.True, "Hero title should be displayed");
        Assert.That(_introPage.GetHeroTitle(), Is.Not.Empty, "Hero title should not be empty");
    }

    [Test]
    public void TestHeroDescriptionIsDisplayed()
    {
        _introPage.NavigateTo("/");
        Assert.That(_introPage.IsDescriptionDisplayed(), Is.True, "Hero description should be displayed");
        Assert.That(_introPage.GetHeroDescription(), Is.Not.Empty, "Description should not be empty");
    }

    [Test]
    public void TestCTAButtonsAreDisplayedOnHero()
    {
        _introPage.NavigateTo("/");
        Assert.That(_introPage.IsViewProjectsButtonDisplayed(), Is.True, "View Projects button should be displayed");
        Assert.That(_introPage.IsContactCTAButtonDisplayed(), Is.True, "Contact CTA button should be displayed");
    }

    [Test]
    public void TestMyProjectsSectionIsDisplayedOnHome()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='my-projects-section']"));
        Assert.That(_myProjectsPage.IsMyProjectsSectionDisplayed(), Is.True, "MyProjects section should be displayed");
    }

    [Test]
    public void TestFeaturedGridIsDisplayedInMyProjects()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='featured-projects-grid']"));
        Assert.That(_myProjectsPage.IsFeaturedGridDisplayed(), Is.True, "Featured grid should be displayed");
    }

    [Test]
    public void TestViewAllButtonInMyProjects()
    {
        _myProjectsPage.NavigateTo("/");
        _myProjectsPage.ScrollToElement(By.CssSelector("[data-testid='view-all-projects-button']"));
        Assert.That(_myProjectsPage.IsViewAllButtonDisplayed(), Is.True, "View All button should be displayed");
        Assert.That(_myProjectsPage.GetViewAllButtonHref(), Is.Not.Empty, "View All button should have href");
    }

    [Test]
    public void TestPortfolioSectionIsDisplayedOnProjectsPage()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='portfolio-section']"));
        Assert.That(_portfolioPage.IsPortfolioSectionDisplayed(), Is.True, "Portfolio section should be displayed");
    }

    [Test]
    public void TestProjectsGridIsDisplayed()
    {
        _portfolioPage.NavigateTo("/projects");
        _portfolioPage.ScrollToElement(By.CssSelector("[data-testid='projects-grid']"));
        Assert.That(_portfolioPage.IsProjectsGridDisplayed(), Is.True, "Projects grid should be displayed");
    }

    [Test]
    public void TestSkillsSectionIsDisplayed()
    {
        _skillsPage.NavigateTo("/");
        _skillsPage.ScrollToElement(By.CssSelector("[data-testid='skills-section']"));
        Assert.That(_skillsPage.IsSkillsSectionDisplayed(), Is.True, "Skills section should be displayed");
    }

    [Test]
    public void TestSendMessageButtonIsDisplayedInSkills()
    {
        _skillsPage.NavigateTo("/");
        _skillsPage.ScrollToElement(By.CssSelector("[data-testid='skills-section']"));
        Assert.That(_skillsPage.IsSendMessageButtonDisplayed(), Is.True, "Send message button should be displayed");
    }

    [Test]
    public void TestSocialLinksAreDisplayed()
    {
        _skillsPage.NavigateTo("/");
        _skillsPage.ScrollToElement(By.CssSelector("[data-testid='social-links-container']"));
        Assert.That(_skillsPage.IsSocialLinksContainerDisplayed(), Is.True, "Social links container should be displayed");
    }
}
