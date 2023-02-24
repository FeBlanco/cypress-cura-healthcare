import { el } from "./elements";
class AoppointmentPage {
  go() {
    cy.visit("/#appointment");
  }
  select(value) {
    cy.get(el.select).select(value).should("have.value", value);
  }
  checkBox() {
    cy.get(el.check).check();
  }
  radio() {
    cy.get(el.radio).click().should("have.value", "Medicaid");
  }
  visitDate(date) {
    cy.get(el.visitDate).should("be.visible").clear().type(date);
  }
  textArea(comment) {
    cy.get(el.commentText)
      .should("be.visible")
      .click({ force: true })
      .type(comment);
  }
  submit() {
    cy.get(el.submitBtn).click();
  }
  submitHome() {
    cy.get(el.homeBtn).click();
  }
  toHaveText(title) {
    cy.get(el.titleConfirm).should("be.visible", title);
  }
  shouldBeUrl() {
    cy.url().should("contain", "appointment");
  }
}
export default new AoppointmentPage();
