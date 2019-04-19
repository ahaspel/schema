
const CXRESOURCESUBTYPEINPUTMIN = `fragment CXRESOURCESUBTYPEINPUTMIN on CxResourceSubtype {
  Name
  Id
}`;
module.exports = { fragment: CXRESOURCESUBTYPEINPUTMIN,
                   fragmentName: 'CXRESOURCESUBTYPEINPUTMIN',
                   query:'cxResourceSubtypes',
                   saveMutation :  'cxResourceSubtypes_onSave',
                   deletionMutation :  'cxResourceSubtypes_onDelete',
                   objectType: 'ResourceSubtype',
                   clazz: 'CxResourceSubtypeInput'
                 };
