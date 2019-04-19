
const CXSHIFTINPUTMIN = `fragment CXSHIFTINPUTMIN on CxShift {
  Name
  Days {
    Day
    Start
    End
  }
  Id
}`;
module.exports = { CXSHIFTINPUTMIN,
                   saveMutation :  'cxShiftInputs_onSave',
                   deletionMutation :  'cxShiftInputs_Delete',
                   objectType: 'Shift',
                   clazz: 'CxShiftInput'
                 };
