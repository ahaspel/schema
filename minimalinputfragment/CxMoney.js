
const CXMONEYINPUTMIN = `fragment CXMONEYINPUTMIN on CxMoney {
  Unit {
    Id
  }
  Quantity
}`;
module.exports = { fragment: CXMONEYINPUTMIN,
                   fragmentName: 'CXMONEYINPUTMIN',
                   query:'cxMoneys',
                   saveMutation :  'cxMoneys_onSave',
                   deletionMutation :  'cxMoneys_onDelete',
                   objectType: 'Money',
                   clazz: 'CxMoneyInput',
                   entityClass: 'CxMoney'
                 };
