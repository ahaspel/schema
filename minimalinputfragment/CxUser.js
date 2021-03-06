
const CXUSERINPUTMIN = `fragment CXUSERINPUTMIN on CxUser {
  Party {
    Id
  }
  Login
  Level {
    Id
  }
  Id
}`;
module.exports = { fragment: CXUSERINPUTMIN,
                   fragmentName: 'CXUSERINPUTMIN',
                   query:'cxUsers',
                   saveMutation :  'cxUsers_onSave',
                   deletionMutation :  'cxUsers_onDelete',
                   objectType: 'User',
                   clazz: 'CxUserInput',
                   entityClass: 'CxUser'
                 };
