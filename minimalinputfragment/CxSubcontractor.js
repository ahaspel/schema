
const CXSUBCONTRACTORINPUTMIN = `fragment CXSUBCONTRACTORINPUTMIN on CxSubcontractor {
  CompanyType {
    Id
    _ObjectType: ObjectType
  }
  Name
  Id
}`;
module.exports = { CXSUBCONTRACTORINPUTMIN,
                   saveMutation :  'cxSubcontractorInputs_onSave',
                   deletionMutation :  'cxSubcontractorInputs_Delete',
                   objectType: 'Subcontractor'
                 };
