
const CXRANGEINPUTMIN = `fragment CXRANGEINPUTMIN on CxRange {
  Start
  End
}`;
module.exports = { fragment: CXRANGEINPUTMIN,
                   fragmentName: 'CXRANGEINPUTMIN',
                   query:'cxRanges',
                   saveMutation :  'cxRanges_onSave',
                   deletionMutation :  'cxRanges_onDelete',
                   objectType: 'Range',
                   clazz: 'CxRangeInput',
                   entityClass: 'CxRange'
                 };
