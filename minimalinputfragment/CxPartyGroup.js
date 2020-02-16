
const CXPARTYGROUPINPUTMIN = `fragment CXPARTYGROUPINPUTMIN on CxPartyGroup {
  Parties {
    Id
  }
  Id
  Name
}`;
module.exports = { fragment: CXPARTYGROUPINPUTMIN,
                   fragmentName: 'CXPARTYGROUPINPUTMIN',
                   query:'cxPartyGroups',
                   saveMutation :  'cxPartyGroups_onSave',
                   deletionMutation :  'cxPartyGroups_onDelete',
                   objectType: 'PartyGroup',
                   clazz: 'CxPartyGroupInput'
                 };
