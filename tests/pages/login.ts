import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly assertText: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(page) {
    this.page = page;
    this.assertText = page.locator("h5[class$=orangehrm-login-title]");
    this.username = page.locator("input[name=username]");
    this.password = page.locator("input[name=password]");
    this.loginBtn = page.locator("button[class$=orangehrm-login-button]");
  }

  async loginActions(username, password) {
    await this.page.waitForURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    expect(this.assertText).toHaveText("Login");
    await this.username.fill(username);
    expect(this.username).toHaveClass("oxd-input oxd-input--focus");
    await this.password.fill(password);
    expect(this.password).toHaveClass("oxd-input oxd-input--focus");
    await this.loginBtn.click();
  }
}
