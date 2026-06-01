# Silvina Portfolio - Selenium Test Automation

Automated end-to-end test suite for Silvina's portfolio using Selenium WebDriver with C# and NUnit.

## 📋 Project Structure

```
Tests/
├── Pages/                          # Page Object Model
│   ├── BasePage.cs                # Base class with common functionality
│   ├── NavBarPage.cs              # Navigation bar interactions
│   ├── IntroPage.cs               # Hero section interactions
│   ├── PortfolioPage.cs           # Projects showcase interactions
│   ├── MyProjectsPage.cs          # Featured projects section interactions
│   └── SkillsPage.cs              # Skills/Contact section interactions
├── TestCases/                      # Test classes
│   ├── NavigationTests.cs         # Link and navigation tests
│   ├── ComponentVisibilityTests.cs # Component visibility tests
│   ├── ResponsiveTests.cs         # Mobile/tablet/desktop responsiveness
│   └── ProjectNavigationTests.cs  # Project navigation and display tests
├── Utilities/                      # Helper classes
│   ├── DriverManager.cs           # WebDriver initialization and management
│   ├── WaitHelper.cs              # Explicit waits and scroll helpers
│   └── TestConfig.cs              # Configuration management
├── appsettings.json               # Test configuration
└── SilvinaPortfolioTests.csproj   # Project file
```

## 🛠️ Prerequisites

- .NET SDK 8.0 or higher
- Visual Studio or VS Code with C# extension
- Chrome browser installed

## ⚙️ Setup & Installation

1. **Navigate to Tests folder:**
   ```bash
   cd Tests
   ```

2. **Restore dependencies:**
   ```bash
   dotnet restore
   ```

3. **Build the project:**
   ```bash
   dotnet build
   ```

## 🚀 Running Tests

### Run all tests:
```bash
dotnet test
```

### Run specific test class:
```bash
dotnet test --filter "ClassName=SilvinaPortfolioTests.TestCases.NavigationTests"
```

### Run with verbose output:
```bash
dotnet test --verbosity detailed
```

### Run in headed mode (see browser):
Edit `appsettings.json` and set:
```json
"Headless": false
```

## 📝 Test Coverage

### Navigation Tests
- NavBar display and functionality
- Logo navigation
- Section link navigation (About, Projects, Contact)
- CTA button navigation from hero section

### Component Visibility Tests
- Hero section display
- Featured projects section
- Portfolio section
- Skills/Contact section
- Button and link visibility

### Responsive Tests
- Mobile navbar (426px) hides QA Automation and Skills items
- Responsive layout on mobile (426px), tablet (768px), and desktop (1920px)
- Grid layout changes per breakpoint
- Font size responsiveness

### Project Navigation Tests
- Featured projects display
- Click navigation to full portfolio
- Project metadata (title, category)
- Direct project navigation via hash anchors
- Portfolio page project cards

## 🔧 Configuration

Edit `appsettings.json` to customize:

```json
{
  "Selenium": {
    "BaseUrl": "http://localhost:3000",        // Base URL of portfolio
    "BrowserType": "Chrome",                   // Browser type
    "Headless": false,                         // Run in headless mode
    "ImplicitWait": 10,                        // Implicit wait in seconds
    "ExplicitWait": 15,                        // Explicit wait in seconds
    "PageLoadTimeout": 30                      // Page load timeout in seconds
  },
  "MobileViewport": {
    "Width": 426,
    "Height": 768
  },
  "TabletViewport": {
    "Width": 768,
    "Height": 1024
  },
  "DesktopViewport": {
    "Width": 1920,
    "Height": 1080
  }
}
```

## 📍 Using Test Identifiers

All tests use `data-testid` attributes for reliable element localization:

```csharp
// Example: Finding element by data-testid
private By NavbarContainer => By.CssSelector("[data-testid='navbar-container']");

// CSS Selector Pattern
By.CssSelector("[data-testid='element-name']")
```

## 🎯 Page Object Model Pattern

Each page has dedicated methods for user interactions:

```csharp
public class NavBarPage : BasePage
{
    public void ClickAboutLink() { /* ... */ }
    public bool IsNavBarDisplayed() { /* ... */ }
    public bool IsQAItemVisibleOnMobile() { /* ... */ }
}
```

## 📊 Test Results

Test results are displayed in console output. For CI/CD integration:

```bash
dotnet test --logger "trx;LogFileName=test-results.trx"
```

## 🔍 Debugging

### Enable verbose logging:
```bash
dotnet test --verbosity diag
```

### Run single test:
```bash
dotnet test --filter "Name=TestNavigatesToProject"
```

### Pause on failure (for investigation):
Add `Thread.Sleep(5000)` in test or use debugger.

## 🐛 Common Issues

### WebDriver timeout
- Increase `ExplicitWait` in appsettings.json
- Ensure portfolio server is running (`npm run dev`)

### Element not found
- Verify `data-testid` matches component rendering
- Check responsive breakpoints match configuration
- Inspect page with browser DevTools

### Port already in use
- Change `BaseUrl` to different port
- Kill existing Node process

## 📚 Resources

- [Selenium WebDriver Documentation](https://www.selenium.dev/documentation/webdriver/)
- [NUnit Documentation](https://docs.nunit.org/)
- [WebDriverManager NuGet](https://www.nuget.org/packages/WebDriverManager/)

## ✅ Next Steps

1. Start portfolio dev server: `npm run dev`
2. Run tests: `dotnet test`
3. Verify all tests pass ✓
4. Add more test cases as needed
5. Integrate with CI/CD pipeline

---

**Happy Testing! 🎉**
