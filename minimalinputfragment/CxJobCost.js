
const CXJOBCOSTINPUTMIN = `fragment CXJOBCOSTINPUTMIN on CxJobCost {
  CostCode {
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
  }
  TotalAmount
  Id
}`;
module.exports = { fragment: CXJOBCOSTINPUTMIN,
                   fragmentName: 'CXJOBCOSTINPUTMIN',
                   query:'cxJobCosts',
                   saveMutation :  'cxJobCosts_onSave',
                   deletionMutation :  'cxJobCosts_onDelete',
                   objectType: 'JobCost',
                   clazz: 'CxJobCostInput'
                 };
