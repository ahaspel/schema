
const CXCAPACITYINPUTMIN = `fragment CXCAPACITYINPUTMIN on CxCapacity {
  
}`;
module.exports = { fragment: CXCAPACITYINPUTMIN,
                   fragmentName: 'CXCAPACITYINPUTMIN',
                   query:'cxCapacitys',
                   saveMutation :  'cxCapacitys_onSave',
                   deletionMutation :  'cxCapacitys_onDelete',
                   objectType: 'Capacity',
                   clazz: 'CxCapacityInput',
                   entityClass: 'CxCapacity'
                 };
