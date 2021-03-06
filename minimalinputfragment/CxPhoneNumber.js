
const CXPHONENUMBERINPUTMIN = `fragment CXPHONENUMBERINPUTMIN on CxPhoneNumber {
  PhoneNumber
  Id
}`;
module.exports = { fragment: CXPHONENUMBERINPUTMIN,
                   fragmentName: 'CXPHONENUMBERINPUTMIN',
                   query:'cxPhoneNumbers',
                   saveMutation :  'cxPhoneNumbers_onSave',
                   deletionMutation :  'cxPhoneNumbers_onDelete',
                   objectType: 'PhoneNumber',
                   clazz: 'CxPhoneNumberInput',
                   entityClass: 'CxPhoneNumber'
                 };
