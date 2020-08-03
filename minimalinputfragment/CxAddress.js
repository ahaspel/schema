
const CXADDRESSINPUTMIN = `fragment CXADDRESSINPUTMIN on CxAddress {
  Id
  ObjectType
  Street
  City
  State {
    Id
    _ObjectType: ObjectType
  }
}`;
module.exports = { fragment: CXADDRESSINPUTMIN,
                   fragmentName: 'CXADDRESSINPUTMIN',
                   query:'cxAddresss',
                   saveMutation :  'cxAddresss_onSave',
                   deletionMutation :  'cxAddresss_onDelete',
                   objectType: 'Address',
                   clazz: 'CxAddressInput',
                   entityClass: 'CxAddress'
                 };
