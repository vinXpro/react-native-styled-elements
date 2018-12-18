import { NativeModules } from 'react-native'

//Enable fallbacks if you want`en-US` and`en-GB` to fallback to`en`
export default {
    fallbacks: true,
    locale: `${NativeModules.SettingsManager.settings.AppleLocale}`,
    translations: {},
    getLanguage: function () {
        if (this.fallbacks) return this.locale.replace(/(\s*(-|_).*$)/, '')
        return this.locale
    },
    t: function (key) {
        if (!this.translations[this.locale]) return null
        return this.translations[this.locale][key]
    }
};