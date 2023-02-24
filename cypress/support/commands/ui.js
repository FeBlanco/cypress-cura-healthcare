import loginPage from "../pages/login";

Cypress.Commands.add("uilogin", (user) => {
  loginPage.go();
  loginPage.form(user);
  loginPage.submit();
});
