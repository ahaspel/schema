
const CXPHONENUMBERINPUTMIN = `fragment CXPHONENUMBERINPUTMIN on CxPhoneNumber {
  Id
  PhoneNumber
}`;
module.exports = { CXPHONENUMBERINPUTMIN,
                   query:'cxPhoneNumbers',
                   saveMutation :  'cxPhoneNumbers_onSave',
                   deletionMutation :  'cxPhoneNumbers_onDelete',
                   objectType: 'PhoneNumber',
                   clazz: 'CxPhoneNumberInput'
                 };
