
const CXMOVEINPUTMIN = `fragment CXMOVEINPUTMIN on CxMove {
  Origin {
    Street
    State {
      Id
      _ObjectType: ObjectType
    }
    City
    Id
  }
  Destination {
    Street
    State {
      Id
      _ObjectType: ObjectType
    }
    City
    Id
  }
  Id
}`;
module.exports = { fragment: CXMOVEINPUTMIN,
                   fragmentName: 'CXMOVEINPUTMIN',
                   query:'cxMoves',
                   saveMutation :  'cxMoves_onSave',
                   deletionMutation :  'cxMoves_onDelete',
                   objectType: 'Move',
                   clazz: 'CxMoveInput',
                   entityClass: 'CxMove'
                 };
