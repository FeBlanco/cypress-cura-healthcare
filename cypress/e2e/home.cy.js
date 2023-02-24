import homePage from "../support/pages/home";
describe("Home", () => {
  beforeEach(() => {
    homePage.go();
  });
  it("deve clicar no botão Make Appointment", () => {
    const message = "Login";
    homePage.submit();
    homePage.haveTextLogin(message);
  });

  it("deve clicar no botão menu lateral", () => {
    homePage.submitMenu();
    homePage.menu();
  });

  it("deve clicar no botão menu lateral e selecionar Home", () => {
    const title = "CURA Healthcare Service";
    homePage.submitMenu();
    homePage.menuHome();
    homePage.haveTextHome(title);
  });
  it("deve clicar no botão menu lateral e selecionar Login", () => {
    const message = "Login";
    homePage.submitMenu();
    homePage.menuLogin();
    homePage.haveTextLogin(message);
  });
});
