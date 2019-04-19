
const CXAPPLICATIONLICENSEINPUTMIN = `fragment CXAPPLICATIONLICENSEINPUTMIN on CxApplicationLicense {
  Id
  Expiration
  AllowedUsers
  AllowedWebUsers
  SerialNumber
}`;
module.exports = { CXAPPLICATIONLICENSEINPUTMIN,
                   saveMutation :  'cxApplicationLicenseInputs_onSave',
                   deletionMutation :  'cxApplicationLicenseInputs_Delete',
                   objectType: 'ApplicationLicense',
                   clazz: 'CxApplicationLicenseInput'
                 };
