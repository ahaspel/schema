
const CXSHIFTDAYINPUTMIN = `fragment CXSHIFTDAYINPUTMIN on CxShiftDay {
  Day
  Start
  Minutes
}`;
module.exports = { fragment: CXSHIFTDAYINPUTMIN,
                   fragmentName: 'CXSHIFTDAYINPUTMIN',
                   query:'cxShiftDays',
                   saveMutation :  'cxShiftDays_onSave',
                   deletionMutation :  'cxShiftDays_onDelete',
                   objectType: 'ShiftDay',
                   clazz: 'CxShiftDayInput',
                   entityClass: 'CxShiftDay'
                 };
