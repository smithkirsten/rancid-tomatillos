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

  it('Should see a collection of movies', () => {
    cy.get('.slide').should('have.length', 11)
  })

  it('Should have two Swiper slides', () => {
    cy.get('.poster-swiper').should('have.length', 2)
  })
  
  it('Should have section titles', () => {
    cy.get('.movies-display').contains('Worst Rated Movie')
    cy.get('.movies-display').contains('All Movies')
  })

  
})