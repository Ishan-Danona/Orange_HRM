import { test } from "@playwright/test";
import orange from "../data/orange.json";
import { LoginPage } from "../pages/login";
import { DashboardPage } from "../pages/dashboard";
import { AdminPage } from "../pages/2-admin";
import { PimPage } from "../pages/3-pim";
import { LeavePage } from "../pages/Leave/1-leave";
import { TimePage } from "../pages/time";
import { NavigationPage } from "../pages/1-navigation";

test.describe("Orange HRM", () => {
  let page;
  let context;
  let Login, Dashboard, Admin, Pim, Leave, Time, Navigation;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    Login = new LoginPage(page);
    Dashboard = new DashboardPage(page);
    Admin = new AdminPage(page);
    Pim = new PimPage(page);
    Leave = new LeavePage(page);
    Time = new TimePage(page);
    Navigation = new NavigationPage(page);
    await page.goto(orange.url);
  });

  test("Valid Test Case", async () => {
    await Login.loginActions(orange.usernname, orange.password);
    await Navigation.navigationActions("", "Leave");
    // await Dashboard.dashboardActions();
    // await Admin.adminActions(
    //   orange.usernname,
    //   "Admin",
    //   "Enabled",
    //   "Orange  Test"
    // );
    // await Pim.pimActions();
    await Leave.leaveActions(
      orange.fromMonth,
      orange.fromYear,
      orange.fromDate,
      orange.toMonth,
      orange.toYear,
      orange.toDate,
      orange.status,
      orange.type,
      orange.employeeName,
      orange.subUnit,
      orange.generateFor,
      orange.location,
      orange.jobTitle,
      orange.situation
    );
  });
});
