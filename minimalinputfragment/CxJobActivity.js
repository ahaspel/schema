
const CXJOBACTIVITYINPUTMIN = `fragment CXJOBACTIVITYINPUTMIN on CxJobActivity {
  Name
  Id
}`;
module.exports = { CXJOBACTIVITYINPUTMIN,
                   saveMutation :  'cxJobActivityInputs_onSave',
                   deletionMutation :  'cxJobActivityInputs_Delete',
                   objectType: 'JobActivity'
                 };
