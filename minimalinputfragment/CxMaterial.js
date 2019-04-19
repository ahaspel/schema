
const CXMATERIALINPUTMIN = `fragment CXMATERIALINPUTMIN on CxMaterial {
  Inventory {
    Items {
    Id
    Quantity
    Start
  }
  }
  Unit {
    Id
  }
  Reusable
  ResourceSubtype {
    Id
  }
  Id
}`;
module.exports = { CXMATERIALINPUTMIN,
                   saveMutation :  'cxMaterialInputs_onSave',
                   deletionMutation :  'cxMaterialInputs_Delete',
                   objectType: 'Material'
                 };
