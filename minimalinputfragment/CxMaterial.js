
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
module.exports = { CXMATERIALINPUTMIN };
