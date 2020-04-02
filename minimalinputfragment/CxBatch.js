
const CXBATCHINPUTMIN = `fragment CXBATCHINPUTMIN on CxBatch {
  ImportType
}`;
module.exports = { fragment: CXBATCHINPUTMIN,
                   fragmentName: 'CXBATCHINPUTMIN',
                   query:'cxBatchs',
                   saveMutation :  'cxBatchs_onSave',
                   deletionMutation :  'cxBatchs_onDelete',
                   objectType: 'Batch',
                   clazz: 'CxBatchInput',
                   entityClass: 'CxBatch'
                 };
