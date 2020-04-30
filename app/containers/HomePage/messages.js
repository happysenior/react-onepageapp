/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  profileListLabel: {
    id: `${scope}.profile_list.label`,
    defaultMessage: 'Profile list',
  },
  profileListMessage: {
    id: `${scope}.profile_list.message`,
    defaultMessage:
      'Laudem et via procedat oratio quaerimus igitur, quid et accurate disserendum et dolorem?. At magnum periculum adiit in oculis quidem exercitus quid ex ea voluptate et.',
  },
  userEmailAddress: {
    id: `${scope}.user_email_address`,
    defaultMessage: 'User email address',
  },
});
