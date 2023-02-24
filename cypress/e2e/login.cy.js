import loginPage from "../support/pages/login";
describe("Login", () => {
  it("deve fazer login com sucesso", () => {
    const user = {
      name: "John Doe",
      password: "ThisIsNotAPassword",
    };

    const title = "Make appointment";
    loginPage.go();
    loginPage.form(user);
    loginPage.submit();
    loginPage.toHaveTitle(title);
  });

  it("nao deve logar com senha invalida", function () {
    const user = {
      name: "Teste",
      password: "ThisIsNotAPassword",
    };

    const errorMessage =
      "Login failed! Please ensure the username and password are valid.";
    loginPage.go();
    loginPage.form(user);
    loginPage.submit();
    loginPage.toHaveMessage(errorMessage);
  });
  it("nao deve logar com user name inexistente", () => {
    const user = {
      name: "@notfound",
      password: "ThisIsNotAPassword",
    };

    const errorMessage =
      "Login failed! Please ensure the username and password are valid.";
    loginPage.go();
    loginPage.form(user);
    loginPage.submit();
    loginPage.toHaveMessage(errorMessage);
  });

  it("user name deve ser obrigatório", () => {
    const user = {
      password: "ThisIsNotAPassword",
    };

    const errorMessage =
      "Login failed! Please ensure the username and password are valid.";
    loginPage.go();
    loginPage.form(user);
    loginPage.submit();
    loginPage.toHaveMessage(errorMessage);
  });

  it("senha deve ser obrigatório", () => {
    const user = {
      name: "Teste",
    };

    const errorMessage =
      "Login failed! Please ensure the username and password are valid.";
    loginPage.go();
    loginPage.form(user);
    loginPage.submit();
    loginPage.toHaveMessage(errorMessage);
  });
  it("todos os campos devem ser obrigatórios", () => {
    const errorMessage =
      "Login failed! Please ensure the username and password are valid.";
    loginPage.go();
    loginPage.submit();
    loginPage.toHaveMessage(errorMessage);
  });
});
