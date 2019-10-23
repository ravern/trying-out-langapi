export var LangClient = require('langapi-client')(
  "sk_prod_c6849733-77b9-4d93-8591-0652dbca848b", // Your publishable key. See https://www.langapi.co/dashboard
  require("./translations.json")
  );

  export function tr(phrase, context = {}, forcedLanguage = null) {
    return LangClient.tr(phrase, context, forcedLanguage);
  };

  export function getLanguage() {
    return LangClient.getLanguage()
  }

  export function setLanguage(languageCode) {
    return LangClient.setForceLanguage(languageCode);
  }

  export function liveTr(phrase, config) {
    return LangClient.liveTr(phrase, config);
  }

  export function lookup(phrase, config) {
    return LangClient.lookup(phrase, config);
  }  

  export function liveTrObject(objects, keys, config) {
    return LangClient.liveTrObject(objects, keys, config);
  }
  