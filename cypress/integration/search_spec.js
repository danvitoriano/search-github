import Globals from "../../src/components/Globals";

describe("Eu, como usuário, desejo buscar por um usuário do GitHub", function() {
  it("Busca a partir da home usuário existente", function() {
    cy.visit(Globals.api.localhostClient);
    cy.get(".search-page__input")
      .type(Globals.testUsers.usuario_existente)
      .should("have.value", Globals.testUsers.usuario_existente);
    cy.get(".search-page__button").click();
    cy.url().should("include", "/user/" + Globals.testUsers.usuario_existente);
  });
  it("Busca outro usuário existente a partir de um resultado com sucesso", function() {
    cy.get(".search-page__input")
      .type(Globals.testUsers.outro_usuario_existente1)
      .should("have.value", Globals.testUsers.outro_usuario_existente1);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente1
    );
  });
  it("Busca usuário inexistente a partir de um resultado com sucesso", function() {
    cy.get(".search-page__input")
      .clear()
      .type(Globals.testUsers.usuario_inexistente)
      .should("have.value", Globals.testUsers.usuario_inexistente);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.usuario_inexistente_url
    );
    cy.contains("User not found :(").should("have.id", "not-found");
  });
  it("Busca outro usuário existente a partir de um resultado sem sucesso", function() {
    cy.get(".search-page__input").clear();
    cy.get(".search-page__input")
      .type(Globals.testUsers.outro_usuario_existente1)
      .should("have.value", Globals.testUsers.outro_usuario_existente1);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente1
    );
  });
  it("Busca outro usuário existente a partir de um resultado com sucesso", function() {
    cy.get(".search-page__button");
    cy.get(".search-page__input")
      .clear()
      .type(Globals.testUsers.outro_usuario_existente2)
      .should("have.value", Globals.testUsers.outro_usuario_existente2);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente2
    );
  });
  it("Busca o mesmo usuário existente a partir de um resultado com sucesso", function() {
    cy.get(".search-page__input").clear();
    cy.get(".search-page__input")
      .type(Globals.testUsers.outro_usuario_existente2)
      .should("have.value", Globals.testUsers.outro_usuario_existente2);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente2
    );
  });
  it("Busca outro usuário inexistente a partir de um resultado com sucesso", function() {
    cy.get(".search-page__input")
      .clear()
      .type(Globals.testUsers.outro_usuario_inexistente)
      .should("have.value", Globals.testUsers.outro_usuario_inexistente);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.usuario_inexistente_url_dupla
    );
    cy.contains("User not found :(").should("have.id", "not-found");
  });
  it("Busca outro usuário existente a partir de um resultado sem sucesso", function() {
    cy.get(".search-page__input").clear();
    cy.get(".search-page__input")
      .type(Globals.testUsers.outro_usuario_existente3)
      .should("have.value", Globals.testUsers.outro_usuario_existente3);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente3
    );
  });
  it("Recarregar a página", function() {
    cy.reload();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente3
    );
  });
  it("Busca o mesmo usuário existente a partir de um resultado com sucesso", function() {
    cy.get(".search-page__input")
      .type(Globals.testUsers.outro_usuario_existente3)
      .should("have.value", Globals.testUsers.outro_usuario_existente3);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente3
    );
  });
  it("Recarregar a página", function() {
    cy.reload();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente3
    );
  });
  it("Busca outro usuário inexistente a partir de um resultado com sucesso", function() {
    cy.get(".search-page__input").clear();
    cy.get(".search-page__input")
      .type(Globals.testUsers.outro_usuario_inexistente)
      .should("have.value", Globals.testUsers.outro_usuario_inexistente);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.usuario_inexistente_url_dupla
    );
    cy.contains("User not found :(").should("have.id", "not-found");
  });
  it("Voltar para Home", function() {
    cy.get("[data-cy='backhome']").click();
    cy.contains("Github Search");
    cy.url().should("not.include", "/user/");
  });
  it("Busca usuário inexistente a partir da homepage", function() {
    cy.get(".search-page__input")
      .type(Globals.testUsers.usuario_inexistente)
      .should("have.value", Globals.testUsers.usuario_inexistente);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.usuario_inexistente_url
    );
    cy.contains("User not found :(").should("have.id", "not-found");
  });
  it("Busca outro usuário existente a partir de um resultado sem sucesso", function() {
    cy.get(".search-page__input")
      .type(Globals.testUsers.outro_usuario_existente2)
      .should("have.value", Globals.testUsers.outro_usuario_existente2);
    cy.get(".search-page__button").click();
    cy.url().should(
      "include",
      "/user/" + Globals.testUsers.outro_usuario_existente2
    );
  });
});
