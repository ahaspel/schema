
const CXAPPLICATIONLICENSEINPUTMIN = `fragment CXAPPLICATIONLICENSEINPUTMIN on CxApplicationLicense {
  Id
  Expiration
  AllowedFullUsers
  AllowedReadOnlyUsers
  AllowedMobileUsers
}`;
module.exports = { fragment: CXAPPLICATIONLICENSEINPUTMIN,
                   fragmentName: 'CXAPPLICATIONLICENSEINPUTMIN',
                   query:'cxApplicationLicenses',
                   saveMutation :  'cxApplicationLicenses_onSave',
                   deletionMutation :  'cxApplicationLicenses_onDelete',
                   objectType: 'ApplicationLicense',
                   clazz: 'CxApplicationLicenseInput',
                   entityClass: 'CxApplicationLicense'
                 };
