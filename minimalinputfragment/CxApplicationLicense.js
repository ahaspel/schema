
const CXAPPLICATIONLICENSEINPUTMIN = `fragment CXAPPLICATIONLICENSEINPUTMIN on CxApplicationLicense {
  Id
  Expiration
  AllowedUsers
  AllowedWebUsers
  SerialNumber
}`;
module.exports = { CXAPPLICATIONLICENSEINPUTMIN,
                   query:'cxApplicationLicenses',
                   saveMutation :  'cxApplicationLicenses_onSave',
                   deletionMutation :  'cxApplicationLicenses_onDelete',
                   objectType: 'ApplicationLicense',
                   clazz: 'CxApplicationLicenseInput'
                 };
