import Globals from "../../src/components/Globals";

describe("Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado", function() {
  it("Busca a partir da home usuário existente", function() {
    cy.visit(Globals.api.localhostClient);
    cy.get(".search-page__input")
      .type(Globals.testUsers.usuario_existente)
      .should("have.value", Globals.testUsers.usuario_existente);
    cy.get(".search-page__button").click();
    cy.url().should("include", "/user/" + Globals.testUsers.usuario_existente);
  });
  it("Nome do usuário", function() {
    cy.get("#user-name").should("be.visible");
  });
  it("Login", function() {
    cy.get("#user-login").should("be.visible");
  });
  it("E-mail", function() {
    cy.get("#user-email").should("be.visible");
  });
  it("E-mail", function() {
    cy.get("#user-bio").should("be.visible");
  });
  it("Empresa", function() {
    cy.get("#user-company").should("be.visible");
  });
  it("Localização", function() {
    cy.get("#user-location").should("be.visible");
  });
  it("Stars", function() {
    cy.get("#user-stars").should("be.visible");
  });
  it("Seguidores", function() {
    cy.get("#user-followers").should("be.visible");
  });
  it("Seguindo", function() {
    cy.get("#user-following").should("be.visible");
  });
  it("Avatar", function() {
    cy.get("#user-avatar").should("be.visible");
  });
});
