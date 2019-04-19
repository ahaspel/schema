
const CXTASKDAYINPUTMIN = `fragment CXTASKDAYINPUTMIN on CxTaskDay {
  ParentId
  JobActivity {
    Id
  }
  Resources {
    Id
  }
  CurrentLifespan {
    Start
    End
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
