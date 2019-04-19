
const CXEMPLOYEEINPUTMIN = `fragment CXEMPLOYEEINPUTMIN on CxEmployee {
  LastName
  FirstName
  Person {
    Id
    Name
  }
  Owner {
    Id
  }
  ResourceSubtype {
    Id
  }
  CurrentLifespan {
    Start
    End
  }
  Id
}`;
module.exports = { CXEMPLOYEEINPUTMIN,
                   query:'cxEmployees',
                   saveMutation :  'cxEmployees_onSave',
                   deletionMutation :  'cxEmployees_onDelete',
                   objectType: 'Employee',
                   clazz: 'CxEmployeeInput'
                 };
