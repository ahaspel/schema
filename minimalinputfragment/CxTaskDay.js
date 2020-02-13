
const CXTASKDAYINPUTMIN = `fragment CXTASKDAYINPUTMIN on CxTaskDay {
  Resources {
    Id
  }
  Id
}`;
module.exports = { fragment: CXTASKDAYINPUTMIN,
                   fragmentName: 'CXTASKDAYINPUTMIN',
                   query:'cxTaskDays',
                   saveMutation :  'cxTaskDays_onSave',
                   deletionMutation :  'cxTaskDays_onDelete',
                   objectType: 'TaskDay',
                   clazz: 'CxTaskDayInput'
                 };
