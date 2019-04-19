
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
                   query:'cxAddresss',
                   saveMutation :  'cxAddresss_onSave',
                   deletionMutation :  'cxAddresss_onDelete',
                   objectType: 'Address',
                   clazz: 'CxAddressInput'
                 };
