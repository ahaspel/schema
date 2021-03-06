
const CXLEVELINPUTMIN = `fragment CXLEVELINPUTMIN on CxLevel {
  Id
  Name
}`;
module.exports = { fragment: CXLEVELINPUTMIN,
                   fragmentName: 'CXLEVELINPUTMIN',
                   query:'cxLevels',
                   saveMutation :  'cxLevels_onSave',
                   deletionMutation :  'cxLevels_onDelete',
                   objectType: 'Level',
                   clazz: 'CxLevelInput',
                   entityClass: 'CxLevel'
                 };
