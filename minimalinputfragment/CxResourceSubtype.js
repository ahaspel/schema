
const CXRESOURCESUBTYPEINPUTMIN = `fragment CXRESOURCESUBTYPEINPUTMIN on CxResourceSubtype {
  Name
  Id
}`;
module.exports = { CXRESOURCESUBTYPEINPUTMIN,
                   saveMutation :  'cxResourceSubtypeInputs_onSave',
                   deletionMutation :  'cxResourceSubtypeInputs_Delete',
                   objectType: 'ResourceSubtype'
                 };
