import appointmentPage from "../support/pages/appointment";
import homePage from "../support/pages/home";

var Chance = require("chance");
var chance = new Chance();
describe("Make appointment", () => {
  beforeEach(() => {
    const user = {
      name: "John Doe",
      password: "ThisIsNotAPassword",
    };

    cy.uilogin(user);
  });
  it("marca consulta preenchendo todos os campos com sucesso", () => {
    const data = {
      value: "Hongkong CURA Healthcare Center",
      date: chance.date({
        string: true,
        american: false,
        year: 2023,
      }),
      comment: chance.paragraph({ sentences: 1 }),
      title: "Appointment Confirmation",
    };

    appointmentPage.go();
    appointmentPage.select(data.value);
    appointmentPage.checkBox();
    appointmentPage.radio();
    appointmentPage.visitDate(data.date);
    appointmentPage.textArea(data.comment);
    appointmentPage.submit();
    appointmentPage.toHaveText(data.title);
  });
  it("deve marca consulta preenchendo só a data", () => {
    const data = {
      value: "Tokyo CURA Healthcare Center",
      date: chance.date({
        string: true,
        american: false,
        year: 2023,
      }),
      title: "Appointment Confirmation",
    };

    appointmentPage.go();
    appointmentPage.select(data.value);
    appointmentPage.visitDate(data.date);
    appointmentPage.submit();
    appointmentPage.toHaveText(data.title);
  });
  it("não deve marca consulta sem informar a data", () => {
    const data = {
      value: "Hongkong CURA Healthcare Center",
      comment: chance.paragraph({ sentences: 1 }),
    };

    appointmentPage.go();
    appointmentPage.select(data.value);
    appointmentPage.checkBox();
    appointmentPage.radio();
    appointmentPage.textArea(data.comment);
    appointmentPage.submit();
    appointmentPage.shouldBeUrl();
  });
  it("deve marca consulta preenchendo todos os campos com sucesso e voltar para home", () => {
    const data = {
      value: "Hongkong CURA Healthcare Center",
      date: chance.date({
        string: true,
        american: false,
        year: 2023,
      }),
      comment: chance.paragraph({ sentences: 1 }),
      title: "Appointment Confirmation",
    };

    appointmentPage.go();
    appointmentPage.select(data.value);
    appointmentPage.checkBox();
    appointmentPage.radio();
    appointmentPage.visitDate(data.date);
    appointmentPage.textArea(data.comment);
    appointmentPage.submit();
    appointmentPage.toHaveText(data.title);
    appointmentPage.submitHome();
    homePage.haveTextHome("CURA Healthcare Service");
  });
});
