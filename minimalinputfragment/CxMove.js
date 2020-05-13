
const CXMOVEINPUTMIN = `fragment CXMOVEINPUTMIN on CxMove {
  Origin {
    Street
    City
    State {
      Id
      _ObjectType: ObjectType
    }
    Id
  }
  Destination {
    Street
    City
    State {
      Id
      _ObjectType: ObjectType
    }
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
