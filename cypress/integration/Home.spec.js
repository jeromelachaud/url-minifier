context('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Check page elements', () => {
    it('should have a header', () => {
      cy.get('.Header')
        .find('h1')
        .should('have.text', 'URL Minifier')
    })

    it('should have a form', () => {
      cy.get('#minifier-form').within(() => {
        cy.get('label#url')
          .should('have.text', 'Enter the URL to minify')
          .should('have.attr', 'for', 'url')
        cy.get('input#url').should('have.attr', 'placeholder', 'URL')
        cy.get('button#button').should('have.text', 'Minify this☝️')
      })
    })
  })
  describe('Check form functionalities', () => {
    it('should post the URL to minify', () => {
      cy.get('#minifier-form').within(() => {
        cy.get('input#url')
          .type('https://url.pet/')
          .should('have.value', 'https://url.pet/')
      })
      cy.get('#minifier-form')
        .submit()
        .should('contain', 'The short url has been successfully created! 👌')
    })
  })
})
