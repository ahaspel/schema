
const CXCOSTCODEINPUTMIN = `fragment CXCOSTCODEINPUTMIN on CxCostCode {
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
  Name
  Id
}`;
module.exports = { CXCOSTCODEINPUTMIN };
