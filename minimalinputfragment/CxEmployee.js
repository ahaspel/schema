
const CXEMPLOYEEINPUTMIN = `fragment CXEMPLOYEEINPUTMIN on CxEmployee {
  LastName
  FirstName
  ResourceSubtype {
    Id
  }
  CurrentLifespan {
    
  }
  Id
}`;
module.exports = { fragment: CXEMPLOYEEINPUTMIN,
                   fragmentName: 'CXEMPLOYEEINPUTMIN',
                   query:'cxEmployees',
                   saveMutation :  'cxEmployees_onSave',
                   deletionMutation :  'cxEmployees_onDelete',
                   objectType: 'Employee',
                   clazz: 'CxEmployeeInput',
                   entityClass: 'CxEmployee'
                 };
