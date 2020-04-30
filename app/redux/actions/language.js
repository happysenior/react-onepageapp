/*
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from '../actionTypes/language';

export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
