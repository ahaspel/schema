
const CXDOCUMENTINPUTMIN = `fragment CXDOCUMENTINPUTMIN on CxDocument {
  Name
  Id
}`;
module.exports = { fragment: CXDOCUMENTINPUTMIN,
                   fragmentName: 'CXDOCUMENTINPUTMIN',
                   query:'cxDocuments',
                   saveMutation :  'cxDocuments_onSave',
                   deletionMutation :  'cxDocuments_onDelete',
                   objectType: 'Document',
                   clazz: 'CxDocumentInput',
                   entityClass: 'CxDocument'
                 };
