
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
    Name
  }
  Manager {
    Id
    Name
  }
  JobStatus {
    Id
    _ObjectType: ObjectType
  }
  Id
}`;
module.exports = { fragment: CXJOBINPUTMIN,
                   fragmentName: 'CXJOBINPUTMIN',
                   query:'cxJobs',
                   saveMutation :  'cxJobs_onSave',
                   deletionMutation :  'cxJobs_onDelete',
                   objectType: 'Job',
                   clazz: 'CxJobInput',
                   entityClass: 'CxJob'
                 };
