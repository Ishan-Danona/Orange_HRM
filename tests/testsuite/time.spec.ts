import { test } from "@playwright/test";
import orange from "../data/orange.json";
import { LoginPage } from "../pages/login";
import { TimePage } from "../pages/time";
import { NavigationPage } from "../pages/1-navigation";

test.describe("Orange HRM", () => {
  let page;
  let context;
  let Login, Time, Navigation;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    Login = new LoginPage(page);
    Time = new TimePage(page);
    Navigation = new NavigationPage(page);
    await page.goto(orange.url);
  });

  test("Valid Test Case", async () => {
    await Login.loginActions(orange.usernname, orange.password);
    await Navigation.navigationActions("", "Time");
    await Time.timeActions();
    await Time.myTimesheets();
    await Time.employeeTimesheets();
    await Time.myRecords();
    await Time.punchInOut();
  });
});
