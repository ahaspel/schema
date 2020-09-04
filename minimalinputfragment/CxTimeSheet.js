
const CXTIMESHEETINPUTMIN = `fragment CXTIMESHEETINPUTMIN on CxTimeSheet {
  Job {
    Id
  }
  CurrentLifespan {
    Start
    End
  }
  Id
}`;
module.exports = { fragment: CXTIMESHEETINPUTMIN,
                   fragmentName: 'CXTIMESHEETINPUTMIN',
                   query:'cxTimeSheets',
                   saveMutation :  'cxTimeSheets_onSave',
                   deletionMutation :  'cxTimeSheets_onDelete',
                   objectType: 'TimeSheet',
                   clazz: 'CxTimeSheetInput',
                   entityClass: 'CxTimeSheet'
                 };
