
const CXPLANTINPUTMIN = `fragment CXPLANTINPUTMIN on CxPlant {
  CompanyType {
    Id
    _ObjectType: ObjectType
  }
  Id
}`;
module.exports = { CXPLANTINPUTMIN,
                   saveMutation :  'cxPlantInputs_onSave',
                   deletionMutation :  'cxPlantInputs_Delete',
                   objectType: 'Plant'
                 };
