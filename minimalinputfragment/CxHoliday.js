
const CXHOLIDAYINPUTMIN = `fragment CXHOLIDAYINPUTMIN on CxHoliday {
  Holiday
  Name
  Id
}`;
module.exports = { CXHOLIDAYINPUTMIN,
                   saveMutation :  'cxHolidayInputs_onSave',
                   deletionMutation :  'cxHolidayInputs_Delete',
                   objectType: 'Holiday',
                   clazz: 'CxHolidayInput'
                 };
