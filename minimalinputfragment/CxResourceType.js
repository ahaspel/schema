
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
                   query:'cxResourceTypes',
                   saveMutation :  'cxResourceTypes_onSave',
                   deletionMutation :  'cxResourceTypes_onDelete',
                   objectType: 'ResourceType',
                   clazz: 'CxResourceTypeInput'
                 };
