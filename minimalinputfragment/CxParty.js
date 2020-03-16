
const CXPARTYINPUTMIN = `fragment CXPARTYINPUTMIN on CxParty {
  Name
  Id
}`;
module.exports = { fragment: CXPARTYINPUTMIN,
                   fragmentName: 'CXPARTYINPUTMIN',
                   query:'cxPartys',
                   saveMutation :  'cxPartys_onSave',
                   deletionMutation :  'cxPartys_onDelete',
                   objectType: 'Party',
                   clazz: 'CxPartyInput',
                   entityClass: 'CxParty'
                 };
