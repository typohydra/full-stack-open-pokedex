describe("Pokedex", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:5000");
    cy.contains("ivysaur");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });

  it("Pokemon page can be navigated to", function () {
    cy.visit("http://localhost:5000");
    cy.get("a").eq(4).click()
    cy.contains("charmeleon");
    cy.contains("speed");
    cy.contains(
      "Pokémon and Pokémon character names are trademarks of Nintendo."
    );
  });
});
