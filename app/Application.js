Ext.define('Prototypes.Application', {
    name: 'Prototypes',

    extend: 'Ext.app.Application',

    controllers: [
        /*'admin.packages.PackagesController',
        'admin.services.ServicesController',
        'admin.systemadmin.useradmin.SecurityAccessLevelController',
        'admin.systemadmin.useradmin.UserMaintenanceController',
        'layouttest.LayoutTestController',
        'order.admin.ElementGroupsController',
        'order.summary.OrderSummaryController',
        'project.ProjectController',
        'project.VendorTradesController',
        'report.DocumentLibraryController',
        'report.ReportLibraryController',
        'resources.positions.ResourcesController',
        'selfservice.importwizard.ImportWizardController',*/
        'timeaway.TimeAwayController',
        'timeaway.TimeAwayManagerController'/*,
        'vendorscustomers.VendorCustomerController',
        'elementcatalog.CartController',
        'elementcatalog.ItemsDisplayController',
        'elementcatalog.TreeMenuController'*/

    ],

    models: [
        /*'admin.packages.Package',
        'admin.packages.PackageSummary',
        'admin.services.Service',
        'admin.services.ServiceType',
        'admin.systemadmin.useradmin.SecurityLevel',
        'admin.systemadmin.useradmin.UserAccount',
        'order.admin.ElementGroup',
        'order.admin.ShareType',
        'report.Category',
        'report.DocumentLibrary',
        'report.FolderLibrary',
        'report.GroupLibrary',
        'report.TypeLibrary',
        'resources.positions.Position',*/
        'timeaway.Request',
        'timeaway.timeawaymanager.RequestDetails'/*,
        'elementcatalog.ItemCart',
        'elementcatalog.Item'*/
    ],

    stores: [
        /*'admin.packages.Packages',
        'admin.services.Services',
        'admin.services.ServiceTypes',
        'admin.systemadmin.useradmin.SecurityLevels',
        'admin.systemadmin.useradmin.UserAccounts',
        'order.admin.ElementGroups',
        'order.admin.ShareTypes',
        'report.Categories',
        'report.DocumentLibraries',
        'report.FolderLibraries',
        'report.GroupLibraries',
        'report.TypeLibraries',
        'resources.positions.Positions',*/
        'timeaway.Requests'/*,
        'elementcatalog.ItemCarts',
        'elementcatalog.Items'*/
    ],

    views: [
        /*'admin.packages.summary.FormPackageSummary',
        'admin.packages.summary.SummaryPopUp',
        'admin.packages.GridPackages',
        'admin.packages.Packages',
        'admin.services.category.CategoryPopUp',
        'admin.services.category.FormCategory',
        'admin.services.categorytype.CategoryTypePopUp',
        'admin.services.categorytype.FormCategoryType',
        'admin.services.GridServices',
        'admin.services.GridServiceTypes',
        'admin.services.Services',
        'admin.systemadmin.useradmin.securityaccesslevel.FormSecurityLevel',
        'admin.systemadmin.useradmin.securityaccesslevel.GridSecurityAccessLevel',
        'admin.systemadmin.useradmin.securityaccesslevel.SecurityLevelPopUp',
        'admin.systemadmin.useradmin.useraccount.FormUserAccount',
        'admin.systemadmin.useradmin.useraccount.GridUserAccount',
        'admin.systemadmin.useradmin.useraccount.UserAccountPopUp',
        'admin.systemadmin.useradmin.MainSecurityAccessLevelsContainer',
        'admin.systemadmin.useradmin.MainUserMaintenanceContainer',
        'layouttest.LayoutTest',
        'order.admin.FormOrderAdminElementGroups',
        'order.admin.GridOrderAdminElementGroups',
        'order.admin.MainOrderAdminElementGroupsContainer',
        'order.admin.OrderAdminElementGroupsPopUp',
        'order.summary.DetailInformation',
        'order.summary.OrderSummaryContainer',
        'project.contacts.ProjectSummaryContactsContainer',
        'project.customerproject.CustomerVendorGrid',
        'project.customerproject.CustomerVendorGridContacts',
        'project.customerproject.CustomerVendorGridOrders',
        'project.customerproject.VendorAdvanceSearch',
        'project.customerproject.VendorTradesContainer',
        'project.ProjectSummary',
        'project.ProjectSummaryForm',
        'project.ProjectSummaryHeader',
        'project.ProjectSummaryLeftForm',
        'project.ProjectSummaryOptions',
        'project.ProjectSummaryRevenueContainer',
        'project.ProjectSummaryRightForm',
        'project.ProjectSummaryTab',
        'report.documentLibrary.DocumentLibraryPopUp',
        'report.documentLibrary.FormDocumentLibrary',
        'report.documentLibrary.GridDocumentLibrary',
        'report.documentLibrary.MainDocumentLibraryContainer',
        'report.reportLibrary.GridReportLibrary',
        'report.reportLibrary.MainReportLibraryContainer',
        'resources.positions.FormCheckResoucesPositions',
        'resources.positions.FormResoucesPositions',
        'resources.positions.GridResourcesPositions',
        'resources.positions.PositionPopUp',
        'resources.MainResourcePositionContainer',
        'selfservice.importwizard.ChooseFile',
        'selfservice.importwizard.DateFieldMapping',
        'selfservice.importwizard.ImportWizardCardContainer',
        'selfservice.importwizard.PreviewFile',
        'selfservice.importwizard.PreviewImport',*/
        'timeaway.executivedashboard.ExecutiveDashboardContainer',
        'timeaway.executivedashboard.SearchExecutiveDashboard',
        'timeaway.timeawayrequest.graphical.ApprovedRequestDetails',
        'timeaway.timeawayrequest.graphical.GraphicalAvailabilityTool',
        'timeaway.timeawayrequest.graphical.GraphicalGridContainer',
        'timeaway.timeawayrequest.graphical.ViewAvailability',
        'timeaway.timeawayrequest.requestdetail.CalendarRequest',
        'timeaway.timeawayrequest.requestdetail.RequestDetail',
        'timeaway.timeawayrequest.summaryinformation.BalanceProfile',
        'timeaway.timeawayrequest.summaryinformation.GridBalanceProfile',
        'timeaway.timeawayrequest.summaryinformation.GridRequestDetail',
        'timeaway.timeawayrequest.summaryinformation.GridRequestHistory',
        'timeaway.timeawayrequest.summaryinformation.SummaryRequestInformation',
        'timeaway.timeawayrequest.TimeAwayContainer',
        'timeaway.MainTimeAwayContainer',
        'timeaway.timeawaymanager.managerfilter.ManagerFilter',
        'timeaway.timeawaymanager.policymanager.FormPolicy',
        'timeaway.timeawaymanager.policymanager.GridAvailableResources',
        'timeaway.timeawaymanager.policymanager.GridGroupRestrictions',
        'timeaway.timeawaymanager.policymanager.GridGroupsRestrictionsToolbar',
        'timeaway.timeawaymanager.policymanager.GridPolicyManager',
        'timeaway.timeawaymanager.policymanager.GroupsRestrictionsContainer',
        'timeaway.timeawaymanager.policymanager.ManagePolicyContainer',
        'timeaway.timeawaymanager.policymanager.PopUpPolicyManager',
        'timeaway.timeawaymanager.specialdate.SpecialDatesManager',
        'timeaway.timeawaymanager.specialdate.UpcomingEvent',
        'timeaway.timeawaymanager.summaryinfo.FormRequestDetails',
        'timeaway.timeawaymanager.summaryinfo.GridBalanceInformation',
        'timeaway.timeawaymanager.summaryinfo.GridRequestDetails',
        'timeaway.timeawaymanager.summaryinfo.SummaryInformation',
        'timeaway.timeawaymanager.BlockDates',
        'timeaway.timeawaymanager.GridGroupPolicies',
        'timeaway.timeawaymanager.GridTimeAwayRequest',
        'timeaway.timeawaymanager.TimeAwayManagerContainer',
        'timeaway.timeawaymanager.TimeAwayManagerTabContainer',
        'timeaway.MainTimeAwayManagerContainer'/*,
        'vendorscustomers.NotesListView',
        'vendorscustomers.MainVendorCustomerContainer',
        'vendorscustomers.GridSavedSearches',
        'vendorscustomers.GridCustomerContacts',
        'vendorscustomers.GridCustomerCenter',
        'vendorscustomers.CustomerContacts',
        'vendorscustomers.AdvancedSearch',
        'vendorscustomers.summary.AdittionInfoSummary',
        'vendorscustomers.summary.SummaryTabContainer',
        'vendorscustomers.summary.SummaryAccounting',
        'vendorscustomers.summary.MainSummaryContainer',
        'vendorscustomers.summary.GridSummaryRateCards',
        'vendorscustomers.summary.GridSummaryLinkedEntities',
        'vendorscustomers.summary.GridSummaryElements',
        'vendorscustomers.summary.GridSummaryDocuments',
        'vendorscustomers.summary.GeneralSummaryInfoContainer',
        'vendorscustomers.summary.DetailedSummaryInfoContainer',
        'vendorscustomers.VendorCustomerContainer',
        'vendorscustomers.VendorCustomerSidePanel',
        'elementcatalog.cart.Cart',
        'elementcatalog.cart.CartGrid',
        'elementcatalog.item.ItemsDisplay',
        'elementcatalog.item.ItemsGrid',
        'elementcatalog.Viewport',
        'elementcatalog.menu.TreeMenu',
        'elementcatalog.menu.Menu',
        'elementcatalog.menu.Details'*/

    ]

});
