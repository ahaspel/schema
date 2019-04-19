
const CXPHONENUMBERINPUTMIN = `fragment CXPHONENUMBERINPUTMIN on CxPhoneNumber {
  Id
  PhoneNumber
}`;
module.exports = { CXPHONENUMBERINPUTMIN,
                   saveMutation :  'cxPhoneNumberInputs_onSave',
                   deletionMutation :  'cxPhoneNumberInputs_Delete',
                   objectType: 'PhoneNumber',
                   clazz: 'CxPhoneNumberInput'
                 };
