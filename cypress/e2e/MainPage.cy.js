describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'MainPage' })
    cy.visit('/')
  })

  // it('Should see a loading page when waiting for main page to load', () => { 
  //   cy.contains('loading')
  // }) 

  it('Should see the title of the application', () => {
    cy.get('.App').contains('Rancid')
  })

})