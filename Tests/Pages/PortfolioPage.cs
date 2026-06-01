using OpenQA.Selenium;

namespace SilvinaPortfolioTests.Pages;

public class PortfolioPage : BasePage
{
    // Locators
    private By PortfolioSection => By.CssSelector("[data-testid='portfolio-section']");
    private By FilterBar => By.CssSelector("[data-testid='filter-bar']");
    private By ProjectsGrid => By.CssSelector("[data-testid='projects-grid']");

    public PortfolioPage(IWebDriver driver) : base(driver) { }

    public bool IsPortfolioSectionDisplayed()
    {
        return IsElementDisplayed(PortfolioSection);
    }

    public bool IsFilterBarDisplayed()
    {
        return IsElementDisplayed(FilterBar);
    }

    public bool IsProjectsGridDisplayed()
    {
        return IsElementDisplayed(ProjectsGrid);
    }

    public void NavigateToProject(string projectId)
    {
        NavigateTo($"/projects#project-{projectId}");
    }

    public bool IsProjectCardDisplayed(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-card-{projectId}']");
        return IsElementDisplayed(locator);
    }

    public void ClickProjectCard(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-card-{projectId}']");
        Click(locator);
    }

    public void ClickProjectGithubLink(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-github-link-{projectId}']");
        Click(locator);
    }

    public void ClickProjectLiveLink(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-live-link-{projectId}']");
        Click(locator);
    }

    public string GetProjectTitle(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-title-{projectId}']");
        return GetText(locator);
    }

    public string GetProjectCategory(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-category-{projectId}']");
        return GetText(locator);
    }

    public void ScrollToProject(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-card-{projectId}']");
        ScrollToElement(locator);
    }

    public string GetProjectGithubLink(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-github-link-{projectId}']");
        return GetAttribute(locator, "href");
    }

    public string GetProjectLiveLink(string projectId)
    {
        var locator = By.CssSelector($"[data-testid='project-live-link-{projectId}']");
        return GetAttribute(locator, "href");
    }
}
