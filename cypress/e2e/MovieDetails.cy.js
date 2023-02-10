describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495', { fixture: 'MovieDetails.json'})
    cy.visit('/movie/724495')
  })

  // it('Should see a loading page when waiting for movie details page to load', () => { 
  //   cy.contains('loading')
  // }) 

  it('Should display backdrop photo', () => {
    cy.get('.movie-header').should('have.css', 'background-image')
  })

  it('Should display movie title', () => {
    cy.get('.deets').contains('The Woman King')
  })

  it('Should display movie rating', () => {
    cy.get('.deets').contains('4/10')
  })

  it('Should display runtime', () => {
    cy.get('.deets').contains('2 hrs 15 mins')
  })

  it('Should display genres', () => {
    cy.get('.deets').contains('Action | Drama | History')
  })

  it('Should display poster', () => {
    cy.get('.poster').should('be.visible')
  })
  
  it('Should display tagline', () => {
    cy.get('.tagline').contains('Her reign begins.')
  })

  it('Should display release date', () => {
    cy.get('.movie-date').contains('Released Sep 15, 2022')
  })

  it('Should display overview message', () => {
    cy.get('.overview-area').contains('The story of the Agojie,')
  })

  it('Should ', () => {
    cy.get('MovieMain')
  })

  // Mainpage should NOT be visible 
  // Revenue & budget
  // Video Swiper
  // Button - be visibile
  // Button - should change url

  /////////
  // Error page
  // Loading page
})