describe('Login', function () {
  this.beforeEach(function () {
    cy.visit("/login")
    cy.get('input.email').type('max@kidd.com')
    cy.get('input.password').type('max{enter}')
  })
  it.skip('creates a new course', function () {
    cy.get('mat-icon.create-course').click()
    cy.get('button.create-course').click()
    cy.get('input.name').type('Test Course {enter}')
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
    cy.get('div.card-contents').contains('Test Course').click({ multiple: true })
  })

  it('adds a section to a course', function () {
    cy.get('div.card-contents').contains('Test Course').click({ multiple: true })
    cy.get('button.edit').click()
    cy.get('button.addSection').click()
    cy.get('input.sectionName').type('Test Section {enter}')
    cy.get('div.sectionName').contains('Test Section')
  })

  it.skip('adds a module to a section', function () {
    cy.get('div.card-contents').contains('Course name2').click({ multiple: true })
    cy.get('button.edit').click()
    cy.get('mat-icon.vert').contains('section 1').click()
    cy.get('mat-icon.add').click()
    cy.get('input.moduleName').type('module 2 {enter}')
  })
})