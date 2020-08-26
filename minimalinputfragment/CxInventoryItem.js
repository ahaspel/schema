
const CXINVENTORYITEMINPUTMIN = `fragment CXINVENTORYITEMINPUTMIN on CxInventoryItem {
  
}`;
module.exports = { fragment: CXINVENTORYITEMINPUTMIN,
                   fragmentName: 'CXINVENTORYITEMINPUTMIN',
                   query:'cxInventoryItems',
                   saveMutation :  'cxInventoryItems_onSave',
                   deletionMutation :  'cxInventoryItems_onDelete',
                   objectType: 'InventoryItem',
                   clazz: 'CxInventoryItemInput',
                   entityClass: 'CxInventoryItem'
                 };
