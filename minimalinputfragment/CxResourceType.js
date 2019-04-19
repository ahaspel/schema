
const CXRESOURCETYPEINPUTMIN = `fragment CXRESOURCETYPEINPUTMIN on CxResourceType {
  Family
  ResourceSubtypes {
    Id
    Name
  }
  Name
  Id
}`;
module.exports = { CXRESOURCETYPEINPUTMIN,
                   saveMutation :  'cxResourceTypeInputs_onSave',
                   deletionMutation :  'cxResourceTypeInputs_Delete',
                   objectType: 'ResourceType',
                   clazz: 'CxResourceTypeInput'
                 };
