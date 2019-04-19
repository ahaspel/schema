
const CXRESOURCEGROUPINPUTMIN = `fragment CXRESOURCEGROUPINPUTMIN on CxResourceGroup {
  Contact {
    Id
  }
  Name
  ResourceBlocks {
    Resource {
      Id
    }
    CurrentLifespan {
      Start
      End
    }
    Id
  }
  Id
}`;
module.exports = { CXRESOURCEGROUPINPUTMIN };
