
const CXTIMEENTRYINPUTMIN = `fragment CXTIMEENTRYINPUTMIN on CxTimeEntry {
  Resource {
    Id
  }
  JobActivity {
    Id
  }
  Owner {
    Id
  }
  CurrentLifespan {
    Start
    End
  }
  Id
}`;
module.exports = { fragment: CXTIMEENTRYINPUTMIN,
                   fragmentName: 'CXTIMEENTRYINPUTMIN',
                   query:'cxTimeEntrys',
                   saveMutation :  'cxTimeEntrys_onSave',
                   deletionMutation :  'cxTimeEntrys_onDelete',
                   objectType: 'TimeEntry',
                   clazz: 'CxTimeEntryInput'
                 };
