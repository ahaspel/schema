
const CXTEXTMESSAGEINPUTMIN = `fragment CXTEXTMESSAGEINPUTMIN on CxTextMessage {
  Text
  Sender {
    PhoneNumber
    Id
  }
  Recipient {
    PhoneNumber
    Id
  }
  Id
}`;
module.exports = { fragment: CXTEXTMESSAGEINPUTMIN,
                   fragmentName: 'CXTEXTMESSAGEINPUTMIN',
                   query:'cxTextMessages',
                   saveMutation :  'cxTextMessages_onSave',
                   deletionMutation :  'cxTextMessages_onDelete',
                   objectType: 'TextMessage',
                   clazz: 'CxTextMessageInput',
                   entityClass: 'CxTextMessage'
                 };
