
const CXPARTYGROUPINPUTMIN = `fragment CXPARTYGROUPINPUTMIN on CxPartyGroup {
  Name
  Parties {
    Id
  }
  Id
}`;
module.exports = { fragment: CXPARTYGROUPINPUTMIN,
                   fragmentName: 'CXPARTYGROUPINPUTMIN',
                   query:'cxPartyGroups',
                   saveMutation :  'cxPartyGroups_onSave',
                   deletionMutation :  'cxPartyGroups_onDelete',
                   objectType: 'PartyGroup',
                   clazz: 'CxPartyGroupInput',
                   entityClass: 'CxPartyGroup'
                 };
