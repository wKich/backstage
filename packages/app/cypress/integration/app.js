/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Button,
  including,
  Link,
  List,
  ListItem,
  Popover,
} from 'material-ui-interactors';

describe('App', () => {
  beforeEach(() => cy.enterAsGuest());

  // NOTE It doesn't use welcome page
  // eslint-disable-next-line jest/no-commented-out-tests
  // it('should render the welcome page', () => {
  //   cy.contains('Welcome to Backstage');
  //   cy.contains('Getting Started');
  //   cy.contains('Quick Links');
  //   cy.contains('APIs');
  // });

  it('should display support info when clicking the button', () => {
    cy.do(Button('SUPPORT').click());
    cy.expect(
      Popover()
        .find(List())
        .find(ListItem(including('#backstage')))
        .find(Link({ href: 'https://discord.gg/MUpMjP2' }))
        .exists(),
    );
  });

  // NOTE `error-button` doesn't exist
  // eslint-disable-next-line jest/no-commented-out-tests
  // it('should display error message when triggering it', () => {
  //   cy.findByTestId('error-button').click({ force: true });
  //   cy.contains('Error: Oh no!');
  //   cy.findByTestId('error-button-close').click({ force: true });
  // });

  // NOTE Don't have `/login` page
  // eslint-disable-next-line jest/no-commented-out-tests
  // it('should be able to login and logout', () => {
  //   const name = 'test-name';
  //   Cypress.on('window:before:load', win => {
  //     win.fetch = cy.stub().resolves({
  //       status: 200,
  //       json: () => ({ username: 'test name', token: 'token', name }),
  //     });
  //   });

  //   cy.get('a[href="/login"]').click({ force: true });
  //   cy.url().should('include', '/login');
  //   cy.contains('Welcome, guest!');
  //   cy.contains('Username')
  //     .get('input[name=github-username-tf]')
  //     .type(name, { force: true });
  //   cy.contains('Token')
  //     .get('input[name=github-auth-tf]')
  //     .type('password', { force: true });
  //   cy.findByTestId('github-auth-button').click({ force: true });
  //   cy.contains(`Welcome, ${name}!`);
  //   cy.contains('Logout').click({ force: true });
  //   cy.contains('Welcome, guest!');
  // });
});
