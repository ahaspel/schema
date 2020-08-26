
const CXGEOCODEINPUTMIN = `fragment CXGEOCODEINPUTMIN on CxGeocode {
  Lat
  Lng
}`;
module.exports = { fragment: CXGEOCODEINPUTMIN,
                   fragmentName: 'CXGEOCODEINPUTMIN',
                   query:'cxGeocodes',
                   saveMutation :  'cxGeocodes_onSave',
                   deletionMutation :  'cxGeocodes_onDelete',
                   objectType: 'Geocode',
                   clazz: 'CxGeocodeInput',
                   entityClass: 'CxGeocode'
                 };
