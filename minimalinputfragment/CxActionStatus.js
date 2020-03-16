
const CXACTIONSTATUSINPUTMIN = `fragment CXACTIONSTATUSINPUTMIN on CxActionStatus {
  Name
  Id
}`;
module.exports = { fragment: CXACTIONSTATUSINPUTMIN,
                   fragmentName: 'CXACTIONSTATUSINPUTMIN',
                   query:'cxActionStatuss',
                   saveMutation :  'cxActionStatuss_onSave',
                   deletionMutation :  'cxActionStatuss_onDelete',
                   objectType: 'ActionStatus',
                   clazz: 'CxActionStatusInput',
                   entityClass: 'CxActionStatus'
                 };
