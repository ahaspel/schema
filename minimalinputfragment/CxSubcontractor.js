
const CXSUBCONTRACTORINPUTMIN = `fragment CXSUBCONTRACTORINPUTMIN on CxSubcontractor {
  CompanyType {
    Id
    _ObjectType: ObjectType
  }
  Name
  Id
}`;
module.exports = { CXSUBCONTRACTORINPUTMIN,
                   query:'cxSubcontractors',
                   saveMutation :  'cxSubcontractors_onSave',
                   deletionMutation :  'cxSubcontractors_onDelete',
                   objectType: 'Subcontractor',
                   clazz: 'CxSubcontractorInput'
                 };
