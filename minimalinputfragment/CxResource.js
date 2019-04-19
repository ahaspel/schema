
const CXRESOURCEINPUTMIN = `fragment CXRESOURCEINPUTMIN on CxResource {
  ResourceType {
    Family
    ResourceSubtypes {
    Id
  }
    Id
    Name
  }
  ResourceSubtype {
    Id
  }
  Id
}`;
module.exports = { CXRESOURCEINPUTMIN,
                   saveMutation :  'cxResourceInputs_onSave',
                   deletionMutation :  'cxResourceInputs_Delete',
                   objectType: 'Resource',
                   clazz: 'CxResourceInput'
                 };
