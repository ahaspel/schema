
const CXJOBTASKINPUTMIN = `fragment CXJOBTASKINPUTMIN on CxJobTask {
  Name
  Id
}`;
module.exports = { fragment: CXJOBTASKINPUTMIN,
                   fragmentName: 'CXJOBTASKINPUTMIN',
                   query:'cxJobTasks',
                   saveMutation :  'cxJobTasks_onSave',
                   deletionMutation :  'cxJobTasks_onDelete',
                   objectType: 'JobTask',
                   clazz: 'CxJobTaskInput',
                   entityClass: 'CxJobTask'
                 };
