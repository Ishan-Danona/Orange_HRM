import { expect } from "@playwright/test";
import { DashboardLocator } from "../pageobjects/dashboardobject";

export class DashboardPage {
  readonly obj;

  constructor(page) {
    this.obj = new DashboardLocator(page);
  }

  async dashboardActions() {
    expect(this.obj.assertText).toHaveText("Dashboard");
    await this.obj.stopWatch.click();
    expect(this.obj.assertText).toHaveText("Attendance");
    await this.obj.dashboard.click();
    await this.obj.assignLeave.click();
    expect(this.obj.assertText).toHaveText("Leave");
    await this.obj.dashboard.click();
    await this.obj.leaveList.click();
    expect(this.obj.assertText).toHaveText("Leave");
    await this.obj.dashboard.click();
    await this.obj.timesheet.click();
    expect(this.obj.assertText).toHaveText("Time");
    await this.obj.dashboard.click();
    await this.obj.applyLeave.click();
    expect(this.obj.assertText).toHaveText("Leave");
    await this.obj.dashboard.click();
    await this.obj.myLeave.click();
    expect(this.obj.assertText).toHaveText("Leave");
    await this.obj.dashboard.click();
    await this.obj.myTimesheet.click();
    expect(this.obj.assertText).toHaveText("Time");
    await this.obj.dashboard.click();
  }
}
