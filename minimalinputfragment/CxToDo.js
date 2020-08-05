
const CXTODOINPUTMIN = `fragment CXTODOINPUTMIN on CxToDo {
  Name
  Job {
    Id
  }
  Id
}`;
module.exports = { fragment: CXTODOINPUTMIN,
                   fragmentName: 'CXTODOINPUTMIN',
                   query:'cxToDos',
                   saveMutation :  'cxToDos_onSave',
                   deletionMutation :  'cxToDos_onDelete',
                   objectType: 'ToDo',
                   clazz: 'CxToDoInput',
                   entityClass: 'CxToDo'
                 };
