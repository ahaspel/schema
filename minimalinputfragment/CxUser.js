
const CXUSERINPUTMIN = `fragment CXUSERINPUTMIN on CxUser {
  Party {
    Id
  }
  Username
  Password
  CognitoId
  Level {
    Id
  }
  Id
}`;
module.exports = { CXUSERINPUTMIN };
