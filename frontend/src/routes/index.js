import React from 'react';

import async from '../components/Async';

import {
	BookOpen,
	Briefcase,
	Calendar as CalendarIcon,
	CheckSquare,
	CreditCard,
	Grid,
	Heart,
	Layout,
	List,
	Map,
	Monitor,
	ShoppingCart,
	PieChart,
	Sliders,
	Users,
} from 'react-feather';


// Guards
const AuthGuard = async(() => import('../components/AuthGuard'));
const AdminGuard = async(() => import('../components/AdminGuard'));

// Auth components
const SignIn = async(() => import('../pages/auth/SignIn'));
const SignUp = async(() => import('../pages/auth/SignUp'));
const ResetPassword = async(() => import('../pages/auth/ResetPassword'));
const Page404 = async(() => import('../pages/auth/Page404'));
const Page500 = async(() => import('../pages/auth/Page500'));

// Components components
const Alerts = async(() => import('../pages/components/Alerts'));
const Avatars = async(() => import('../pages/components/Avatars'));
const Badges = async(() => import('../pages/components/Badges'));
const Buttons = async(() => import('../pages/components/Buttons'));
const Cards = async(() => import('../pages/components/Cards'));
const Chips = async(() => import('../pages/components/Chips'));
const Dialogs = async(() => import('../pages/components/Dialogs'));
const ExpPanels = async(() => import('../pages/components/ExpansionPanels'));
const Lists = async(() => import('../pages/components/Lists'));
const Menus = async(() => import('../pages/components/Menus'));
const Pagination = async(() => import('../pages/components/Pagination'));
const Progress = async(() => import('../pages/components/Progress'));
const Snackbars = async(() => import('../pages/components/Snackbars'));
const Tooltips = async(() => import('../pages/components/Tooltips'));

// Dashboards components
const GetSpareTable = async(() =>
	import('../pages/catalogue/get_sp_maintable/catalogue_get_main.table')
);
const MLSpareTable = async(() =>
	import('../pages/catalogue/ml_sp_maintable/catalogue_ml_main.table')
);
const MPSpareTable = async(() =>
	import('../pages/catalogue/mp_sp_maintable/catalogue_mp_main.table')
);

const RollerSpareTable = async(() =>
	import('../pages/catalogue/roller_sp_maintable/catalogue_roller_main.table')
);

const Analytics = async(() => import('../pages/dashboards/Analytics'));
const SaaS = async(() => import('../pages/dashboards/SaaS'));

// Forms components
const Pickers = async(() => import('../pages/forms/Pickers'));
const SelectionCtrls = async(() => import('../pages/forms/SelectionControls'));
const Selects = async(() => import('../pages/forms/Selects'));
const TextFields = async(() => import('../pages/forms/TextFields'));
const Dropzone = async(() => import('../pages/forms/Dropzone'));
const Editors = async(() => import('../pages/forms/Editors'));
const Formik = async(() => import('../pages/forms/Formik'));

// Icons components
const MaterialIcons = async(() => import('../pages/icons/MaterialIcons'));
const FeatherIcons = async(() => import('../pages/icons/FeatherIcons'));

// Pages components
const Blank = async(() => import('../pages/pages/Blank'));
const InvoiceDetails = async(() => import('../pages/pages/InvoiceDetails'));
const InvoiceList = async(() => import('../pages/pages/InvoiceList'));
const CheckoutPage = async(() => import('../pages/cart/cartMain.page'));
const Pricing = async(() => import('../pages/pages/Pricing'));
const SparePart = async(() => import('../pages/sparepart/spare.page'));
const Roller = async(() => import('../pages/roller/roller.page'));
const Tasks = async(() => import('../pages/pages/Tasks'));
const Projects = async(() => import('../pages/pages/Projects'));
const Calendar = async(() => import('../pages/pages/Calendar'));
const Localspare = async(() => import('../pages/localspare/localspare.page'));
const Sites = async(() => import('../pages/sites/sites.page'));

// Tables components
const SimpleTable = async(() => import('../pages/tables/SimpleTable'));
const AdvancedTable = async(() => import('../pages/tables/AdvancedTable'));
const DataGrid = async(() => import('../pages/tables/DataGrid'));

// Chart components
const Chartjs = async(() => import('../pages/charts/Chartjs'));

// Maps components
const GoogleMaps = async(() => import('../pages/maps/GoogleMaps'));
const VectorMaps = async(() => import('../pages/maps/VectorMaps'));

// Documentation
const Welcome = async(() => import('../pages/docs/Welcome'));
const GettingStarted = async(() => import('../pages/docs/GettingStarted'));
const EnvironmentVariables = async(() =>
	import('../pages/docs/EnvironmentVariables')
);
const Deployment = async(() => import('../pages/docs/Deployment'));
const Theming = async(() => import('../pages/docs/Theming'));
const StateManagement = async(() => import('../pages/docs/StateManagement'));
const APICalls = async(() => import('../pages/docs/APICalls'));
const ESLintAndPrettier = async(() =>
	import('../pages/docs/ESLintAndPrettier')
);
const Support = async(() => import('../pages/docs/Support'));
const Changelog = async(() => import('../pages/docs/Changelog'));

// Landing
const Landing = async(() => import('../pages/presentation/Landing'));

// Protected routes
const ProtectedPage = async(() => import('../pages/protected/ProtectedPage'));

//orders routes
const PurchaseRequest = async(() => import('../pages/site_order/site_order.main.page'));
const PrintOrders = async(() => import('../pages/main_order/main_order.page'));
const MonthlyOrders = async(() => import('../pages/monthly-order/monthlyOrder.table'));

const dashboardsRoutes = {
	id: 'Catalogue',
	path: '/dashboard',
	header: 'Pages',
	icon: <Sliders />,
	containsHome: true,
	guard: AuthGuard,
	children: [
		{
			path: '/dashboard/ml',
			name: 'Manganese Liner',
			component: MLSpareTable,
			guard: AuthGuard,
		},
		{
			path: '/dashboard/getparts',
			name: 'Ground Engaging Tools',
			component: GetSpareTable,
			guard: AuthGuard,
		},
		{
			path: '/dashboard/mpparts',
			name: 'Mechanical Parts',
			component: MPSpareTable,
			guard: AuthGuard,
		},
		{
			path: '/dashboard/rollerparts',
			name: 'Roller Spare Parts',
			component: RollerSpareTable,
			guard: AuthGuard,
		},
		{
			path: '/dashboard/analytics',
			name: 'Analytics',
			component: Analytics,
		},
		{
			path: '/dashboard/saas',
			name: 'SaaS',
			component: SaaS,
		},
	],
	component: null,
};

const pagesRoutes = {
	id: 'Admin',
	path: '/admin',
	icon: <Layout />,
	guard: AdminGuard,
	children: [
		{
			path: '/admin/sites',
			name: 'Sites',
			component: Sites,
			guard: AdminGuard,
		},
		{
			path: '/admin/sparepart',
			name: 'Spare Parts',
			component: SparePart,
			guard: AdminGuard,
		},

		{
			path: '/admin/rollers',
			name: 'Roller Spare Parts',
			component: Roller,
			guard: AdminGuard,
		},

		{
			path: '/admin/local',
			name: 'Local Spareparts',
			component: Localspare,
			guard: AdminGuard,
		},
		{
			path: '/admin/blank',
			name: 'Blank Page',
			component: Blank,
		},
	],
	component: null,
};

const projectsRoutes = {
	id: 'Projects',
	path: '/projects',
	icon: <Briefcase />,
	badge: '8',
	component: Projects,
	children: null,
};

const OrdersRoutes = {
	id: 'Orders',
	path: '/orders',
	icon: <CreditCard />,
	guard: AuthGuard,
	children: [
		{
			path: '/orders/purchasereq',
			name: 'Purchase Request',
			component: PurchaseRequest,
			guard: AuthGuard,
		},
		{
			path: '/orders/printorders',
			name: 'Print Orders',
			component: PrintOrders,
			guard: AuthGuard,
		},
		{
			path: '/orders/monthlyorders',
			name: 'Monthly Orders',
			component: MonthlyOrders,
			guard: AuthGuard,
		},
	],
	component: null,
};

const invoiceRoutes = {
	id: 'Invoices',
	path: '/invoices',
	icon: <CreditCard />,
	children: [
		{
			path: '/invoices',
			name: 'List',
			component: InvoiceList,
		},
		{
			path: '/invoices/detail',
			name: 'Details',
			component: InvoiceDetails,
		},
	],
	component: null,
};

const orderRoutes = {
	id: 'Cart',
	path: '/cart',
	icon: <ShoppingCart />,
	component: CheckoutPage,
	children: null,
	guard: AuthGuard,
};

const tasksRoutes = {
	id: 'Tasks',
	path: '/tasks',
	icon: <CheckSquare />,
	badge: '17',
	component: Tasks,
	children: null,
};

const calendarRoutes = {
	id: 'Calendar',
	path: '/calendar',
	icon: <CalendarIcon />,
	component: Calendar,
	children: null,
};

const authRoutes = {
	id: 'Auth',
	path: '/auth',
	icon: <Users />,
	children: [
		{
			path: '/auth/sign-in',
			name: 'Sign In',
			component: SignIn,
		},
		{
			path: '/auth/sign-up',
			name: 'Sign Up',
			component: SignUp,
		},
		{
			path: '/auth/reset-password',
			name: 'Reset Password',
			component: ResetPassword,
		},
		{
			path: '/auth/404',
			name: '404 Page',
			component: Page404,
		},
		{
			path: '/auth/500',
			name: '500 Page',
			component: Page500,
		},
	],
	component: null,
};

const componentsRoutes = {
	id: 'Components',
	path: '/components',
	header: 'Elements',
	icon: <Grid />,
	children: [
		{
			path: '/components/alerts',
			name: 'Alerts',
			component: Alerts,
		},
		{
			path: '/components/avatars',
			name: 'Avatars',
			component: Avatars,
		},
		{
			path: '/components/badges',
			name: 'Badges',
			component: Badges,
		},
		{
			path: '/components/buttons',
			name: 'Buttons',
			component: Buttons,
		},
		{
			path: '/components/cards',
			name: 'Cards',
			component: Cards,
		},
		{
			path: '/components/chips',
			name: 'Chips',
			component: Chips,
		},
		{
			path: '/components/dialogs',
			name: 'Dialogs',
			component: Dialogs,
		},
		{
			path: '/components/expansion-panels',
			name: 'Expansion Panels',
			component: ExpPanels,
		},
		{
			path: '/components/lists',
			name: 'Lists',
			component: Lists,
		},
		{
			path: '/components/menus',
			name: 'Menus',
			component: Menus,
		},
		{
			path: '/components/pagination',
			name: 'Pagination',
			component: Pagination,
		},
		{
			path: '/components/progress',
			name: 'Progress',
			component: Progress,
		},
		{
			path: '/components/snackbars',
			name: 'Snackbars',
			component: Snackbars,
		},
		{
			path: '/components/tooltips',
			name: 'Tooltips',
			component: Tooltips,
		},
	],
	component: null,
};

const formsRoutes = {
	id: 'Forms',
	path: '/forms',
	icon: <CheckSquare />,
	children: [
		{
			path: '/forms/pickers',
			name: 'Pickers',
			component: Pickers,
		},
		{
			path: '/forms/selection-controls',
			name: 'Selection Controls',
			component: SelectionCtrls,
		},
		{
			path: '/forms/selects',
			name: 'Selects',
			component: Selects,
		},
		{
			path: '/forms/text-fields',
			name: 'Text Fields',
			component: TextFields,
		},
		{
			path: '/forms/dropzone',
			name: 'Dropzone',
			component: Dropzone,
		},
		{
			path: '/forms/editors',
			name: 'Editors',
			component: Editors,
		},
		{
			path: '/forms/formik',
			name: 'Formik',
			component: Formik,
		},
	],
	component: null,
};

const tablesRoutes = {
	id: 'Tables',
	path: '/tables',
	icon: <List />,
	children: [
		{
			path: '/tables/simple-table',
			name: 'Simple Table',
			component: SimpleTable,
		},
		{
			path: '/tables/advanced-table',
			name: 'Advanced Table',
			component: AdvancedTable,
		},
		{
			path: '/tables/data-grid',
			name: 'Data Grid',
			component: DataGrid,
		},
	],
	component: null,
};

const iconsRoutes = {
	id: 'Icons',
	path: '/icons',
	icon: <Heart />,
	children: [
		{
			path: '/icons/material-icons',
			name: 'Material Icons',
			component: MaterialIcons,
		},
		{
			path: '/icons/feather-icons',
			name: 'Feather Icons',
			component: FeatherIcons,
		},
	],
	component: null,
};

const chartRoutes = {
	id: 'Charts',
	path: '/charts',
	icon: <PieChart />,
	component: Chartjs,
	children: null,
};

const mapsRoutes = {
	id: 'Maps',
	path: '/maps',
	icon: <Map />,
	children: [
		{
			path: '/maps/google-maps',
			name: 'Google Maps',
			component: GoogleMaps,
		},
		{
			path: '/maps/vector-maps',
			name: 'Vector Maps',
			component: VectorMaps,
		},
	],
	component: null,
};

const landingRoutes = {
	id: 'Landing Page',
	path: '/',
	header: 'Docs',
	icon: <Monitor />,
	component: Landing,
	children: null,
};

const documentationRoutes = {
	id: 'Documentation',
	path: '/documentation',
	header: 'Material App',
	icon: <BookOpen />,
	children: [
		{
			path: '/documentation/welcome',
			name: 'Welcome',
			component: Welcome,
		},
		{
			path: '/documentation/getting-started',
			name: 'Getting Started',
			component: GettingStarted,
		},
		{
			path: '/documentation/environment-variables',
			name: 'Environment Variables',
			component: EnvironmentVariables,
		},
		{
			path: '/documentation/deployment',
			name: 'Deployment',
			component: Deployment,
		},
		{
			path: '/documentation/theming',
			name: 'Theming',
			component: Theming,
		},
		{
			path: '/documentation/state-management',
			name: 'State Management',
			component: StateManagement,
		},
		{
			path: '/documentation/api-calls',
			name: 'API Calls',
			component: APICalls,
		},
		{
			path: '/documentation/eslint-and-prettier',
			name: 'ESLint & Prettier',
			component: ESLintAndPrettier,
		},
		{
			path: '/documentation/support',
			name: 'Support',
			component: Support,
		},
	],
	component: null,
};

const changelogRoutes = {
	id: 'Changelog',
	path: '/changelog',
	badge: 'v2.0.0',
	icon: <List />,
	component: Changelog,
	children: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
	id: 'Private',
	path: '/private',
	component: ProtectedPage,
	children: null,
	guard: AuthGuard,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
	dashboardsRoutes,
	pagesRoutes,
	projectsRoutes,
	orderRoutes,
	OrdersRoutes,
	invoiceRoutes,
	tasksRoutes,
	calendarRoutes,
	componentsRoutes,
	chartRoutes,
	formsRoutes,
	tablesRoutes,
	iconsRoutes,
	mapsRoutes,
	documentationRoutes,
	changelogRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes using the Presentation layout
export const presentationLayoutRoutes = [landingRoutes];

// Routes that are protected
export const protectedRoutes = [protectedPageRoutes, dashboardsRoutes, pagesRoutes,];

// Routes visible in the sidebar
export const sidebarRoutes = [
	dashboardsRoutes,
	pagesRoutes,
	projectsRoutes,
	orderRoutes,
	OrdersRoutes,
	invoiceRoutes,
	tasksRoutes,
	calendarRoutes,
	authRoutes,
	componentsRoutes,
	chartRoutes,
	formsRoutes,
	tablesRoutes,
	iconsRoutes,
	mapsRoutes,
	documentationRoutes,
	changelogRoutes,
];
