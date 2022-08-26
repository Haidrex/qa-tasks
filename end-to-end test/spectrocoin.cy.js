describe("Spectrocin spec", () => {
  it("Should visit spectrocoin bitcoin rates", () => {
    cy.visit("https://spectrocoin.com/en/bitcoin-price-rates.html");

    cy.get('div[id="currency-select"]', { timeout: 10000 }).click();

    cy.contains("div", "USD").click();

    cy.contains("td", "Bitcoin BTC")
      .parent()
      .within(($tr) => {
        cy.get("td").eq(2).contains("+");
      });
  });
});
