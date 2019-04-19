
const CXRESOURCEGROUPINPUTMIN = `fragment CXRESOURCEGROUPINPUTMIN on CxResourceGroup {
  Contact {
    Id
  }
  Name
  ResourceBlocks {
    Resource {
      Id
    }
    CurrentLifespan {
      Start
      End
    }
    Id
  }
  Id
}`;
module.exports = { CXRESOURCEGROUPINPUTMIN,
                   query:'cxResourceGroups',
                   saveMutation :  'cxResourceGroups_onSave',
                   deletionMutation :  'cxResourceGroups_onDelete',
                   objectType: 'ResourceGroup',
                   clazz: 'CxResourceGroupInput'
                 };
