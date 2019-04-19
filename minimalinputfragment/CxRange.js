
const CXRANGEINPUTMIN = `fragment CXRANGEINPUTMIN on CxRange {
  Start
  End
}`;
module.exports = { CXRANGEINPUTMIN,
                   query:'cxRanges',
                   saveMutation :  'cxRanges_onSave',
                   deletionMutation :  'cxRanges_onDelete',
                   objectType: 'Range',
                   clazz: 'CxRangeInput'
                 };
