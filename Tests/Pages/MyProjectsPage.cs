using OpenQA.Selenium;

namespace SilvinaPortfolioTests.Pages;

public class MyProjectsPage : BasePage
{
    // Locators
    private By MyProjectsSection => By.CssSelector("[data-testid='my-projects-section']");
    private By FeaturedProjectsGrid => By.CssSelector("[data-testid='featured-projects-grid']");
    private By ViewAllProjectsButton => By.CssSelector("[data-testid='view-all-projects-button']");
    private By MyProjectsHeader => By.CssSelector("[data-testid='my-projects-header']");
    private By MyProjectsMainTitle => By.CssSelector("[data-testid='my-projects-main-title']");

    public MyProjectsPage(IWebDriver driver) : base(driver) { }

    public bool IsMyProjectsSectionDisplayed()
    {
        return IsElementDisplayed(MyProjectsSection);
    }

    public bool IsFeaturedGridDisplayed()
    {
        return IsElementDisplayed(FeaturedProjectsGrid);
    }

    public bool IsHeaderDisplayed()
    {
        return IsElementDisplayed(MyProjectsHeader);
    }

    public bool IsMainTitleDisplayed()
    {
        return IsElementDisplayed(MyProjectsMainTitle);
    }

    public bool IsViewAllButtonDisplayed()
    {
        return IsElementDisplayed(ViewAllProjectsButton);
    }

    public bool IsFeaturedProjectDisplayed(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='featured-project-card-{projectId}']");
        return IsElementDisplayed(locator);
    }

    public void ClickFeaturedProjectLink(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='featured-project-link-{projectId}']");
        Click(locator);
    }

    public void ClickViewAllProjectsButton()
    {
        Click(ViewAllProjectsButton);
    }

    public string GetFeaturedProjectTitle(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='featured-project-title-{projectId}']");
        return GetText(locator);
    }

    public string GetFeaturedProjectCategory(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='featured-project-category-{projectId}']");
        return GetText(locator);
    }

    public void ScrollToFeaturedProject(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='featured-project-card-{projectId}']");
        ScrollToElement(locator);
    }

    public string GetViewAllButtonHref()
    {
        return GetAttribute(ViewAllProjectsButton, "href");
    }

    public string GetFeaturedProjectLinkHref(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='featured-project-link-{projectId}']");
        return GetAttribute(locator, "href");
    }

    public string GetMainTitle()
    {
        return GetText(MyProjectsMainTitle);
    }
}
