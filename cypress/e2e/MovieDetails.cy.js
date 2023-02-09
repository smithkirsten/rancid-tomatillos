describe('Movie Details Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495', {movie:{
      "id": 724495,
      "title": "The Woman King",
      "poster_path": "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
      "release_date": "2022-09-15",
      "overview": "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
      "genres": [
        "Action",
        "Drama",
        "History"
      ],
      "budget": 50000000,
      "revenue": 91000000,
      "runtime": 135,
      "tagline": "Her reign begins.",
      "average_rating": 4
  }})
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

  it('Should hide the main page', () => {
    cy.get('.movies-display').should('not.exist')
  })

  it('Should have a back button', () => {
    cy.get('.back-to-main-button').should('be.visible')
  })

  it('Should have a revenue and budget', () => {
    cy.get('.money-matters').contains('Revenue: $50,000,000')
    cy.get('.money-matters').contains('Budget: $91,000,000')
  })

  it('Should take the user back to the main page with the click of the back button', () => {
    cy.get('.back-to-main-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
  
  it('Should contain a Swiper of videos', () => {
    cy.get('.video-slide').should('have.length', 18)
  })
  /////////
  // Error page
  // Loading page
})