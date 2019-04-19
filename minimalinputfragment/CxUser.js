
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
module.exports = { CXUSERINPUTMIN,
                   query:'cxUsers',
                   saveMutation :  'cxUsers_onSave',
                   deletionMutation :  'cxUsers_onDelete',
                   objectType: 'User',
                   clazz: 'CxUserInput'
                 };
