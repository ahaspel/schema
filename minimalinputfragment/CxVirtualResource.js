
const CXVIRTUALRESOURCEINPUTMIN = `fragment CXVIRTUALRESOURCEINPUTMIN on CxVirtualResource {
  ResourceSubtype {
    Id
  }
  Owner {
    Id
  }
}`;
module.exports = { CXVIRTUALRESOURCEINPUTMIN,
                   saveMutation :  'cxVirtualResourceInputs_onSave',
                   deletionMutation :  'cxVirtualResourceInputs_Delete',
                   objectType: 'VirtualResource'
                 };
