## API Report File for "@backstage/plugin-register-component"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BackstagePlugin } from '@backstage/core';
import { RouteRef } from '@backstage/core';

// @public (undocumented)
export const RegisterComponentPage: ({ catalogRouteRef, }: {
    catalogRouteRef: RouteRef<any>;
}) => JSX.Element;

// @public (undocumented)
const registerComponentPlugin: BackstagePlugin<{
    root: RouteRef<undefined>;
}, {}>;

export { registerComponentPlugin as plugin }

export { registerComponentPlugin }

// @public @deprecated
export const Router: ({ catalogRouteRef }: {
    catalogRouteRef: RouteRef;
}) => JSX.Element;


// (No @packageDocumentation comment for this package)

```
