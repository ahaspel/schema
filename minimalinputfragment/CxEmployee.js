
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
                   saveMutation :  'cxEmployeeInputs_onSave',
                   deletionMutation :  'cxEmployeeInputs_Delete',
                   objectType: 'Employee'
                 };
