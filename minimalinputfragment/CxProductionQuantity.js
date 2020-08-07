
const CXPRODUCTIONQUANTITYINPUTMIN = `fragment CXPRODUCTIONQUANTITYINPUTMIN on CxProductionQuantity {
  Day
  Job {
    Id
  }
  CostCode {
    Id
  }
  Amount
  Id
}`;
module.exports = { fragment: CXPRODUCTIONQUANTITYINPUTMIN,
                   fragmentName: 'CXPRODUCTIONQUANTITYINPUTMIN',
                   query:'cxProductionQuantitys',
                   saveMutation :  'cxProductionQuantitys_onSave',
                   deletionMutation :  'cxProductionQuantitys_onDelete',
                   objectType: 'ProductionQuantity',
                   clazz: 'CxProductionQuantityInput',
                   entityClass: 'CxProductionQuantity'
                 };
