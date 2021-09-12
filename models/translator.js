const translatorAPI = require('../utills/translator-API');

const translator = async (req, _res) => {
const {comment, source, target} = req.body;
const translate = await translatorAPI(comment, source, target);
console.log(translate)
} 

module.exports = translator;