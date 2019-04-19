
const CXJOBACTIVITYINPUTMIN = `fragment CXJOBACTIVITYINPUTMIN on CxJobActivity {
  Name
  Id
}`;
module.exports = { CXJOBACTIVITYINPUTMIN,
                   query:'cxJobActivitys',
                   saveMutation :  'cxJobActivitys_onSave',
                   deletionMutation :  'cxJobActivitys_onDelete',
                   objectType: 'JobActivity',
                   clazz: 'CxJobActivityInput'
                 };
