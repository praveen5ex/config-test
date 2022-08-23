let unAuthLogData = {
    moduleCode: '',
    actions: '',
  };
  let Permissions = [
    {
      moduleCode: 'engagement_messages',
      moduleName: 'Messages',
      moduleId: 37,
      tinggProductCode: 'engagement',
      actions: {
        SEND_MESSAGE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        DEACTIVATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        CREATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        'view-messages': { roles: ['engage-admin'], powers: ['ADMIN'] },
        activate: { roles: ['engage-admin'], powers: ['ADMIN'] },
        UPDATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        VIEW: { roles: ['engage-admin'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'pay-by-link',
      moduleName: 'Pay By Link',
      moduleId: 74,
      tinggProductCode: 'payment-links',
      actions: {
        CREATE: {
          roles: ['administrator'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        UPDATE: {
          roles: ['administrator'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        VIEW: {
          roles: ['administrator'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
      },
    },
    {
      moduleCode: 'policies',
      moduleName: 'policies',
      moduleId: 7,
      tinggProductCode: 'customer-management',
      actions: {
        'update-policy': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'create-policy': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        VIEW: { roles: ['administrator'], powers: ['ADMIN', 'AUDITOR', 'MAKER'] },
        'change-status': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
      },
    },
    {
      moduleCode: 'payment-options',
      moduleName: 'payment-options',
      moduleId: 23,
      tinggProductCode: 'setup',
      actions: {
        'update-payment-option': { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        'create-payment-option': { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'payouts',
      moduleName: 'Web Payouts',
      moduleId: 75,
      tinggProductCode: 'payouts',
      actions: {
        'send-payout': { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        'cancel-payout': { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        VIEW: { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
      },
    },
    {
      moduleCode: 'merchant-running-balance',
      moduleName: 'Merchant Running Balance',
      moduleId: 81,
      tinggProductCode: 'settlement',
      actions: {
        'adjust-balance': { roles: ['administrator'], powers: ['ADMIN'] },
        VIEW: { roles: ['administrator'], powers: ['ADMIN'] },
        'initiate-onDemand-settlement': {
          roles: ['administrator'],
          powers: ['ADMIN'],
        },
      },
    },
    {
      moduleCode: 'payment-option-type',
      moduleName: 'payment-option-type',
      moduleId: 22,
      tinggProductCode: 'setup',
      actions: {
        'create-payment-option-type': {
          roles: ['administrator'],
          powers: ['MAKER'],
        },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        'add-module-action': { roles: ['administrator'], powers: ['MAKER'] },
        'update-payment-option-type': {
          roles: ['administrator'],
          powers: ['MAKER'],
        },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'payments',
      moduleName: 'Payments',
      moduleId: 3,
      tinggProductCode: 'payments',
      actions: {
        'view-payments': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        'acknowledge-payment': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        UPDATE: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        VIEW: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        'initiate-refund': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
      },
    },
    {
      moduleCode: 'customer-levels',
      moduleName: 'customer levels',
      moduleId: 13,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'recon',
      moduleName: 'Reconciliation',
      moduleId: 42,
      tinggProductCode: 'payments',
      actions: {
        CREATE: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        'initiate-recon': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        UPDATE: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        VIEW: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
      },
    },
    {
      moduleCode: 'refunds',
      moduleName: 'Refunds',
      moduleId: 4,
      tinggProductCode: 'payments',
      actions: {
        'view-refunds': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        UPDATE: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        'acknowledge-refund': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        VIEW: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        'initiate-refund': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
      },
    },
    {
      moduleCode: 'engagement_credits',
      moduleName: 'Credits',
      moduleId: 39,
      tinggProductCode: 'engagement',
      actions: {
        DEACTIVATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        CREATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        activate: { roles: ['engage-admin'], powers: ['ADMIN'] },
        UPDATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        VIEW: { roles: ['engage-admin'], powers: ['ADMIN'] },
        SELF_TOPUP: { roles: ['engage-admin'], powers: ['ADMIN'] },
        ALLOCATE_CREDIT: { roles: ['engage-admin'], powers: ['ADMIN'] },
        allocate_credits: { roles: ['engage-admin'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'service-limits',
      moduleName: 'service limits',
      moduleId: 9,
      tinggProductCode: 'customer-management',
      actions: {
        'add-service-limit': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'update-service-limit': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        VIEW: { roles: ['administrator'], powers: ['ADMIN', 'AUDITOR', 'MAKER'] },
        'change-status': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
      },
    },
    {
      moduleCode: 'engagement_inbox',
      moduleName: 'Inbox',
      moduleId: 38,
      tinggProductCode: 'engagement',
      actions: {
        SEND_MESSAGE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        DEACTIVATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        CREATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        activate: { roles: ['engage-admin'], powers: ['ADMIN'] },
        CONVERSATION_SETUP: { roles: ['engage-admin'], powers: ['ADMIN'] },
        UPDATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        VIEW: { roles: ['engage-admin'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'modes',
      moduleName: 'Settlement Models',
      moduleId: 59,
      tinggProductCode: 'settlement',
      actions: {
        DEACTIVATE: { roles: ['administrator'], powers: ['ADMIN'] },
        CREATE: { roles: ['administrator'], powers: ['ADMIN'] },
        activate: { roles: ['administrator'], powers: ['ADMIN'] },
        UPDATE: { roles: ['administrator'], powers: ['ADMIN'] },
        VIEW: { roles: ['administrator'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'users',
      moduleName: 'users',
      moduleId: 5,
      tinggProductCode: 'customer-management',
      actions: {
        'unlock-user-account': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        CREATE: {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'create-user': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'add-user-role': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        VIEW: { roles: ['administrator'], powers: ['ADMIN', 'AUDITOR', 'MAKER'] },
        'change-status': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'update-user': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
      },
    },
    {
      moduleCode: 'models',
      moduleName: 'Commission Models',
      moduleId: 56,
      tinggProductCode: 'settlement',
      actions: {
        DEACTIVATE: { roles: ['administrator'], powers: ['ADMIN'] },
        CREATE: { roles: ['administrator'], powers: ['ADMIN'] },
        activate: { roles: ['administrator'], powers: ['ADMIN'] },
        UPDATE: { roles: ['administrator'], powers: ['ADMIN'] },
        VIEW: { roles: ['administrator'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'duration',
      moduleName: 'Settlement Duration',
      moduleId: 58,
      tinggProductCode: 'settlement',
      actions: {
        DEACTIVATE: { roles: ['administrator'], powers: ['ADMIN'] },
        CREATE: { roles: ['administrator'], powers: ['ADMIN'] },
        activate: { roles: ['administrator'], powers: ['ADMIN'] },
        UPDATE: { roles: ['administrator'], powers: ['ADMIN'] },
        VIEW: { roles: ['administrator'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'entity-states',
      moduleName: 'entity states',
      moduleId: 14,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'engagement_settings',
      moduleName: 'Settings',
      moduleId: 41,
      tinggProductCode: 'engagement',
      actions: {
        DEACTIVATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        CREATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        activate: { roles: ['engage-admin'], powers: ['ADMIN'] },
        UPDATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        VIEW: { roles: ['engage-admin'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'bank-accounts',
      moduleName: 'Bank Accounts',
      moduleId: 55,
      tinggProductCode: 'settlement',
      actions: {
        DEACTIVATE: { roles: ['administrator'], powers: ['ADMIN'] },
        CREATE: { roles: ['administrator'], powers: ['ADMIN'] },
        activate: { roles: ['administrator'], powers: ['ADMIN'] },
        UPDATE: { roles: ['administrator'], powers: ['ADMIN'] },
        VIEW: { roles: ['administrator'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'accounts',
      moduleName: 'Float Accounts',
      moduleId: 35,
      tinggProductCode: 'payouts',
      actions: {
        'allocate-float': { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        CREATE: { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        'topup-float': { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        UPDATE: { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        VIEW: { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        'create-float-account': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER'],
        },
      },
    },
    {
      moduleCode: 'paybills',
      moduleName: 'paybills',
      moduleId: 18,
      tinggProductCode: 'setup',
      actions: {
        'create-paybill': { roles: ['administrator'], powers: ['MAKER'] },
        DEACTIVATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-paybill': { roles: ['administrator'], powers: ['MAKER'] },
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        activate: { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'tingg-actions',
      moduleName: 'tingg-actions',
      moduleId: 25,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'customers',
      moduleName: 'Customers',
      moduleId: 1,
      tinggProductCode: 'customer-management',
      actions: {
        'create-customers': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'view-overview': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'update-customer': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'assign-agent': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'create-users': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'view-customers': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'view-users': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'view-accounts': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        VIEW: { roles: ['administrator'], powers: ['ADMIN', 'AUDITOR', 'MAKER'] },
        'create-customer': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'change-status': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'update-users': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
      },
    },
    {
      moduleCode: 'banks',
      moduleName: 'Banks',
      moduleId: 54,
      tinggProductCode: 'settlement',
      actions: {
        DEACTIVATE: { roles: ['administrator'], powers: ['ADMIN'] },
        CREATE: { roles: ['administrator'], powers: ['ADMIN'] },
        activate: { roles: ['administrator'], powers: ['ADMIN'] },
        UPDATE: { roles: ['administrator'], powers: ['ADMIN'] },
        VIEW: { roles: ['administrator'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'tingg-products',
      moduleName: 'tingg-products',
      moduleId: 27,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'onboarding-levels',
      moduleName: 'onboarding levels',
      moduleId: 16,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'engagement_channels',
      moduleName: 'Channels',
      moduleId: 40,
      tinggProductCode: 'engagement',
      actions: {
        DEACTIVATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        CREATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        activate: { roles: ['engage-admin'], powers: ['ADMIN'] },
        UPDATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        VIEW: { roles: ['engage-admin'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'push-urls',
      moduleName: 'push urls',
      moduleId: 6,
      tinggProductCode: 'customer-management',
      actions: {
        'update-url': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'add-url': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        VIEW: { roles: ['administrator'], powers: ['ADMIN', 'AUDITOR', 'MAKER'] },
        'change-status': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
      },
    },
    {
      moduleCode: 'developer',
      moduleName: 'Developer',
      moduleId: 36,
      tinggProductCode: 'Developer',
      actions: { VIEW: { roles: ['key-manager'], powers: ['ADMIN'] } },
    },
    {
      moduleCode: 'balance',
      moduleName: 'balance',
      moduleId: 69,
      tinggProductCode: 'payments',
      actions: {
        CREATE: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        UPDATE: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        VIEW: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
      },
    },
    {
      moduleCode: 'settings',
      moduleName: 'Settlement Settings',
      moduleId: 60,
      tinggProductCode: 'settlement',
      actions: {
        DEACTIVATE: { roles: ['administrator'], powers: ['ADMIN'] },
        CREATE: { roles: ['administrator'], powers: ['ADMIN'] },
        activate: { roles: ['administrator'], powers: ['ADMIN'] },
        UPDATE: { roles: ['administrator'], powers: ['ADMIN'] },
        VIEW: { roles: ['administrator'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'currencies',
      moduleName: 'currencies',
      moduleId: 12,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'services',
      moduleName: 'services',
      moduleId: 8,
      tinggProductCode: 'customer-management',
      actions: {
        VIEW: { roles: ['administrator'], powers: ['ADMIN', 'AUDITOR', 'MAKER'] },
        'update-service': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'change-status': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'create-service': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
      },
    },
    {
      moduleCode: 'countries',
      moduleName: 'countries',
      moduleId: 11,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'payment-channel',
      moduleName: 'payment-channel',
      moduleId: 21,
      tinggProductCode: 'setup',
      actions: {
        'update-payment-channel': { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
        'create-payment-channel': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'unit',
      moduleName: 'Settlement Unit',
      moduleId: 57,
      tinggProductCode: 'settlement',
      actions: {
        DEACTIVATE: { roles: ['administrator'], powers: ['ADMIN'] },
        CREATE: { roles: ['administrator'], powers: ['ADMIN'] },
        activate: { roles: ['administrator'], powers: ['ADMIN'] },
        UPDATE: { roles: ['administrator'], powers: ['ADMIN'] },
        VIEW: { roles: ['administrator'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'paybill-type',
      moduleName: 'paybill-type',
      moduleId: 19,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'online',
      moduleName: 'online',
      moduleId: 61,
      tinggProductCode: 'checkout',
      actions: {
        CREATE: {
          roles: ['administrator'],
          powers: ['ADMIN', 'CHECKER', 'MAKER', 'AUDITOR'],
        },
        UPDATE: {
          roles: ['administrator'],
          powers: ['ADMIN', 'CHECKER', 'MAKER', 'AUDITOR'],
        },
        VIEW: {
          roles: ['administrator'],
          powers: ['ADMIN', 'CHECKER', 'MAKER', 'AUDITOR'],
        },
      },
    },
    {
      moduleCode: 'tingg-modules',
      moduleName: 'tingg-modules',
      moduleId: 24,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'reconcile',
      moduleName: 'Reconcile',
      moduleId: 29,
      tinggProductCode: 'payments',
      actions: {
        'initiate-recon': {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
        VIEW: {
          roles: ['manager'],
          powers: ['ADMIN', 'MAKER', 'CHECKER', 'AUDITOR'],
        },
      },
    },
    {
      moduleCode: 'payment-channels',
      moduleName: 'payment channels',
      moduleId: 10,
      tinggProductCode: 'customer-management',
      actions: {
        'update-payment-channel': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        VIEW: { roles: ['administrator'], powers: ['ADMIN', 'AUDITOR', 'MAKER'] },
        'change-status': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
        'create-payment-channel': {
          roles: ['administrator'],
          powers: ['ADMIN', 'AUDITOR', 'MAKER'],
        },
      },
    },
    {
      moduleCode: 'engagement_contacts',
      moduleName: 'Contacts',
      moduleId: 43,
      tinggProductCode: 'engagement',
      actions: {
        DEACTIVATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        CREATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        activate: { roles: ['engage-admin'], powers: ['ADMIN'] },
        UPDATE: { roles: ['engage-admin'], powers: ['ADMIN'] },
        VIEW: { roles: ['engage-admin'], powers: ['ADMIN'] },
      },
    },
    {
      moduleCode: 'float-management',
      moduleName: 'Float Management',
      moduleId: 34,
      tinggProductCode: 'payouts',
      actions: {
        'allocate-float': { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        CREATE: { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        'view-float-balance': { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        'topup-float': { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        UPDATE: { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
        VIEW: { roles: ['manager'], powers: ['ADMIN', 'MAKER'] },
      },
    },
    {
      moduleCode: 'networks',
      moduleName: 'Networks',
      moduleId: 15,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'module-actions',
      moduleName: 'module-actions',
      moduleId: 28,
      tinggProductCode: 'setup',
      actions: {
        'add-module-action': { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        'update-module-action': { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'password-statuses',
      moduleName: 'password statuses',
      moduleId: 17,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'payment-channel-type',
      moduleName: 'payment-channel-type',
      moduleId: 20,
      tinggProductCode: 'setup',
      actions: {
        'update-payment-channel-type': {
          roles: ['administrator'],
          powers: ['MAKER'],
        },
        'create-payment-channel-type': {
          roles: ['administrator'],
          powers: ['MAKER'],
        },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
    {
      moduleCode: 'tingg-roles',
      moduleName: 'tingg-roles',
      moduleId: 26,
      tinggProductCode: 'setup',
      actions: {
        CREATE: { roles: ['administrator'], powers: ['MAKER'] },
        'update-status': { roles: ['administrator'], powers: ['MAKER'] },
        UPDATE: { roles: ['administrator'], powers: ['MAKER'] },
        VIEW: { roles: ['administrator'], powers: ['MAKER'] },
        'change-status': { roles: ['administrator'], powers: ['MAKER'] },
      },
    },
  ];
  function getLocalUserModulePermissions(moduleCode) {
    const permissions = Permissions;
    if (permissions != null) {
      const modulePermissions = permissions.find(
        (permission) =>
          permission.moduleCode.toLowerCase() == moduleCode.toLowerCase()
      );
      return modulePermissions;
    } else {
      return null;
    }
  }
  function canVisitPage(visitedRoute, pageRoutes) {
    let canVisit = false;
    const currentRouteConfig = pageRoutes.find(
      (p) => p.path.toLowerCase() == visitedRoute.toLowerCase()
    );
  
    /* If protection not configured*/
    if (!currentRouteConfig?.data?.tinggGuardConfig) {
      return (canVisit = true);
    }
    const modulePermissions = [];
    currentRouteConfig.data.tinggGuardConfig.forEach((config) => {
      const modulePerm = getLocalUserModulePermissions(config.moduleCode);
      if (modulePerm) {
        modulePermissions.push(modulePerm);
        if (!config?.actions?.length) {
          if (modulePerm?.actions.hasOwnProperty('VIEW')) {
            //If roles not specified
            if (!config?.roles?.length) {
              canVisit = true;
            }
            //If roles are specified
            const viewRoles = modulePerm?.actions?.VIEW?.roles;
            if (config?.roles?.length) {
              config.roles.forEach((routeRole) => {
                if (
                  viewRoles &&
                  viewRoles.some(
                    (vRole) => vRole.toLowerCase() == routeRole.toLowerCase()
                  )
                ) {
                  //can visit if the current user role is allowed for the current url
                  canVisit = true;
                } else {
                  unAuthLogData.moduleCode = config?.moduleCode;
                  unAuthLogData.actions = 'VIEW';
                }
              });
            }
          }
        }
  
        if (config?.actions?.length) {
          config.actions.forEach((action) => {
            //If roles not specified
            if (!config?.roles?.length) {
              return (canVisit = true);
            }
  
            //If roles are specified
            const actionRoles = modulePerm?.actions?.[action]?.roles;
            if (config?.roles?.length) {
              config.roles.forEach((routeRole) => {
                if (
                  actionRoles &&
                  actionRoles.some(
                    (vRole) => vRole.toLowerCase() == routeRole.toLowerCase()
                  )
                ) {
                  //can visit if the current user role is allowed for the current url
                  canVisit = true;
                } else {
                  // unAuthLogData.moduleCode = config?.moduleCode;
                  // unAuthLogData.actions = config?.actions?.toString() ?? 'VIEW';
                }
              });
            } else {
              // unAuthLogData.moduleCode = config?.moduleCode;
              // unAuthLogData.actions = config?.actions?.toString() ?? 'VIEW';
            }
          });
        }
      } else {
        unAuthLogData.moduleCode = config?.moduleCode;
        unAuthLogData.actions = config?.actions?.toString() ?? 'VIEW';
      }
    });
    // console.log(modulePermissions);
    if (!modulePermissions.length) {
      return (canVisit = false);
    }
  
    return canVisit;
  }
  
  let existingPath = 'admin/permissions';
  let pageRoutes = [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    {
      path: 'admin',
      redirectTo: 'admin/permissions',
      pathMatch: 'full',
    },
    {
      path: 'admin/permissions',
      data: {
        tinggGuardConfig: [
          {
            moduleCode: 'tingg-modules',
            actions: ['VIEW'],
            roles: ['cellulant-administrator', 'administrator'],
            // roles: ['custom'],
          },
          {
            moduleCode: 'tingg-actions',
            actions: ['VIEW'],
            roles: ['cellulant-administrator', 'administrator'],
            // roles: ['cusotm'],
          },
          {
            moduleCode: 'module-actions',
            actions: ['VIEW', 'view-module-action'],
            roles: ['cellulant-administrator', 'administrator'],
            // roles: ['custom'],
          },
        ],
      },
    },
    {
      path: 'admin/setup',
    },
    {
      path: 'admin/localization',
    },
    { path: '**' },
  ];
  
  console.log('canVisitPage', canVisitPage(existingPath, pageRoutes));
  console.log(unAuthLogData.moduleCode + ' - ' + unAuthLogData.actions);
  