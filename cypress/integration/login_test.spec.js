describe('Logging In', function () {
    const username = 'admin'
    const password = 'admin'
  
    describe('Login form submission', function () {
      beforeEach(function () {
        cy.visit('/auth/admin')
      })
  
      it('displays errors on login', function () {
        // incorrect username on purpose
        cy.get('input[name=username]').type('wrong')
        cy.get('input[name=password]').type('user{enter}')
  
        // we should have visible errors now
        cy.get('span[id=input-error]')
        .should('be.visible')
        .and('contain', 'Invalid username or password.')
  
        // and still be on the same URL
        cy.url().should('include', '/auth')
      })
  
      it('redirects to admin console on success', function () {
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(password)
        cy.get('form').submit()
  
        // we should be redirected to admin console
        cy.url().should('include', '/auth/admin/master/console')
        cy.get('li[class=dropdown]').should('contain', 'Admin')
  
        // and our cookie should be set to 'KEYCLOAK_SESSION_LEGACY'
        cy.getCookie('KEYCLOAK_SESSION_LEGACY').should('exist')
      })
    })
  })