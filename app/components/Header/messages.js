/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  browse: {
    id: `${scope}.browse`,
    defaultMessage: 'Browse',
  },
  howItWorks: {
    id: `${scope}.how_it_works`,
    defaultMessage: 'How it works',
  },
  help: {
    id: `${scope}.help`,
    defaultMessage: 'Help',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
});
