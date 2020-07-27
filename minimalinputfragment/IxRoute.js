
const IXROUTEINPUTMIN = `fragment IXROUTEINPUTMIN on IxRoute {
  Driver {
    Id
  }
  Id
}`;
module.exports = { fragment: IXROUTEINPUTMIN,
                   fragmentName: 'IXROUTEINPUTMIN',
                   query:'ixRoutes',
                   saveMutation :  'ixRoutes_onSave',
                   deletionMutation :  'ixRoutes_onDelete',
                   objectType: 'Route',
                   clazz: 'IxRouteInput',
                   entityClass: 'IxRoute'
                 };
