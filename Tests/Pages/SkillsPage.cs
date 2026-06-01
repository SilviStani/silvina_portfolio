using OpenQA.Selenium;

namespace SilvanaPortfolioTests.Pages;

public class SkillsPage : BasePage
{
    // Locators
    private By SkillsSection => By.CssSelector("[data-testid='skills-section']");
    private By SkillsConnect => By.CssSelector("[data-testid='skills-connect']");
    private By SendMessageButton => By.CssSelector("[data-testid='btn-send-message']");
    private By SocialLinksContainer => By.CssSelector("[data-testid='social-links-container']");

    public SkillsPage(IWebDriver driver) : base(driver) { }

    public bool IsSkillsSectionDisplayed()
    {
        return IsElementDisplayed(SkillsSection);
    }

    public bool IsConnectTextDisplayed()
    {
        return IsElementDisplayed(SkillsConnect);
    }

    public bool IsSendMessageButtonDisplayed()
    {
        return IsElementDisplayed(SendMessageButton);
    }

    public bool IsSocialLinksContainerDisplayed()
    {
        return IsElementDisplayed(SocialLinksContainer);
    }

    public void ClickSendMessageButton()
    {
        Click(SendMessageButton);
    }

    public bool IsSocialLinkDisplayed(string socialName)
    {
        var locator = By.CssSelector($"[data-testid='social-link-{socialName}']");
        return IsElementDisplayed(locator);
    }

    public void ClickSocialLink(string socialName)
    {
        var locator = By.CssSelector($"[data-testid='social-link-{socialName}']");
        Click(locator);
    }

    public string GetSendMessageButtonHref()
    {
        return GetAttribute(SendMessageButton, "href");
    }

    public string GetSocialLinkHref(string socialName)
    {
        var locator = By.CssSelector($"[data-testid='social-link-{socialName}']");
        return GetAttribute(locator, "href");
    }
}
