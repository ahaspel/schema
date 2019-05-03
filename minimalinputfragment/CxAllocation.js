
const CXALLOCATIONINPUTMIN = `fragment CXALLOCATIONINPUTMIN on CxAllocation {
  JobActivity {
    Id
  }
  TaskDays {
    Id
    CurrentLifespan {
      Start
      End
    }
  }
  Id
}`;
module.exports = { fragment: CXALLOCATIONINPUTMIN,
                   fragmentName: 'CXALLOCATIONINPUTMIN',
                   query:'cxAllocations',
                   saveMutation :  'cxAllocations_onSave',
                   deletionMutation :  'cxAllocations_onDelete',
                   objectType: 'Allocation',
                   clazz: 'CxAllocationInput'
                 };
