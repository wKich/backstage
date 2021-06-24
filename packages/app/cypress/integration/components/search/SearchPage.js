/*
 * Copyright 2021 The Backstage Authors
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
  and,
  Checkbox,
  FormControl,
  Heading,
  including,
  Link,
  ListItem,
  Select,
  SelectOption,
  TextField,
} from 'material-ui-interactors';

const API_ENDPOINT = 'http://localhost:7000/api/search/query';

describe('SearchPage', () => {
  describe('Given a search context with a term, results, and filter values', () => {
    beforeEach(() => cy.enterAsGuest());

    it('The results are rendered as expected', () => {
      const title = 'backstage';
      const text = 'Backstage system documentation';
      const location = '/result/location/path';
      const results = [
        {
          type: 'software-catalog',
          document: { title, text, location },
        },
      ];

      cy.visit('/search-next', {
        onBeforeLoad(win) {
          cy.stub(win, 'fetch')
            .withArgs(`${API_ENDPOINT}?term=&pageCursor=`)
            .resolves({
              ok: true,
              json: () => ({ results }),
            });
        },
      });

      cy.expect(Heading('Search').exists());

      cy.expect(ListItem(and(including(title), including(text))).exists());
      cy.expect(Link({ href: including(location) }).exists());
    });

    it('The filters are rendered as expected', () => {
      cy.visit(
        '/search-next?filters%5Bkind%5D=Component&filters%5Blifecycle%5D%5B%5D=experimental',
        {
          onBeforeLoad(win) {
            cy.stub(win, 'fetch')
              .withArgs(
                `${API_ENDPOINT}?term=&filters%5Bkind%5D=Component&filters%5Blifecycle%5D%5B0%5D=experimental&pageCursor=`,
              )
              .resolves({
                ok: true,
                json: () => ({ results: [] }),
              });
          },
        },
      );
      cy.expect(Heading('Search').exists());

      // lifecycle
      cy.expect(FormControl('Lifecycle').exists());
      cy.expect(Checkbox('experimental').exists());
      cy.expect(Checkbox('production').exists());

      // kind
      cy.do(Select('Kind').open());

      cy.expect(SelectOption('All').exists());
      cy.expect(SelectOption('Template').exists());
      cy.expect(SelectOption('Component').is({ selected: true }));
    });

    it('The search bar is rendered as expected', () => {
      cy.visit('/search-next?query=backstage', {
        onBeforeLoad(win) {
          cy.stub(win, 'fetch')
            .withArgs(`${API_ENDPOINT}?term=backstage&pageCursor=`)
            .resolves({
              ok: true,
              json: () => ({ results: [] }),
            });
        },
      });
      cy.expect(Heading('Search').exists());
      cy.expect(TextField('Search in Backstage').has({ value: 'backstage' }));
    });
  });
});
