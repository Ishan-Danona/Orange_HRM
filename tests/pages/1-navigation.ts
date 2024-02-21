import { type Page } from "@playwright/test";
import { NavigationObject } from "../pageobjects/1-navigationobject";

export class NavigationPage {
  readonly page: Page;
  readonly obj;
  constructor(page) {
    this.page = page;
    this.obj = new NavigationObject(page);
  }

  async navigationActions(searchData, navigationLink) {
    await this.obj.search.fill(searchData);
    for (let i = 0; i < (await this.obj.links.count()); i++) {
      if ((await this.obj.links.nth(i).textContent()) == navigationLink) {
        await this.obj.links.nth(i).click();
      }
    }
  }
}
