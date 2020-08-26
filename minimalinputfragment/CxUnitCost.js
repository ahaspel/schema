
const CXUNITCOSTINPUTMIN = `fragment CXUNITCOSTINPUTMIN on CxUnitCost {
  Cost {
    Unit {
      Id
    }
    Quantity
  }
  Unit {
    Id
  }
}`;
module.exports = { fragment: CXUNITCOSTINPUTMIN,
                   fragmentName: 'CXUNITCOSTINPUTMIN',
                   query:'cxUnitCosts',
                   saveMutation :  'cxUnitCosts_onSave',
                   deletionMutation :  'cxUnitCosts_onDelete',
                   objectType: 'UnitCost',
                   clazz: 'CxUnitCostInput',
                   entityClass: 'CxUnitCost'
                 };
