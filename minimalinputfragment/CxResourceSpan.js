
const CXRESOURCESPANINPUTMIN = `fragment CXRESOURCESPANINPUTMIN on CxResourceSpan {
  ResourceId
  Range {
    Start
    End
  }
}`;
module.exports = { fragment: CXRESOURCESPANINPUTMIN,
                   fragmentName: 'CXRESOURCESPANINPUTMIN',
                   query:'cxResourceSpans',
                   saveMutation :  'cxResourceSpans_onSave',
                   deletionMutation :  'cxResourceSpans_onDelete',
                   objectType: 'ResourceSpan',
                   clazz: 'CxResourceSpanInput'
                 };
