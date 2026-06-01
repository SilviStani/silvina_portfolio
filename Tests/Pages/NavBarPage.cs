using OpenQA.Selenium;

namespace SilvanaPortfolioTests.Pages;

public class NavBarPage : BasePage
{
    // Locators using data-testid
    private By NavbarContainer => By.CssSelector("[data-testid='navbar-container']");
    private By LogoLink => By.CssSelector("[data-testid='logo-link']");
    private By NavMenu => By.CssSelector("[data-testid='nav-menu']");
    private By NavItemAbout => By.CssSelector("[data-testid='nav-item-about']");
    private By NavItemProjects => By.CssSelector("[data-testid='nav-item-projects']");
    private By NavItemQA => By.CssSelector("[data-testid='nav-item-qa']");
    private By NavItemSkills => By.CssSelector("[data-testid='nav-item-skills']");
    private By NavItemContact => By.CssSelector("[data-testid='nav-item-contact']");

    private By NavLinkAbout => By.CssSelector("[data-testid='nav-link-about']");
    private By NavLinkProjects => By.CssSelector("[data-testid='nav-link-projects']");
    private By NavLinkQA => By.CssSelector("[data-testid='nav-link-qa']");
    private By NavLinkSkills => By.CssSelector("[data-testid='nav-link-skills']");
    private By NavLinkContact => By.CssSelector("[data-testid='nav-link-contact']");

    public NavBarPage(IWebDriver driver) : base(driver) { }

    public bool IsNavBarDisplayed()
    {
        return IsElementDisplayed(NavbarContainer);
    }

    public bool IsNavMenuDisplayed()
    {
        return IsElementDisplayed(NavMenu);
    }

    public bool IsLogoClickable()
    {
        try
        {
            FindElement(LogoLink);
            return true;
        }
        catch
        {
            return false;
        }
    }

    public void ClickAboutLink()
    {
        Click(NavLinkAbout);
    }

    public void ClickProjectsLink()
    {
        Click(NavLinkProjects);
    }

    public void ClickQALink()
    {
        Click(NavLinkQA);
    }

    public void ClickSkillsLink()
    {
        Click(NavLinkSkills);
    }

    public void ClickContactLink()
    {
        Click(NavLinkContact);
    }

    public void ClickLogo()
    {
        Click(LogoLink);
    }

    // Mobile responsiveness checks
    public bool IsQAItemVisibleOnMobile()
    {
        SetWindowSize(426, 768);
        return IsElementDisplayed(NavItemQA);
    }

    public bool IsSkillsItemVisibleOnMobile()
    {
        SetWindowSize(426, 768);
        return IsElementDisplayed(NavItemSkills);
    }

    public bool IsAboutItemVisibleOnMobile()
    {
        SetWindowSize(426, 768);
        return IsElementDisplayed(NavItemAbout);
    }

    public bool IsProjectsItemVisibleOnMobile()
    {
        SetWindowSize(426, 768);
        return IsElementDisplayed(NavItemProjects);
    }

    public bool IsContactItemVisibleOnMobile()
    {
        SetWindowSize(426, 768);
        return IsElementDisplayed(NavItemContact);
    }
}
