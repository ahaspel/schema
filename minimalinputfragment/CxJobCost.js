
const CXJOBCOSTINPUTMIN = `fragment CXJOBCOSTINPUTMIN on CxJobCost {
  CostCode {
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
    Id
    Name
  }
  TotalAmount
  Id
}`;
module.exports = { CXJOBCOSTINPUTMIN };