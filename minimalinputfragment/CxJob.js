
const CXJOBINPUTMIN = `fragment CXJOBINPUTMIN on CxJob {
  Priority {
    Id
    _ObjectType: ObjectType
  }
  Types {
    Id
    _ObjectType: ObjectType
  }
  Subtypes {
    Id
    _ObjectType: ObjectType
  }
  Address {
    Street
    State {
      Id
      _ObjectType: ObjectType
    }
    City
    Id
  }
  AccountCode
  Name
  CurrentLifespan {
    Start
    End
  }
  JobActivities {
    Id
    Name
  }
  Owner {
    Id
  }
  Manager {
    Id
  }
  JobStatus {
    Id
    _ObjectType: ObjectType
  }
  Id
}`;
module.exports = { CXJOBINPUTMIN,
                   saveMutation :  'cxJobInputs_onSave',
                   deletionMutation :  'cxJobInputs_Delete',
                   objectType: 'Job'
                 };
