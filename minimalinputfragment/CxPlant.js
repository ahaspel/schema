
const CXPLANTINPUTMIN = `fragment CXPLANTINPUTMIN on CxPlant {
  CompanyType {
    Id
    _ObjectType: ObjectType
  }
  Id
}`;
module.exports = { fragment: CXPLANTINPUTMIN,
                   fragmentName: 'CXPLANTINPUTMIN',
                   query:'cxPlants',
                   saveMutation :  'cxPlants_onSave',
                   deletionMutation :  'cxPlants_onDelete',
                   objectType: 'Plant',
                   clazz: 'CxPlantInput'
                 };
