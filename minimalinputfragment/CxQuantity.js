
const CXQUANTITYINPUTMIN = `fragment CXQUANTITYINPUTMIN on CxQuantity {
  Unit {
    Id
  }
  Quantity
}`;
module.exports = { fragment: CXQUANTITYINPUTMIN,
                   fragmentName: 'CXQUANTITYINPUTMIN',
                   query:'cxQuantitys',
                   saveMutation :  'cxQuantitys_onSave',
                   deletionMutation :  'cxQuantitys_onDelete',
                   objectType: 'Quantity',
                   clazz: 'CxQuantityInput',
                   entityClass: 'CxQuantity'
                 };
