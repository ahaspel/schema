
const CXCOSTCODEINPUTMIN = `fragment CXCOSTCODEINPUTMIN on CxCostCode {
  UnitCost {
    Unit {
      Id
    }
    Cost {
      Unit {
        Id
      }
      Quantity
    }
  }
  Id
  Name
}`;
module.exports = { fragment: CXCOSTCODEINPUTMIN,
                   fragmentName: 'CXCOSTCODEINPUTMIN',
                   query:'cxCostCodes',
                   saveMutation :  'cxCostCodes_onSave',
                   deletionMutation :  'cxCostCodes_onDelete',
                   objectType: 'CostCode',
                   clazz: 'CxCostCodeInput',
                   entityClass: 'CxCostCode'
                 };
