describe("RealBeans Shopify Store", () => {
  beforeEach(() => {
    cy.visit("https://r0961282-realbeans.myshopify.com");

    // Handle password page
    cy.location("pathname").then((path) => {
      if (path.includes("/password")) {
        cy.get('input[type="password"]').type("sahpho");
        cy.get('button[type="submit"]').click();
      }
    });
  });

  context("Homepage", () => {
    it("displays the intro text and product section", () => {
      cy.contains("Since 1801, RealBeans has roasted premium coffee");
      cy.contains("Browse our latest products");
    });
  });

  context("Catalog Page", () => {
    it("lists both coffee products", () => {
      cy.contains("Catalog").click({ force: true });
      cy.contains("Blended coffee 5kg");
      cy.contains("Roasted Coffee Beans 5kg");
    });

    it("can sort products by price", () => {
      cy.contains("Catalog").click({ force: true });
      cy.get("select").first().select("Price, low to high");
    });
  });

  context("Product Pages", () => {
  it("displays roasted coffee product details", () => {
    cy.contains("Roasted Coffee Beans 5kg").click({ force: true });
    cy.contains("Our best and sustainable real roasted beans.");
    
    // Look for price using a pattern match instead of exact
    cy.get("body").should("contain.text", "€40");
  });

  it("displays blended coffee product details", () => {
    cy.contains("Blended coffee 5kg").click({ force: true });
    cy.contains("RealBeans coffee, ready to brew.");

    cy.get("body").should("contain.text", "€55");
  });
});



  context("About Page", () => {
    it("includes the history paragraph", () => {
      cy.contains("About").click({ force: true });
      cy.contains(
        "From a small Antwerp grocery to a European coffee staple"
      );
    });
  });
});
