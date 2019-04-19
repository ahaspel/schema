
const CXLOOKUPVALUEINPUTMIN = `fragment CXLOOKUPVALUEINPUTMIN on CxLookupValue {
  Name
  Id
  ObjectType
}`;
module.exports = { CXLOOKUPVALUEINPUTMIN,
                   saveMutation :  'cxLookupValueInputs_onSave',
                   deletionMutation :  'cxLookupValueInputs_Delete',
                   objectType: 'LookupValue'
                 };
