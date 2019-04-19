
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
  Name
  Id
}`;
module.exports = { CXCOSTCODEINPUTMIN,
                   saveMutation :  'cxCostCodeInputs_onSave',
                   deletionMutation :  'cxCostCodeInputs_Delete',
                   objectType: 'CostCode'
                 };
