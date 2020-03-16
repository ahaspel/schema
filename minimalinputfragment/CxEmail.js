
const CXEMAILINPUTMIN = `fragment CXEMAILINPUTMIN on CxEmail {
  Email
}`;
module.exports = { fragment: CXEMAILINPUTMIN,
                   fragmentName: 'CXEMAILINPUTMIN',
                   query:'cxEmails',
                   saveMutation :  'cxEmails_onSave',
                   deletionMutation :  'cxEmails_onDelete',
                   objectType: 'Email',
                   clazz: 'CxEmailInput',
                   entityClass: 'CxEmail'
                 };
