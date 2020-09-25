
const CXRESOURCEQUANTITYSPANINPUTMIN = `fragment CXRESOURCEQUANTITYSPANINPUTMIN on CxResourceQuantitySpan {
  ResourceSubtypeId
  SupplierId
  Amount
  Range {
    
  }
}`;
module.exports = { fragment: CXRESOURCEQUANTITYSPANINPUTMIN,
                   fragmentName: 'CXRESOURCEQUANTITYSPANINPUTMIN',
                   query:'cxResourceQuantitySpans',
                   saveMutation :  'cxResourceQuantitySpans_onSave',
                   deletionMutation :  'cxResourceQuantitySpans_onDelete',
                   objectType: 'ResourceQuantitySpan',
                   clazz: 'CxResourceQuantitySpanInput',
                   entityClass: 'CxResourceQuantitySpan'
                 };
