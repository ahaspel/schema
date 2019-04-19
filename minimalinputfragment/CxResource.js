
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
module.exports = { fragment: CXRESOURCEINPUTMIN,
                   fragmentName: 'CXRESOURCEINPUTMIN',
                   query:'cxResources',
                   saveMutation :  'cxResources_onSave',
                   deletionMutation :  'cxResources_onDelete',
                   objectType: 'Resource',
                   clazz: 'CxResourceInput'
                 };
