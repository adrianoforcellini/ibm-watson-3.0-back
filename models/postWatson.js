const synthesizeAudio = require('../utills/text-to-speech-API');

const postWatson = async (req, res) => {
  const {id, comment} =  req.body;
  const voices = {
   de : 'de-DE_DieterV3Voice',
   en : 'en-GB_JamesV3Voice',
   it : 'it-IT_FrancescaV3Voice',
   fr : 'fr-FR_ReneeV3Voice',
   ja : 'ja-JP_EmiV3Voice',
   ko : 'ko-KR_HyunjunVoice',
   es : 'es-ES_LauraV3Voice',
   pt : 'pt-BR_IsabelaV3Voice',
  }
  const synthesizeParams =
  {
    text: `${comment}`,
    accept: 'audio/mp3',
    voice: 'pt-BR_IsabelaV3Voice',
  };
  
  synthesizeAudio(synthesizeParams, id);
  res.send(comment);
};

module.exports = postWatson;
