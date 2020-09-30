
const CXEMPLOYEEINPUTMIN = `fragment CXEMPLOYEEINPUTMIN on CxEmployee {
  LastName
  FirstName
  CurrentLifespan {
    Start
    End
  }
  ResourceSubtype {
    Id
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
