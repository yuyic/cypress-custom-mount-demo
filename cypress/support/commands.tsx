/// <reference types="cypress" />

import React from "react";
import { mount, MountOptions, MountReturn } from "cypress/react";
import { MemoryRouter } from "react-router-dom";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add("mount", (component, options = {}) => {
  const { routerProps = { initialEntries: ["/"] }, ...mountOptions } = options;

  const wrapped = <MemoryRouter {...routerProps}>{component}</MemoryRouter>;

  return mount(wrapped, mountOptions);
});
