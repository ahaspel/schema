
const CXEQUIPMENTINPUTMIN = `fragment CXEQUIPMENTINPUTMIN on CxEquipment {
  Model
  Make
  Owner {
    Id
  }
  ResourceSubtype {
    Id
  }
  AccountCode
  CurrentLifespan {
    Start
    End
  }
  Id
}`;
module.exports = { CXEQUIPMENTINPUTMIN,
                   saveMutation :  'cxEquipmentInputs_onSave',
                   deletionMutation :  'cxEquipmentInputs_Delete',
                   objectType: 'Equipment',
                   clazz: 'CxEquipmentInput'
                 };
