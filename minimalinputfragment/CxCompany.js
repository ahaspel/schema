
const CXCOMPANYINPUTMIN = `fragment CXCOMPANYINPUTMIN on CxCompany {
  CompanyType {
    Id
    _ObjectType: ObjectType
  }
  Name
  Id
}`;
module.exports = { CXCOMPANYINPUTMIN,
                   saveMutation :  'cxCompanyInputs_onSave',
                   deletionMutation :  'cxCompanyInputs_Delete',
                   objectType: 'Company'
                 };
