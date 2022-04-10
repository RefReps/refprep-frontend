describe('Login', function () {
  this.beforeEach(function () {
    cy.visit("/login")
    cy.get('input.email').type('max@kidd.com')
    cy.get('input.password').type('max{enter}')
  })
  it('creates a new course', function () {
    cy.get('mat-icon.create-course').click()
    cy.get('button.create-course').click()
    cy.get('input.name').type('Course name2 {enter}')
  })
  // it('creates a new course from a template', function () {
  //   cy.visit("/login")
  //   cy.get('input.email').type('max@kidd.com')
  //   cy.get('input.password').type('max{enter}')
  //   cy.get('mat-icon.create-course').click()
  //   cy.get('button.create-template').click()
  //   cy.get('mat-select.course-options').click()
  // })
  it('views a course', function () {
    cy.get('div.card-contents').contains('Course name2').click({ multiple: true })
  })

  it('adds a section to a course', function () {
    cy.get('div.card-contents').contains('Course name2').click({ multiple: true })
    cy.get('button.edit').click()
    cy.get('button.addSection').click()
    cy.get('input.sectionName').type('section 1')
    cy.get('button.submit').click()
    cy.get('div.sectionName').contains('section 1')
  })

  it('adds a module to a section', function () {
    cy.get('div.card-contents').contains('Course name2').click({ multiple: true })
    cy.get('button.edit').click()
    cy.get('mat-icon.vert').contains('section 1').click()
    cy.get('mat-icon.add').click()
    cy.get('input.moduleName').type('module 2')
    cy.get('button.submit').click()
  })
})