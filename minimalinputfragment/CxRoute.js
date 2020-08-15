
const CXROUTEINPUTMIN = `fragment CXROUTEINPUTMIN on CxRoute {
  Driver {
    Id
  }
  Stops {
    Address {
      Street
      State {
        Id
        _ObjectType: ObjectType
      }
      City
      Id
    }
    Id
  }
  Rig {
    Id
  }
  Id
}`;
module.exports = { fragment: CXROUTEINPUTMIN,
                   fragmentName: 'CXROUTEINPUTMIN',
                   query:'cxRoutes',
                   saveMutation :  'cxRoutes_onSave',
                   deletionMutation :  'cxRoutes_onDelete',
                   objectType: 'Route',
                   clazz: 'CxRouteInput',
                   entityClass: 'CxRoute'
                 };
