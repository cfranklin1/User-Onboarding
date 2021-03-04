
describe('Name Input Test', function() {
    it('Types in a name', function() {
        cy.visit("index.html")
        cy.get('[name=username]').type("Camille")

    })
})

describe('Name Assertion', function() {
    it('Asserts that text inputted contains name provided', function() {
        cy.visit("index.html")
    
        cy.get('[name=username]').should("have.text", "Camille")

    })
})


describe('Email Input Test', function() {
    it('Types in a email address', function() {
        cy.visit("index.html");
        cy.get('[name=email]').type('Camille@email.com')
        
    })
})

describe('Pasword Input Test', function() {
    it('Types in a password', function() {
        cy.visit("index.html");
        cy.get('[name=pasword]').type('password')

    })
})

describe('Checkbox Test', function() {
    it('Checks terms/service', function() {
        cy.visit("index.html");
        cy.get('[name=termsofservice]').click()

    })
})

describe('Submit Test', function() {
    it('Clicks the submit button', function() {
        cy.visit("index.html");
        cy.contains('Submit').click()

    })
})
