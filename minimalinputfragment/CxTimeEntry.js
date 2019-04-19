
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
module.exports = { CXTIMEENTRYINPUTMIN,
                   saveMutation :  'cxTimeEntryInputs_onSave',
                   deletionMutation :  'cxTimeEntryInputs_Delete',
                   objectType: 'TimeEntry'
                 };
