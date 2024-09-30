import { lazy } from 'react';
import { CW } from '@components';
import { IRoute } from '@interfaces';

const HomePage = lazy(() => import('@pages/Home'));
const CardPage = lazy(() => import('@pages/Card'));
const UserPage = lazy(() => import('@pages/User'));
const ProductsPage = lazy(() => import('@pages/Products'));
const ClientsPage = lazy(() => import('@pages/Clients'));
const SourcesPage = lazy(() => import('@pages/Sources'));
// const ArticlesPage = lazy(() => import('@pages/Articles'));
// const StoragePage = lazy(() => import('@pages/Storage'));

const AppRoutes: IRoute[] = [
  {
		path: "/",
		element: CW(HomePage),
		layout: "app",
		title: "Home",
	},
  {
		path: "/cards/:id",
		element: CW(CardPage),
		layout: "app",
		title: "Deal",
	},
  {
    path: "/users/:id",
		element: CW(UserPage),
		layout: "app",
		title: "User",
  },
  {
		path: "/products",
		element: CW(ProductsPage),
		layout: "app",
		title: "Products",
	},
  {
		path: "/clients",
		element: CW(ClientsPage),
		layout: "app",
		title: "Clients",
	},
  {
		path: "/sources",
		element: CW(SourcesPage),
		layout: "app",
		title: "Sources",
	},
  // {
	// 	path: "/articles",
	// 	element: CW(ArticlesPage),
	// 	layout: "app",
	// 	title: "Articles",
	// },
  // {
	// 	path: "/storage",
	// 	element: CW(StoragePage),
	// 	layout: "app",
	// 	title: "Storage",
	// },
];

export default AppRoutes;
