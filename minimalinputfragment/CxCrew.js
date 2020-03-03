
const CXCREWINPUTMIN = `fragment CXCREWINPUTMIN on CxCrew {
  Foreman {
    Id
  }
  Resources {
    Id
  }
  Name
  Id
}`;
module.exports = { fragment: CXCREWINPUTMIN,
                   fragmentName: 'CXCREWINPUTMIN',
                   query:'cxCrews',
                   saveMutation :  'cxCrews_onSave',
                   deletionMutation :  'cxCrews_onDelete',
                   objectType: 'Crew',
                   clazz: 'CxCrewInput'
                 };
