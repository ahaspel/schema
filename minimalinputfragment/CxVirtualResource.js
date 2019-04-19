
const CXVIRTUALRESOURCEINPUTMIN = `fragment CXVIRTUALRESOURCEINPUTMIN on CxVirtualResource {
  ResourceSubtype {
    Id
  }
  Owner {
    Id
  }
}`;
module.exports = { CXVIRTUALRESOURCEINPUTMIN,
                   query:'cxVirtualResources',
                   saveMutation :  'cxVirtualResources_onSave',
                   deletionMutation :  'cxVirtualResources_onDelete',
                   objectType: 'VirtualResource',
                   clazz: 'CxVirtualResourceInput'
                 };
