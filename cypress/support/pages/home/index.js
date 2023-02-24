import { el } from "./elements";

class HomePage {
  go() {
    cy.visit("/");
  }
  submit() {
    cy.get(el.submit).click({ force: true });
  }
  submitMenu() {
    cy.get(el.submitMenu).click();
  }
  haveTextLogin(message) {
    cy.get(el.textLogin).should("be.visible").should("have.text", message);
  }
  haveTextHome(title) {
    cy.get(el.textHome).should("be.visible").should("have.text", title);
  }

  menu() {
    cy.get(el.menuList).should("be.visible");
  }
  menuHome() {
    cy.contains("Home").should("be.visible").click();
  }
  menuLogin() {
    cy.contains("Login").should("be.visible").click();
  }
}

export default new HomePage();
