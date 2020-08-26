
const CXSUPPLYTYPEINPUTMIN = `fragment CXSUPPLYTYPEINPUTMIN on CxSupplyType {
  ResourceSubtype {
    Id
  }
  Id
}`;
module.exports = { fragment: CXSUPPLYTYPEINPUTMIN,
                   fragmentName: 'CXSUPPLYTYPEINPUTMIN',
                   query:'cxSupplyTypes',
                   saveMutation :  'cxSupplyTypes_onSave',
                   deletionMutation :  'cxSupplyTypes_onDelete',
                   objectType: 'SupplyType',
                   clazz: 'CxSupplyTypeInput',
                   entityClass: 'CxSupplyType'
                 };
