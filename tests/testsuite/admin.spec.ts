import { test } from "@playwright/test";
import orange from "../data/orange.json";
import { LoginPage } from "../pages/login";
import { AdminPage } from "../pages/2-admin";
import { NavigationPage } from "../pages/1-navigation";

test.describe("Orange HRM", () => {
  let page;
  let context;
  let Login, Admin, Navigation;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    Login = new LoginPage(page);
    Admin = new AdminPage(page);
    Navigation = new NavigationPage(page);
    await page.goto(orange.url);
  });

  test("Valid Test Case", async () => {
    await Login.loginActions(orange.usernname, orange.password);
    await Navigation.navigationActions("", "Admin");
    await Admin.adminActions(
      orange.usernname,
      "Admin",
      "Enabled",
      "Orange  Test"
    );
  });
});
