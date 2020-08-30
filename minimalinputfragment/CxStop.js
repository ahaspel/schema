
const CXSTOPINPUTMIN = `fragment CXSTOPINPUTMIN on CxStop {
  Id
  Address {
    Street
    State {
      Id
      _ObjectType: ObjectType
    }
    City
    Id
  }
}`;
module.exports = { fragment: CXSTOPINPUTMIN,
                   fragmentName: 'CXSTOPINPUTMIN',
                   query:'cxStops',
                   saveMutation :  'cxStops_onSave',
                   deletionMutation :  'cxStops_onDelete',
                   objectType: 'Stop',
                   clazz: 'CxStopInput',
                   entityClass: 'CxStop'
                 };
