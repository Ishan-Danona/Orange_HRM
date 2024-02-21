import { type Page, type Locator } from "@playwright/test";

export class DashboardLocator {
  readonly page: Page;
  readonly assertText: Locator;
  readonly dashboard: Locator;
  readonly stopWatch: Locator;
  readonly assignLeave: Locator;
  readonly leaveList: Locator;
  readonly timesheet: Locator;
  readonly applyLeave: Locator;
  readonly myLeave: Locator;
  readonly myTimesheet: Locator;

  constructor(page) {
    this.page = page;
    this.assertText = page.locator(
      "h6[class$=oxd-topbar-header-breadcrumb-module]"
    );
    this.dashboard = page.locator("span:text('Dashboard')");
    this.stopWatch = page.locator("i[class$=bi-stopwatch]");
    this.assignLeave = page.locator("button[title='Assign Leave']");
    this.leaveList = page.locator("button[title='Leave List']");
    this.timesheet = page.locator("button[title=Timesheets]");
    this.applyLeave = page.locator("button[title='Apply Leave']");
    this.myLeave = page.locator("button[title='My Leave']");
    this.myTimesheet = page.locator("button[title='My Timesheet']");
  }
}
