import Globals from "../../src/components/Globals";

describe("Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas", function() {
  it("Busca a partir da home usuário existente", function() {
    cy.visit(Globals.api.localhostClient);
    cy.get(".search-page__input")
      .type(Globals.testUsers.usuario_existente)
      .should("have.value", Globals.testUsers.usuario_existente);
    cy.get(".search-page__button").click();
    cy.url().should("include", "/user/" + Globals.testUsers.usuario_existente);
  });
  it("Repositórios do Usuário", function() {
    cy.get("#user-repos").should("be.visible");
  });
});
