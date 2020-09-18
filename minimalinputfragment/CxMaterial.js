
const CXMATERIALINPUTMIN = `fragment CXMATERIALINPUTMIN on CxMaterial {
  Inventory {
    Items {
    Amount
    Start
    Id
  }
  }
  Reusable
  ResourceSubtype {
    Id
  }
  Id
}`;
module.exports = { fragment: CXMATERIALINPUTMIN,
                   fragmentName: 'CXMATERIALINPUTMIN',
                   query:'cxMaterials',
                   saveMutation :  'cxMaterials_onSave',
                   deletionMutation :  'cxMaterials_onDelete',
                   objectType: 'Material',
                   clazz: 'CxMaterialInput',
                   entityClass: 'CxMaterial'
                 };
