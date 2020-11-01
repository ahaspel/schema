
const CXCUSTOMPROPERTYINPUTMIN = `fragment CXCUSTOMPROPERTYINPUTMIN on CxCustomProperty {
  Id
  Name
}`;
module.exports = { fragment: CXCUSTOMPROPERTYINPUTMIN,
                   fragmentName: 'CXCUSTOMPROPERTYINPUTMIN',
                   query:'cxCustomPropertys',
                   saveMutation :  'cxCustomPropertys_onSave',
                   deletionMutation :  'cxCustomPropertys_onDelete',
                   objectType: 'CustomProperty',
                   clazz: 'CxCustomPropertyInput',
                   entityClass: 'CxCustomProperty'
                 };
