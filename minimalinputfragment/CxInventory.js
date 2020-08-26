
const CXINVENTORYINPUTMIN = `fragment CXINVENTORYINPUTMIN on CxInventory {
  
}`;
module.exports = { fragment: CXINVENTORYINPUTMIN,
                   fragmentName: 'CXINVENTORYINPUTMIN',
                   query:'cxInventorys',
                   saveMutation :  'cxInventorys_onSave',
                   deletionMutation :  'cxInventorys_onDelete',
                   objectType: 'Inventory',
                   clazz: 'CxInventoryInput',
                   entityClass: 'CxInventory'
                 };
