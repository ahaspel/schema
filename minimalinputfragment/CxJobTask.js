
const CXJOBTASKINPUTMIN = `fragment CXJOBTASKINPUTMIN on CxJobTask {
  CreatorId
  JobId
  Status {
    Id
    _ObjectType: ObjectType
  }
  Id
}`;
module.exports = { fragment: CXJOBTASKINPUTMIN,
                   fragmentName: 'CXJOBTASKINPUTMIN',
                   query:'cxJobTasks',
                   saveMutation :  'cxJobTasks_onSave',
                   deletionMutation :  'cxJobTasks_onDelete',
                   objectType: 'JobTask',
                   clazz: 'CxJobTaskInput'
                 };
