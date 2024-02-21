import { expect, type Page } from "@playwright/test";
import { LeaveObject } from "../../pageobjects/4-leaveobject";
export class MyLeave {
  readonly obj;
  constructor(page) {
    this.obj = new LeaveObject(page);
  }
  async myLeave(
    fromMonth,
    fromYear,
    fromDate,
    toMonth,
    toYear,
    toDate,
    status,
    type
  ) {
    expect(this.obj.assertText).toHaveText("Leave");
    await this.obj.myLeave.click();
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
    await this.obj.select2.click();
    for (let i = 0; i < (await this.obj.option.count()); i++) {
      if ((await this.obj.option.nth(i).textContent()) == status) {
        await this.obj.option.nth(i).click();
        break;
      }
    }
    await this.obj.select1.click();
    for (let i = 0; i < (await this.obj.option.count()); i++) {
      if ((await this.obj.option.nth(i).textContent()) == type) {
        await this.obj.option.nth(i).click();
        break;
      }
    }
    await this.obj.searchBtn.click();
    await this.obj.resetBtn.click();
  }
}
