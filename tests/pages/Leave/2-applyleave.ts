import { expect, type Page } from "@playwright/test";
import { LeaveObject } from "../../pageobjects/4-leaveobject";
export class ApplyLeave {
  readonly obj;
  constructor(page) {
    this.obj = new LeaveObject(page);
  }
  async applyLeave(fromMonth, fromYear, fromDate, toMonth, toYear, toDate) {
    expect(this.obj.assertText).toHaveText("Leave");
    await this.obj.apply.click();
    await this.obj.leaveType.click();
    await this.obj.selectType.click();
    await this.obj.fromCalendar.click();
    await this.obj.month.click();
    for (let i = 0; i < (await this.obj.selectMonth.count()); i++) {
      if ((await this.obj.selectMonth.nth(i).textContent()) == fromMonth) {
        await this.obj.selectMonth.nth(i).click();
        break;
      }
    }

    await this.obj.year.click();

    for (let i = 0; i < (await this.obj.selectYear.count()); i++) {
      if ((await this.obj.selectYear.nth(i).textContent()) == fromYear) {
        await this.obj.selectYear.nth(i).click();
        break;
      }
    }

    // await this.obj.date.click();
    for (let i = 0; i < (await this.obj.date.count()); i++) {
      if ((await this.obj.date.nth(i).textContent()) == fromDate) {
        await this.obj.date.nth(i).click();
        break;
      }
    }
    await this.obj.toCalendar.click();
    await this.obj.month.click();
    for (let i = 0; i < (await this.obj.selectMonth.count()); i++) {
      if ((await this.obj.selectMonth.nth(i).textContent()) == toMonth) {
        await this.obj.selectMonth.nth(i).click();
        break;
      }
    }
    await this.obj.year.click();
    for (let i = 0; i < (await this.obj.selectYear.count()); i++) {
      if ((await this.obj.selectYear.nth(i).textContent()) == toYear) {
        await this.obj.selectYear.nth(i).click();
        break;
      }
    }
    for (let i = 0; i < (await this.obj.date.count()); i++) {
      if ((await this.obj.date.nth(i).textContent()) == toDate) {
        await this.obj.date.nth(i).click();
        break;
      }
    }
    await this.obj.comment.fill("Sick Leave");
    await this.obj.applybutton.click();
  }
}
