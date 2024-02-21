import { test } from "@playwright/test";
import orange from "../data/orange.json";
import { LoginPage } from "../pages/login";
import { DashboardPage } from "../pages/dashboard";
import { NavigationPage } from "../pages/1-navigation";

test.describe("Orange HRM", () => {
  let page;
  let context;
  let Login, Dashboard, Navigation;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    Login = new LoginPage(page);
    Dashboard = new DashboardPage(page);
    Navigation = new NavigationPage(page);
    await page.goto(orange.url);
  });

  test("Valid Test Case", async () => {
    await Login.loginActions(orange.usernname, orange.password);
    await Navigation.navigationActions("", "Dashboard");
    await Dashboard.dashboardActions();
  });
});
