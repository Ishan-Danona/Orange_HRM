import { expect, type Page, type Locator } from "@playwright/test";
import { ppid } from "process";

export class PimPage {
  readonly page: Page;
  readonly pim: Locator;
  readonly assertText: Locator;
  readonly employeeName: Locator;
  readonly employeeId: Locator;
  readonly select: Locator;
  readonly options: Locator;
  readonly includeSelect: Locator;
  readonly supervisorName: Locator;
  readonly jobTitleSelect: Locator;
  readonly subUnitSelect: Locator;
  readonly searchBtn: Locator;
  readonly resetBtn: Locator;

  constructor(page) {
    this.page = page;
    this.pim = page.locator("a[href='/web/index.php/pim/viewPimModule']");
    this.assertText = page.locator(
      "h6[class$=oxd-topbar-header-breadcrumb-module]"
    );
    this.employeeName = page
      .locator("input[placeholder='Type for hints...']")
      .first();
    this.employeeId = page.locator(
      "div[class^=oxd-input-group]>div:nth-child(2)>input"
    );
    this.select = page.locator("div:text('-- Select --')").nth(0);
    this.options = page.locator("div[role=listbox]>div:nth-child(3)");
    this.includeSelect = page.locator("div:text('Current Employees Only')");
    this.supervisorName = page
      .locator("input[placeholder='Type for hints...']")
      .last();
    // this.jobTitleSelect = page.locator("div:text('-- Select --')").nth(0);
    // this.subUnitSelect = page.locator("div:text('-- Select --')").nth(0);
    this.searchBtn = page.locator("button:text(' Search ')");
    this.resetBtn = page.locator("button:text(' Reset ')");
  }

  async pimActions() {
    await this.pim.click();
    expect(this.assertText).toHaveText("PIM");
    await this.employeeName.fill("Meenu");
    await this.employeeId.fill("1");
    await this.select.click();
    await this.options.click();
    await this.includeSelect.click();
    await this.options.click();
    await this.supervisorName.fill("Mona");
    await this.select.click();
    await this.options.click();
    await this.select.click();
    await this.options.click();
    await this.searchBtn.click();
    await this.resetBtn.click();
  }
}
