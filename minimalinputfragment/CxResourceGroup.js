
const CXRESOURCEGROUPINPUTMIN = `fragment CXRESOURCEGROUPINPUTMIN on CxResourceGroup {
  Foreman {
    Id
  }
  Resources {
    Id
  }
  Name
  Id
}`;
module.exports = { fragment: CXRESOURCEGROUPINPUTMIN,
                   fragmentName: 'CXRESOURCEGROUPINPUTMIN',
                   query:'cxResourceGroups',
                   saveMutation :  'cxResourceGroups_onSave',
                   deletionMutation :  'cxResourceGroups_onDelete',
                   objectType: 'ResourceGroup',
                   clazz: 'CxResourceGroupInput'
                 };
