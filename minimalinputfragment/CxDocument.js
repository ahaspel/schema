
const CXDOCUMENTINPUTMIN = `fragment CXDOCUMENTINPUTMIN on CxDocument {
  FilePath
  Name
  Id
}`;
module.exports = { CXDOCUMENTINPUTMIN,
                   saveMutation :  'cxDocumentInputs_onSave',
                   deletionMutation :  'cxDocumentInputs_Delete',
                   objectType: 'Document',
                   clazz: 'CxDocumentInput'
                 };
