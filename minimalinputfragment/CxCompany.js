
const CXCOMPANYINPUTMIN = `fragment CXCOMPANYINPUTMIN on CxCompany {
  CompanyType {
    Id
    _ObjectType: ObjectType
  }
  Name
  Id
}`;
module.exports = { fragment: CXCOMPANYINPUTMIN,
                   fragmentName: 'CXCOMPANYINPUTMIN',
                   query:'cxCompanys',
                   saveMutation :  'cxCompanys_onSave',
                   deletionMutation :  'cxCompanys_onDelete',
                   objectType: 'Company',
                   clazz: 'CxCompanyInput'
                 };
