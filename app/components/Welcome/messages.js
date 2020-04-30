/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage.welcome';

export default defineMessages({
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'Welcome! Thanks for joining us.',
  },
  setUpYourAccount: {
    id: `${scope}.set_up_your_account`,
    defaultMessage: 'Set up your account',
  },
  descriptionLabel: {
    id: `${scope}.description.label`,
    defaultMessage: 'Description',
  },
  descriptionMessage: {
    id: `${scope}.description.message`,
    defaultMessage:
      'Hanc ego cum soluta nobis est laborum et accusamus et via procedat oratio. Sed ut ad modum, quaeso, interpretaris? sicine eos censes aut rerum hic tenetur.',
  },
});
