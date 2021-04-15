it("can run a test", () => {
    assert.equal(1, 1);
  });

it("creates a homepage", () => {
  cy.visit('http://localhost:3000/');
  cy.get('[src="twaddle2.png"]').should('be.visible')
});

it("can navigate pages", () => {
  cy.visit("http://localhost:3000/");
  cy.contains("Write post").click();
  cy.url().should("include", "/add-blog");
});

it("creates a new blog post", () => {
  addTestBlog();
})

it("deletes a blog post", () => {
  deleteBlog();
})

function addTestBlog() {
  cy.visit('http://localhost:3000/add-blog');
  cy.get('form').find('input[name="message"]').type("hi");
  cy.get('form').submit();
  cy.visit('http://localhost:3000');
  cy.get('ul').contains('hi');
}

function deleteBlog() {
  cy.visit('http://localhost:3000');
  cy.get('form').find("button[value='message2']").click()
  cy.get('ul').contains('hi').should('not.exist');
}

// it("can submit add blog form", () => {
//   cy.visit("http://localhost:3000/");
//   cy.contains("Write post").click();
//   cy.url().should("include", "/add-blog");
//   cy.get("#blog-entry").find("input[name='author']").type("Chun");
//   cy.get("#blog-entry").submit();
// })

f






