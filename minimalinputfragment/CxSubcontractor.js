
const CXSUBCONTRACTORINPUTMIN = `fragment CXSUBCONTRACTORINPUTMIN on CxSubcontractor {
  CompanyType {
    Id
    _ObjectType: ObjectType
  }
  Name
  Id
}`;
module.exports = { fragment: CXSUBCONTRACTORINPUTMIN,
                   fragmentName: 'CXSUBCONTRACTORINPUTMIN',
                   query:'cxSubcontractors',
                   saveMutation :  'cxSubcontractors_onSave',
                   deletionMutation :  'cxSubcontractors_onDelete',
                   objectType: 'Subcontractor',
                   clazz: 'CxSubcontractorInput'
                 };
