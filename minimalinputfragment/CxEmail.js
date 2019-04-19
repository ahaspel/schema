
const CXEMAILINPUTMIN = `fragment CXEMAILINPUTMIN on CxEmail {
  Id
  Email
}`;
module.exports = { CXEMAILINPUTMIN,
                   saveMutation :  'cxEmailInputs_onSave',
                   deletionMutation :  'cxEmailInputs_Delete',
                   objectType: 'Email'
                 };
