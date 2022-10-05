import { Snackbar } from '../src';

describe('Snackbar', () => {
  it('renders', () => {
    cy.mount(<Snackbar onDismiss={() => undefined} kind="info" description="Hi there" />);
    cy.get('[data-test-id="snackbar"]').should('be.visible');
  });

  it('is accessible', () => {
    cy.mount(<Snackbar onDismiss={() => undefined} kind="info" description="Hi there" />);
    cy.checkA11y();
  });
});