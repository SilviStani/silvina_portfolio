# 🧪 Silvina Portfolio - Selenium C# Test Automation Guide

Complete guide to understanding and running the automated test suite for Silvina's portfolio using Selenium WebDriver with C#.

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Project Structure](#project-structure)
4. [Setup & Installation](#setup--installation)
5. [Running Tests](#running-tests)
6. [Test Coverage](#test-coverage)
7. [Configuration](#configuration)
8. [Debugging & Troubleshooting](#debugging--troubleshooting)
9. [Quick Reference](#quick-reference)

---

## 🎯 Overview

This is an **automated end-to-end test suite** for the Silvina portfolio website using:

- **Language**: C#
- **Testing Framework**: NUnit
- **Browser Automation**: Selenium WebDriver
- **.NET Version**: 8.0+
- **Total Tests**: 37 automated test cases

### What Gets Tested?

✅ Navigation links and routing  
✅ Component visibility and display  
✅ Responsive design (mobile, tablet, desktop)  
✅ Featured projects functionality  
✅ Project navigation and routing  
✅ Button interactions  
✅ Element accessibility  

---

## 📋 Prerequisites

Before you start, ensure you have:

### Required Software

- **Visual Studio** (2022+) OR **Visual Studio Code** with C# extension
- **.NET SDK 8.0+** - [Download](https://dotnet.microsoft.com/download)
- **Chrome Browser** - [Download](https://www.google.com/chrome/)
- **Node.js 18+** - For running portfolio dev server

### Verify Installation

```bash
# Check .NET version
dotnet --version

# Check Chrome is installed
chrome --version  # or where chrome.exe
```

---

## 📁 Project Structure

```
silvina_portfolio/
│
├── Components/              ← Portfolio components
├── src/                     ← Next.js app source
├── public/                  ← Static assets
│
└── Tests/                   ← 🧪 SELENIUM TEST SUITE
    ├── Pages/               ← Page Object Model classes
    │   ├── BasePage.cs      ← Base class with common methods
    │   ├── NavBarPage.cs    ← Navigation bar page object
    │   ├── IntroPage.cs     ← Hero section page object
    │   ├── PortfolioPage.cs ← Projects showcase page object
    │   ├── MyProjectsPage.cs ← Featured projects page object
    │   └── SkillsPage.cs    ← Skills section page object
    │
    ├── TestCases/           ← Actual test files
    │   ├── NavigationTests.cs       ← 9 navigation tests
    │   ├── ComponentVisibilityTests.cs ← 10 visibility tests
    │   ├── ResponsiveTests.cs       ← 8 responsiveness tests
    │   └── ProjectNavigationTests.cs ← 10 project tests
    │
    ├── Utilities/           ← Helper classes
    │   ├── DriverManager.cs ← WebDriver setup & management
    │   ├── WaitHelper.cs    ← Explicit waits & element actions
    │   └── TestConfig.cs    ← Configuration reader
    │
    ├── appsettings.json     ← Test configuration
    ├── SilvanaPortfolioTests.csproj ← Project file (packages)
    ├── README.md            ← Detailed technical docs
    └── .gitignore           ← Git ignore rules
```

---

## 🚀 Setup & Installation

### Step 1: Install .NET SDK

**Windows:**
```bash
# Download and run installer from https://dotnet.microsoft.com/download
dotnet --version  # Verify installation
```

**macOS (using Homebrew):**
```bash
brew install dotnet-sdk
```

**Linux (Ubuntu):**
```bash
sudo apt-get update
sudo apt-get install dotnet-sdk-8.0
```

### Step 2: Navigate to Tests Folder

```bash
cd Tests
```

### Step 3: Restore NuGet Packages

```bash
dotnet restore
```

This downloads:
- NUnit (test framework)
- Selenium WebDriver
- WebDriverManager (auto-downloads ChromeDriver)
- Configuration libraries

### Step 4: Build the Project

```bash
dotnet build
```

Expected output:
```
Build succeeded. ✓
```

---

## ▶️ Running Tests

### Prerequisites Before Running Tests

**Important**: The portfolio dev server must be running!

```bash
# In project root (not in Tests folder)
npm run dev
```

Keep this terminal open. The tests will connect to `http://localhost:3000`.

### Run All Tests

```bash
dotnet test
```

### Run Specific Test Class

```bash
# Navigation tests only
dotnet test --filter "ClassName=SilvanaPortfolioTests.TestCases.NavigationTests"

# Responsive tests only
dotnet test --filter "ClassName=SilvanaPortfolioTests.TestCases.ResponsiveTests"

# Visibility tests only
dotnet test --filter "ClassName=SilvanaPortfolioTests.TestCases.ComponentVisibilityTests"

# Project navigation tests only
dotnet test --filter "ClassName=SilvanaPortfolioTests.TestCases.ProjectNavigationTests"
```

### Run Specific Test Method

```bash
dotnet test --filter "Name=TestAboutLinkNavigation"
```

### Run with Verbose Output

```bash
dotnet test --verbosity detailed
```

Shows detailed info about each test:
- ✓ PASSED
- ✗ FAILED
- ⊘ SKIPPED

### Run in Headed Mode (See Browser)

By default, tests run **headless** (no browser window).

To **see the browser**:

1. Open `Tests/appsettings.json`
2. Change:
   ```json
   "Headless": false
   ```
3. Run tests: `dotnet test`

### Generate Test Report (TRX)

```bash
dotnet test --logger "trx;LogFileName=TestResults/test-results.trx"
```

Results saved to: `Tests/TestResults/test-results.trx`

---

## 🧪 Test Coverage

### 1️⃣ Navigation Tests (9 tests)

**File**: `TestCases/NavigationTests.cs`

Tests that navigation links work correctly:

```
✓ TestNavBarIsDisplayedOnHomePage
✓ TestNavMenuIsDisplayedOnHomePage
✓ TestLogoIsClickable
✓ TestLogoNavigatesToHome
✓ TestAboutLinkNavigation
✓ TestProjectsLinkNavigation
✓ TestContactLinkNavigation
✓ TestViewProjectsButtonFromHero
✓ TestContactCTAButtonFromHero
```

**What it checks:**
- NavBar visible on home page
- All navigation links point to correct URLs
- Logo navigates to home
- CTA buttons navigate correctly

### 2️⃣ Component Visibility Tests (10 tests)

**File**: `TestCases/ComponentVisibilityTests.cs`

Tests that all components are visible and display correctly:

```
✓ TestHeroSectionIsDisplayedOnHome
✓ TestHeroTitleIsDisplayed
✓ TestHeroDescriptionIsDisplayed
✓ TestCTAButtonsAreDisplayedOnHero
✓ TestMyProjectsSectionIsDisplayedOnHome
✓ TestFeaturedGridIsDisplayedInMyProjects
✓ TestViewAllButtonInMyProjects
✓ TestPortfolioSectionIsDisplayedOnProjectsPage
✓ TestProjectsGridIsDisplayed
✓ TestSkillsSectionIsDisplayed
```

**What it checks:**
- All sections render
- Buttons are visible
- Text content displays
- Grids load correctly

### 3️⃣ Responsive Tests (8 tests)

**File**: `TestCases/ResponsiveTests.cs`

Tests responsive design across devices:

```
✓ TestMobileNavBarHidesQAAndSkills         (426px)
✓ TestTabletNavBarShowsAllItems            (768px)
✓ TestDesktopNavBarShowsAllItems           (1920px)
✓ TestMobileNavBarDoesNotRequireScrolling  (426px)
✓ TestHeroSectionResponsiveOnMobile        (426px)
✓ TestMyProjectsGridResponsiveOnMobile     (426px → 1 col)
✓ TestMyProjectsGridResponsiveOnTablet     (768px → 2 cols)
✓ TestMyProjectsGridResponsiveOnDesktop    (1920px → 3 cols)
```

**What it checks:**
- Mobile (426px): QA & Skills hidden ✓
- Tablet (768px): All items visible
- Desktop (1920px): All items visible
- Grid columns adjust per breakpoint
- No horizontal scrolling on mobile

### 4️⃣ Project Navigation Tests (10 tests)

**File**: `TestCases/ProjectNavigationTests.cs`

Tests featured projects and portfolio navigation:

```
✓ TestFeaturedProjectsDisplayed
✓ TestFeaturedProjectNavigationToPortfolio
✓ TestClickFeaturedProjectNavigatesToPortfolio
✓ TestViewAllProjectsButtonNavigation
✓ TestClickViewAllProjectsButton
✓ TestFeaturedProjectMetadataDisplay
✓ TestPortfolioPageProjectCards
✓ TestDirectProjectNavigation
✓ TestProjectCardTitleDisplay
✓ TestProjectCardCategoryDisplay
```

**What it checks:**
- Featured projects (henryapp, pom-selenium, walter) display
- Click navigation works correctly
- URLs have correct hash anchors: `/projects#project-{id}`
- Project metadata (title, category) displays
- Direct navigation to projects works

---

## ⚙️ Configuration

### Edit `appsettings.json`

Located at: `Tests/appsettings.json`

```json
{
  "Selenium": {
    "BaseUrl": "http://localhost:3000",      // Portfolio URL
    "BrowserType": "Chrome",                 // Browser to use
    "Headless": false,                       // Show browser window?
    "ImplicitWait": 10,                      // Implicit wait (seconds)
    "ExplicitWait": 15,                      // Explicit wait (seconds)
    "PageLoadTimeout": 30                    // Page load timeout (seconds)
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

### Configuration Options

| Setting | Default | Purpose |
|---------|---------|---------|
| `BaseUrl` | `http://localhost:3000` | Portfolio website URL |
| `BrowserType` | `Chrome` | Browser to automate |
| `Headless` | `false` | Run without browser window |
| `ImplicitWait` | `10` | Seconds to wait for elements |
| `ExplicitWait` | `15` | Seconds for explicit waits |
| `PageLoadTimeout` | `30` | Seconds to wait for page load |

### Common Adjustments

**If tests timeout:**
```json
"ExplicitWait": 20,        // Increase to 20 seconds
"PageLoadTimeout": 45      // Increase to 45 seconds
```

**If portfolio on different port:**
```json
"BaseUrl": "http://localhost:3001"  // Change port
```

**To run headless (CI/CD):**
```json
"Headless": true
```

---

## 🔍 Debugging & Troubleshooting

### Common Issues

#### ❌ **Tests timeout**

**Error**: `WebDriver timeout` or `element not found after 15 seconds`

**Solution**:
```bash
# 1. Verify portfolio is running
npm run dev

# 2. Check baseUrl in appsettings.json
# 3. Increase ExplicitWait in appsettings.json
# 4. Run single test with verbose output
dotnet test --filter "Name=TestAboutLinkNavigation" --verbosity detailed
```

#### ❌ **Port 3000 already in use**

**Error**: `Connection refused`

**Solution**:
```bash
# Kill existing process
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000    # Windows (find PID)
taskkill /PID <PID> /F          # Windows (kill)

# Or change port in appsettings.json
"BaseUrl": "http://localhost:3001"
```

#### ❌ **ChromeDriver not found**

**Error**: `Unable to locate chromedriver`

**Solution**:
```bash
# WebDriverManager should auto-download, but if not:
dotnet restore  # Re-download dependencies
dotnet build    # Rebuild
```

#### ❌ **Element not found**

**Error**: `data-testid='...' not found`

**Solution**:
1. Verify data-testid exists in component
2. Check if element is displayed with CSS
3. Increase wait time in appsettings.json
4. Run in headed mode to see what's happening:
   ```json
   "Headless": false
   ```

#### ❌ **Test fails on responsive test**

**Error**: `QA item visible when it should be hidden on mobile`

**Solution**:
1. Check NavBar.scss for media query (should hide at 426px)
2. Verify window size is set correctly
3. Run single test: `dotnet test --filter "Name=TestMobileNavBarHidesQAAndSkills"`

### Enable Debug Mode

```bash
# Very verbose output
dotnet test --verbosity diagnostic

# Shows:
# - Driver initialization
# - Every element interaction
# - Wait conditions
# - Network calls
```

### Run Single Test with Debugging

```bash
# Install debugger
dotnet tool install -g netcoredbg

# Run with debugger
dotnet test -v n --filter "Name=TestAboutLinkNavigation"
```

### Screenshots on Failure

Tests run in headless mode by default. To capture screenshots:

1. Edit `appsettings.json`:
   ```json
   "Headless": false
   ```
2. Tests will display browser window
3. You can screenshot or video record manually

---

## 📖 Understanding the Code

### Page Object Model

Each page has a dedicated class:

```csharp
// Example: NavBarPage.cs
public class NavBarPage : BasePage
{
    // Locators
    private By NavItemAbout => By.CssSelector("[data-testid='nav-item-about']");
    
    // Actions
    public void ClickAboutLink() {
        Click(NavLinkAbout);
    }
    
    // Assertions
    public bool IsNavBarDisplayed() {
        return IsElementDisplayed(NavbarContainer);
    }
}
```

### Using data-testid Locators

All tests use `data-testid` attributes (not fragile XPath):

```csharp
// ✓ Good - Stable
By.CssSelector("[data-testid='nav-item-about']")

// ✗ Bad - Fragile
By.XPath("//ul/li[2]/a")
```

### Example Test

```csharp
[Test]
public void TestAboutLinkNavigation()
{
    // Arrange
    _navBarPage.NavigateTo("/");
    
    // Act
    _navBarPage.ClickAboutLink();
    Thread.Sleep(1000);
    
    // Assert
    Assert.IsTrue(
        _driver.Url.Contains("#about"), 
        "Should navigate to About section"
    );
}
```

---

## 🔄 CI/CD Integration

### GitHub Actions Example

```yaml
name: Selenium Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Setup .NET
        uses: actions/setup-dotnet@v3
        with:
          dotnet-version: '8.0'
          
      - name: Start portfolio
        run: |
          npm install
          npm run dev &
          sleep 5
          
      - name: Run tests
        working-directory: ./Tests
        run: |
          dotnet restore
          dotnet test --verbosity detailed
```

---

## 📊 Test Results Output

### Successful Run

```
Test Run Successful.
Total tests: 37
  Passed: 37
  Failed: 0
  Skipped: 0

Test execution time: 2 min 45 sec
```

### Failed Test Example

```
[FAIL] TestAboutLinkNavigation
  Expected: URL contains "#about"
  Actual: http://localhost:3000/
  Stack Trace: at NavigationTests.cs line 85
```

---

## 🎯 Quick Reference

| Task | Command |
|------|---------|
| Run all tests | `dotnet test` |
| Run navigation tests | `dotnet test --filter "ClassName=*NavigationTests"` |
| Run responsive tests | `dotnet test --filter "ClassName=*ResponsiveTests"` |
| Verbose output | `dotnet test --verbosity detailed` |
| See browser | Edit `appsettings.json`: `"Headless": false` |
| Generate report | `dotnet test --logger "trx"` |
| Build only | `dotnet build` |
| Clean build | `dotnet clean && dotnet build` |

---

## 📞 Support

### Common Questions

**Q: Do I need Chrome installed?**  
A: Yes, tests automate Chrome. WebDriverManager auto-downloads ChromeDriver.

**Q: Can I run tests in Firefox?**  
A: Currently configured for Chrome only. Would need to modify DriverManager.cs.

**Q: How long do tests take?**  
A: ~2-3 minutes for all 37 tests.

**Q: Can I run tests in CI/CD?**  
A: Yes! Set `"Headless": true` in appsettings.json.

**Q: What if portfolio is on a different URL?**  
A: Update `"BaseUrl"` in appsettings.json.

---

## ✅ Next Steps

1. **Install .NET 8 SDK**
2. **Navigate to Tests folder**: `cd Tests`
3. **Restore packages**: `dotnet restore`
4. **Start portfolio**: `npm run dev` (in another terminal)
5. **Run tests**: `dotnet test`
6. **View results** ✓

---

## 📝 Notes

- Tests use **Page Object Model** for maintainability
- All locators use **data-testid** attributes
- Tests are **device-responsive** (mobile, tablet, desktop)
- Test suite is **independent** - run in any order
- Tests use **explicit waits** for reliability
- Configuration is **environment-based** (appsettings.json)

---

**🎉 Happy Testing! Questions? Check Tests/README.md for technical details.**
