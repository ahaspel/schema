
const CXATTRIBUTEINPUTMIN = `fragment CXATTRIBUTEINPUTMIN on CxAttribute {
  Id
  Value
  AttributeId
}`;
module.exports = { fragment: CXATTRIBUTEINPUTMIN,
                   fragmentName: 'CXATTRIBUTEINPUTMIN',
                   query:'cxAttributes',
                   saveMutation :  'cxAttributes_onSave',
                   deletionMutation :  'cxAttributes_onDelete',
                   objectType: 'Attribute',
                   clazz: 'CxAttributeInput',
                   entityClass: 'CxAttribute'
                 };
