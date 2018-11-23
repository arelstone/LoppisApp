import I18n from 'react-native-i18n';
import da from './locales/da';

I18n.fallbacks = true;

I18n.defaultLocale = 'da'

I18n.translations = {
  da
};

export const t = textKey => I18n.t(textKey);

export default I18n;