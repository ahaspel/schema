
const CXTEXTMESSAGEINPUTMIN = `fragment CXTEXTMESSAGEINPUTMIN on CxTextMessage {
  Text
  Sender {
    Id
    PhoneNumber
  }
  Recipient {
    Id
    PhoneNumber
  }
  Id
}`;
module.exports = { fragment: CXTEXTMESSAGEINPUTMIN,
                   fragmentName: 'CXTEXTMESSAGEINPUTMIN',
                   query:'cxTextMessages',
                   saveMutation :  'cxTextMessages_onSave',
                   deletionMutation :  'cxTextMessages_onDelete',
                   objectType: 'TextMessage',
                   clazz: 'CxTextMessageInput'
                 };
