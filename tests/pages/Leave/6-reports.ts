import { expect } from "@playwright/test";
import { LeaveObject } from "../../pageobjects/4-leaveobject";
export class Reports {
  readonly obj;
  constructor(page) {
    this.obj = new LeaveObject(page);
  }

  async leaveEntitlementsNUsageReport(
    generateFor,
    type,
    location,
    subUnit,
    jobTitle,
    employeeName
  ) {
    console.log(generateFor);
    await this.obj.reports.click();
    await this.obj.leaveEntitlementsNUsageReport.click();
    for (let i = 0; i < (await this.obj.generateFor.count()); i++) {
      if ((await this.obj.generateFor.nth(i).textContent()) == generateFor) {
        await this.obj.generateFor.nth(i).click();
      }
    }
    if (generateFor == "Leave Type") {
      await this.obj.reportLeaveType.click();
      for (let i = 0; i < (await this.obj.option.count()); i++) {
        if ((await this.obj.option.nth(i).textContent()) == type) {
          await this.obj.option.nth(i).click();
        }
      }
      await this.obj.select1.click();
      for (let i = 0; i < (await this.obj.option.count()); i++) {
        if ((await this.obj.option.nth(i).textContent()) == location) {
          await this.obj.option.nth(i).click();
        }
      }
      await this.obj.select1.click();
      for (let i = 0; i < (await this.obj.option.count()); i++) {
        if ((await this.obj.option.nth(i).textContent()) == subUnit) {
          await this.obj.option.nth(i).click();
        }
      }
      await this.obj.select1.click();
      for (let i = 0; i < (await this.obj.option.count()); i++) {
        if ((await this.obj.option.nth(i).textContent()) == jobTitle) {
          await this.obj.option.nth(i).click();
        }
      }
      await this.obj.pastEmployee.click();
      await this.obj.generateBtn.click();
    } else if (generateFor == "Employee") {
      await this.obj.employeeName.fill(employeeName);
      await this.obj.page
        .getByRole("option", { name: employeeName })
        .locator("span")
        .click();
      await this.obj.generateBtn.click();
    }
  }

  async myLeaveEntitlementsNUsageReport() {
    await this.obj.reports.click();
    await this.obj.myLeaveEntitlementsNUsageReport.click();
    await this.obj.generateBtn.click();
  }
}
