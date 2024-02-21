import { type Page, type Locator } from "@playwright/test";

export class LeaveObject {
  readonly page: Page;
  readonly leave: Locator;
  readonly assertText: Locator;
  readonly apply: Locator;
  readonly myLeave: Locator;
  readonly leaveList: Locator;
  readonly fromCalendar: Locator;
  readonly toCalendar: Locator;
  readonly month: Locator;
  readonly selectMonth: Locator;
  readonly year: Locator;
  readonly selectYear: Locator;
  readonly date: Locator;
  readonly select2: Locator;
  readonly option: Locator;
  readonly leaveType: Locator;
  readonly searchBtn: Locator;
  readonly resetBtn: Locator;
  readonly employeeName: Locator;
  readonly subunit: Locator;
  readonly subunitSelect: Locator;
  readonly pastEmployee: Locator;
  readonly reports: Locator;
  readonly leaveEntitlementsNUsageReport: Locator;
  readonly myLeaveEntitlementsNUsageReport: Locator;
  readonly generateFor: Locator;
  readonly reportLeaveType: Locator;
  readonly select1: Locator;
  readonly generateBtn: Locator;
  readonly configure: Locator;
  readonly leavePeriod: Locator;
  readonly startMonth: Locator;
  readonly startDate: Locator;
  readonly saveBtn: Locator;
  readonly leaveTypes: Locator;
  readonly addBtn: Locator;
  readonly name: Locator;
  readonly entitlementSituation: Locator;

  constructor(page) {
    this.page = page;
    this.leave = page.locator("a[href='/web/index.php/leave/viewLeaveModule']");
    this.assertText = page.locator(
      "h6[class$=oxd-topbar-header-breadcrumb-module]"
    );
    this.apply = page.locator("a:text('Apply')");
    this.myLeave = page.locator("a:text('My Leave')");
    this.leaveList = page.locator("a:text('Leave List')");
    this.fromCalendar = page.locator("input[placeholder='dd-mm-yyyy']").nth(0);
    this.toCalendar = page.locator("input[placeholder='dd-mm-yyyy']").nth(1);
    this.month = page.locator("li[class$='month']");
    this.selectMonth = page.locator("ul[class='oxd-calendar-dropdown']>li");
    this.year = page.locator("li[class$='year']");
    this.selectYear = page.locator("ul[class='oxd-calendar-dropdown']>li");
    this.date = page.locator("div[class='oxd-calendar-date']");
    this.select1 = page.getByText("-- Select --", { exact: true }).nth(0);
    this.select2 = page.getByText("Select", { exact: true });
    this.option = page.locator("div[class^='oxd-select-dropdown']>div>span");
    this.searchBtn = page.locator("button[type=submit]");
    this.resetBtn = page.locator("button:text(' Reset ')");
    this.employeeName = page.locator("input[placeholder='Type for hints...']");
    this.pastEmployee = page.locator("span[class^='oxd-switch-input']");
    this.reports = page.locator("span:text('Reports ')");
    this.leaveEntitlementsNUsageReport = page.getByText(
      "Leave Entitlements and Usage Report",
      { exact: true }
    );
    this.myLeaveEntitlementsNUsageReport = page.getByText(
      "My Leave Entitlements and Usage Report",
      { exact: true }
    );
    this.generateFor = page.locator("div[class='oxd-radio-wrapper']");
    this.reportLeaveType = page.locator("div:text('CAN - Bereavement')");
    this.generateBtn = page.locator("button[type=submit]");
    this.configure = page.locator("span:text('Configure ')");
    this.leavePeriod = page.locator("a:text('Leave Period')");
    this.startMonth = page
      .locator("div[class='oxd-select-wrapper']>div")
      .nth(0);
    this.startDate = page.locator("div[class='oxd-select-wrapper']>div").nth(1);
    this.saveBtn = page.locator("button[type=submit]");
    this.leaveTypes = page.locator("a:text('Leave Types')");
    this.addBtn = page.locator("button:text(' Add ')");
    this.name = page.locator(
      "div[class$='oxd-input-field-bottom-space']>div:nth-child(2)>input"
    );
    this.entitlementSituation = page.locator("div[class='oxd-radio-wrapper']");
  }
}
