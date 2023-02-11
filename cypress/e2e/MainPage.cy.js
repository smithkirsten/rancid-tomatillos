describe('Main Page', () => {
  it('Should show a loading page before the main page loads', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'emptyMainPage.json' })
    cy.visit('/')
    cy.get('.loading-card').should('have.length', 44)
  })

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'MainPage.json' })
    cy.visit('/')
  })

  it('Should see the title of the application', () => {
    cy.get('.App').contains('Rancid Tomatillos')
  })

  it('Should see the logo', () => {
    cy.get('.logo').should('be.visible')
  })
  
  it('Should have a search bar for movies', () => {
    cy.get('#searchBar').should('be.visible')
  })

  it('Should see a collection of movies', () => {
    cy.get('.slide').should('have.length', 11)
  })

  it('Should contain slides of movie posters', () => {
    cy.get('#436270').should('be.visible')
    cy.get('#934641').should('be.visible')
    cy.get('#663712').should('be.visible')
  })

  it('Should have two Swiper slides', () => {
    cy.get('.poster-swiper').should('have.length', 2)
  })
  
  it('Should have section titles', () => {
    cy.get('.movies-display').contains('Worst Rated Movie')
    cy.get('.movies-display').contains('All Movies')
  })

  it('Should be able to see the movies display of the click of a poster', () => {
    cy.get('#724495').click() 
    cy.url().should('eq', 'http://localhost:3000/movie/724495')
  })
})