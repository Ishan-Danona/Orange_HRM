import { expect } from "@playwright/test";
import { LeaveObject } from "../../pageobjects/4-leaveobject";

export class Configure {
  readonly obj;
  constructor(page) {
    this.obj = new LeaveObject(page);
  }

  async leavePeriod(month, date) {
    await this.obj.configure.click();
    await this.obj.leavePeriod.click();
    await this.obj.startMonth.click();
    for (let i = 0; i < (await this.obj.option.count()); i++) {
      if ((await this.obj.option.nth(i).textContent()) == month) {
        await this.obj.option.nth(i).click();
      }
    }
    await this.obj.startDate.click();
    for (let i = 0; i < (await this.obj.option.count()); i++) {
      if ((await this.obj.option.nth(i).textContent()) == date) {
        await this.obj.option.nth(i).click();
      }
    }
    await this.obj.saveBtn.click();
    await this.obj.resetBtn.click();
  }

  async leaveTypes(situation) {
    await this.obj.configure.click();
    await this.obj.leaveTypes.click();
    await this.obj.addBtn.click();
    await this.obj.name.fill("Ishan");
    for (let i = 0; i < (await this.obj.entitlementSituation.count()); i++) {
      console.log(await this.obj.entitlementSituation.nth(i).textContent());
      if (
        (await this.obj.entitlementSituation.nth(i).textContent()) == situation
      ) {
        await this.obj.entitlementSituation.nth(i).click();
      }
    }
    await this.obj.saveBtn.click();
  }
}
