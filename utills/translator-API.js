const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const url = "https://api.us-south.language-translator.watson.cloud.ibm.com/instances/b3c8a014-833b-4505-8ef9-81b155c3dfcb",
API_KEY = "ufiU3H4-xOBPoAvjWs9Bc1zNsjdyEtz0axB11-M9B-Yu";


const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  authenticator: new IamAuthenticator({
    apikey: API_KEY,
  }),
  serviceUrl: url,
});

const params = {
  text: 'Testando API de tradução de textos',
  modelId: 'pt-en'
}

languageTranslator.translate(params)
  .then(response => {
    console.log(response.result.translations[0].translation);
  })
  .catch(err => {
    console.log('error:', err);
  });