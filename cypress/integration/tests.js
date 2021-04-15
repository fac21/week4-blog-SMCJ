it("can run a test", () => {
    assert.equal(1, 1);
  });

  it("creates a homepage", () => {
    cy.visit('http://localhost:3000');
    cy.get('h1');
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