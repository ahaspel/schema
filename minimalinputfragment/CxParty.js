
const CXPARTYINPUTMIN = `fragment CXPARTYINPUTMIN on CxParty {
  Name
  Id
}`;
module.exports = { CXPARTYINPUTMIN,
                   saveMutation :  'cxPartyInputs_onSave',
                   deletionMutation :  'cxPartyInputs_Delete',
                   objectType: 'Party'
                 };
