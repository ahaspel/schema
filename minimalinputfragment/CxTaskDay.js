
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
module.exports = { CXTASKDAYINPUTMIN,
                   saveMutation :  'cxTaskDayInputs_onSave',
                   deletionMutation :  'cxTaskDayInputs_Delete',
                   objectType: 'TaskDay',
                   clazz: 'CxTaskDayInput'
                 };
