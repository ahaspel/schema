
const CXRANGEINPUTMIN = `fragment CXRANGEINPUTMIN on CxRange {
  Start
  End
}`;
module.exports = { CXRANGEINPUTMIN,
                   saveMutation :  'cxRangeInputs_onSave',
                   deletionMutation :  'cxRangeInputs_Delete',
                   objectType: 'Range',
                   clazz: 'CxRangeInput'
                 };
