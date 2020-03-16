
const CXHOLIDAYINPUTMIN = `fragment CXHOLIDAYINPUTMIN on CxHoliday {
  Holiday
  Name
  Id
}`;
module.exports = { fragment: CXHOLIDAYINPUTMIN,
                   fragmentName: 'CXHOLIDAYINPUTMIN',
                   query:'cxHolidays',
                   saveMutation :  'cxHolidays_onSave',
                   deletionMutation :  'cxHolidays_onDelete',
                   objectType: 'Holiday',
                   clazz: 'CxHolidayInput',
                   entityClass: 'CxHoliday'
                 };
