it("can run a test", () => {
    assert.equal(1, 1);
  });

it("creates a homepage", () => {
  cy.visit('http://localhost:3000/');
  cy.get('[src="twaddle2.png"]').should('be.visible')
});




