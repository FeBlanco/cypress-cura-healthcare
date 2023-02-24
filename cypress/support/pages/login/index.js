import { el } from "./elements";

class LoginPage {
  go() {
    cy.visit("/profile.php#login");
  }

  form(user) {
    if (user.name) cy.get(el.userName).clear().type(user.name);
    if (user.password) cy.get(el.password).clear().type(user.password);
  }

  submit() {
    cy.get(el.loginButton).click();
  }

  toHaveTitle(title) {
    cy.get(el.title).should("be.visible", title);
  }

  toHaveMessage() {
    cy.get(".text-danger").should("be.visible");
  }
}

export default new LoginPage();
