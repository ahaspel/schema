
const CXUNITINPUTMIN = `fragment CXUNITINPUTMIN on CxUnit {
  
}`;
module.exports = { fragment: CXUNITINPUTMIN,
                   fragmentName: 'CXUNITINPUTMIN',
                   query:'cxUnits',
                   saveMutation :  'cxUnits_onSave',
                   deletionMutation :  'cxUnits_onDelete',
                   objectType: 'Unit',
                   clazz: 'CxUnitInput',
                   entityClass: 'CxUnit'
                 };
