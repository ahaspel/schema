
const CXLOOKUPVALUEINPUTMIN = `fragment CXLOOKUPVALUEINPUTMIN on CxLookupValue {
  Id
  Name
}`;
module.exports = { fragment: CXLOOKUPVALUEINPUTMIN,
                   fragmentName: 'CXLOOKUPVALUEINPUTMIN',
                   query:'cxLookupValues',
                   saveMutation :  'cxLookupValues_onSave',
                   deletionMutation :  'cxLookupValues_onDelete',
                   objectType: 'LookupValue',
                   clazz: 'CxLookupValueInput',
                   entityClass: 'CxLookupValue'
                 };
