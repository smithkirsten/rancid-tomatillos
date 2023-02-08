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

  it('Should see the logo', () => {
    cy.get('.logo').should('be.visible')
  })
  
  it('Should have a search bar for movies', () => {
    cy.get('#searchBar').should('be.visible')
  })
  
  // it('Should be able to search for movies', () => {
      // cy.get('#searchBar').type('The woman King').click().url('/movie/724495')
  // })

 
  
})