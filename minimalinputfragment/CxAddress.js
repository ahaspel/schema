
const CXADDRESSINPUTMIN = `fragment CXADDRESSINPUTMIN on CxAddress {
  Id
  Street
  City
  State {
    Id
    _ObjectType: ObjectType
  }
}`;
module.exports = { CXADDRESSINPUTMIN,
                   saveMutation :  'cxAddressInputs_onSave',
                   deletionMutation :  'cxAddressInputs_Delete',
                   objectType: 'Address',
                   clazz: 'CxAddressInput'
                 };
