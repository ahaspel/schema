
const CXAPPROVALINPUTMIN = `fragment CXAPPROVALINPUTMIN on CxApproval {
  Approver {
    Id
  }
  AsOf
}`;
module.exports = { fragment: CXAPPROVALINPUTMIN,
                   fragmentName: 'CXAPPROVALINPUTMIN',
                   query:'cxApprovals',
                   saveMutation :  'cxApprovals_onSave',
                   deletionMutation :  'cxApprovals_onDelete',
                   objectType: 'Approval',
                   clazz: 'CxApprovalInput',
                   entityClass: 'CxApproval'
                 };
