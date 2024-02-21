import { expect, type Page, type Locator } from "@playwright/test";

export class TimePage {
  readonly page: Page;
  readonly time: Locator;
  readonly assertText: Locator;
  readonly timesheet: Locator;
  readonly myTimesheet: Locator;
  readonly calenderBtn: Locator;
  readonly date: Locator;
  readonly submitBtn: Locator;
  readonly employeeTimesheet: Locator;
  readonly employeeName: Locator;
  readonly viewBtn: Locator;
  readonly attendance: Locator;
  readonly myRecord: Locator;
  readonly punch: Locator;
  readonly clockBtn: Locator;
  readonly hours: Locator;
  readonly minutes: Locator;
  readonly timePeriod: Locator;
  readonly note: Locator;
  readonly outBtn: Locator;
  readonly employeeRecord: Locator;

  constructor(page) {
    this.page = page;
    this.time = page.locator("a[href='/web/index.php/time/viewTimeModule']");
    this.assertText = page.locator(
      "h6[class$=oxd-topbar-header-breadcrumb-module]"
    );
    this.timesheet = page.locator("span:text('Timesheets ')");
    this.myTimesheet = page.locator("a:text('My Timesheets')");
    this.calenderBtn = page.locator("i[class$='oxd-date-input-icon']");
    this.date = page.locator("div:text('8')");
    this.submitBtn = page.locator("button:text(' Submit ')");
    this.employeeTimesheet = page.locator("a:text('My Timesheets')");
    this.employeeName = page.locator("input[placeholder='Type for hints...']");
    this.viewBtn = page.locator("button[class$='orangehrm-left-space']");
    this.attendance = page.locator("span:text('Attendance ')");
    this.myRecord = page.locator("a:text('My Records')");
    this.punch = page.locator("a:text('Punch In/Out')");
    this.clockBtn = page.locator("i[class$='oxd-time-input--clock']");
    this.hours = page.locator("input[class$='oxd-time-hour-input-text']");
    this.minutes = page.locator("input[class$='oxd-time-minute-input-text']");
    this.timePeriod = page.locator("input[name='am']");
    this.note = page.locator("textarea[placeholder='Type here']");
    this.outBtn = page.locator("button:text(' Out ')");
    this.employeeRecord = page.locator("a:text('Employee Records')");
  }

  async timeActions() {
    await this.time.click();
  }
  async myTimesheets() {
    expect(this.assertText).toHaveText("Time");
    await this.timesheet.click();
    await this.myTimesheet.click();
    await this.calenderBtn.click();
    await this.date.click();
    await this.submitBtn.click();
  }
  async employeeTimesheets() {
    expect(this.assertText).toHaveText("Time");
    await this.timesheet.click();
    await this.employeeTimesheet.click();
    await this.employeeName.fill("Meenu");
    await this.viewBtn.click();
  }
  async myRecords() {
    expect(this.assertText).toHaveText("Time");
    await this.attendance.click();
    await this.myRecord.click();
    await this.calenderBtn.click();
    await this.date.click();
  }
  async punchInOut() {
    expect(this.assertText).toHaveText("Time");
    await this.attendance.click();
    await this.punch.click();
    await this.calenderBtn.click();
    await this.date.click();
    await this.clockBtn.click();
    await this.hours.click();
    await this.hours.press("Control+a");
    await this.hours.fill("5");
    await this.minutes.click();
    await this.minutes.press("Control+a");
    await this.minutes.fill("30");
    await this.timePeriod.click();
    await this.note.fill("Hello Ji");
    await this.outBtn.click();
  }
  async employeeRecords() {
    expect(this.assertText).toHaveText("Time");
    await this.attendance.click();
    await this.employeeRecord.click();
  }
}
