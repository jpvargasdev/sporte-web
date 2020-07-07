import React from "react";
import { action } from "@storybook/addon-actions";
// window.___push was renamed to window.___navigate, has to do this renaming too or storybook would error on clicking links
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}
// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context. We override it to empty functions (no-op),
// so gatsby link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash we need to set it as well.
global.__PATH_PREFIX__ = "";

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In storybook it doesn't make sense to do an actual navigate, instead we want to log an action. Checkout the actions addon docs https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};
