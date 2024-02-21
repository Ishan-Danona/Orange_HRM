import { type Locator } from "@playwright/test";

export class NavigationObject {
  readonly links: Locator;
  readonly search: Locator;

  constructor(page) {
    this.links = page.locator("span[class$='oxd-main-menu-item--name']");
    this.search = page.locator("input[placeholder='Search']");
  }
}
