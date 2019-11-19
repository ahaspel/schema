
const CXSHIFTINPUTMIN = `fragment CXSHIFTINPUTMIN on CxShift {
  Days {
    Day
    Start
    Duration
  }
  Name
  Id
}`;
module.exports = { fragment: CXSHIFTINPUTMIN,
                   fragmentName: 'CXSHIFTINPUTMIN',
                   query:'cxShifts',
                   saveMutation :  'cxShifts_onSave',
                   deletionMutation :  'cxShifts_onDelete',
                   objectType: 'Shift',
                   clazz: 'CxShiftInput'
                 };
