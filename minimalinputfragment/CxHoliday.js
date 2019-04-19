
const CXHOLIDAYINPUTMIN = `fragment CXHOLIDAYINPUTMIN on CxHoliday {
  Holiday
  Name
  Id
}`;
module.exports = { CXHOLIDAYINPUTMIN,
                   query:'cxHolidays',
                   saveMutation :  'cxHolidays_onSave',
                   deletionMutation :  'cxHolidays_onDelete',
                   objectType: 'Holiday',
                   clazz: 'CxHolidayInput'
                 };
