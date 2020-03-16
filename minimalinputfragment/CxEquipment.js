
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
module.exports = { fragment: CXEQUIPMENTINPUTMIN,
                   fragmentName: 'CXEQUIPMENTINPUTMIN',
                   query:'cxEquipments',
                   saveMutation :  'cxEquipments_onSave',
                   deletionMutation :  'cxEquipments_onDelete',
                   objectType: 'Equipment',
                   clazz: 'CxEquipmentInput',
                   entityClass: 'CxEquipment'
                 };
