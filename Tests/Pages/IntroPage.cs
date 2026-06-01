using OpenQA.Selenium;

namespace SilvinaPortfolioTests.Pages;

public class IntroPage : BasePage
{
    // Locators
    private By HeroSection => By.CssSelector("[data-testid='hero-section']");
    private By HeroTitle => By.CssSelector("[data-testid='hero-title']");
    private By HeroDescription => By.CssSelector("[data-testid='hero-description']");
    private By ViewProjectsButton => By.CssSelector("[data-testid='btn-view-projects']");
    private By ContactCTAButton => By.CssSelector("[data-testid='btn-contact-cta']");
    private By SliderSection => By.CssSelector("[data-testid='slider-section']");

    public IntroPage(IWebDriver driver) : base(driver) { }

    public bool IsHeroSectionDisplayed()
    {
        return IsElementDisplayed(HeroSection);
    }

    public bool IsTitleDisplayed()
    {
        return IsElementDisplayed(HeroTitle);
    }

    public bool IsDescriptionDisplayed()
    {
        return IsElementDisplayed(HeroDescription);
    }

    public bool IsViewProjectsButtonDisplayed()
    {
        return IsElementDisplayed(ViewProjectsButton);
    }

    public bool IsContactCTAButtonDisplayed()
    {
        return IsElementDisplayed(ContactCTAButton);
    }

    public bool IsSliderSectionDisplayed()
    {
        return IsElementDisplayed(SliderSection);
    }

    public string GetHeroTitle()
    {
        return GetText(HeroTitle);
    }

    public string GetHeroDescription()
    {
        return GetText(HeroDescription);
    }

    public void ClickViewProjectsButton()
    {
        Click(ViewProjectsButton);
    }

    public void ClickContactCTAButton()
    {
        Click(ContactCTAButton);
    }

    public string GetViewProjectsButtonHref()
    {
        return GetAttribute(ViewProjectsButton, "href");
    }

    public string GetContactCTAButtonHref()
    {
        return GetAttribute(ContactCTAButton, "href");
    }
}
