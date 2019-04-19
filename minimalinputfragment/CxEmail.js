
const CXEMAILINPUTMIN = `fragment CXEMAILINPUTMIN on CxEmail {
  Id
  Email
}`;
module.exports = { CXEMAILINPUTMIN,
                   query:'cxEmails',
                   saveMutation :  'cxEmails_onSave',
                   deletionMutation :  'cxEmails_onDelete',
                   objectType: 'Email',
                   clazz: 'CxEmailInput'
                 };
