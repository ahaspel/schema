
const CXCONFIGVALUEINPUTMIN = `fragment CXCONFIGVALUEINPUTMIN on CxConfigValue {
  Key
  Value
  Id
}`;
module.exports = { fragment: CXCONFIGVALUEINPUTMIN,
                   fragmentName: 'CXCONFIGVALUEINPUTMIN',
                   query:'cxConfigValues',
                   saveMutation :  'cxConfigValues_onSave',
                   deletionMutation :  'cxConfigValues_onDelete',
                   objectType: 'ConfigValue',
                   clazz: 'CxConfigValueInput',
                   entityClass: 'CxConfigValue'
                 };
