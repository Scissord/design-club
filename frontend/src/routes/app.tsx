import { lazy } from 'react';
import { CW } from '@components';
import { IRoute } from '@interfaces';

const HomePage = lazy(() => import('@pages/Home'));
const ArticlesPage = lazy(() => import('@pages/Articles'));
const ProductsPage = lazy(() => import('@pages/Products'));
const StoragePage = lazy(() => import('@pages/Storage'));

const AppRoutes: IRoute[] = [
  {
		path: "/",
		element: CW(HomePage),
		layout: "app",
		title: "Home",
	},
  {
		path: "/articles",
		element: CW(ArticlesPage),
		layout: "app",
		title: "Articles",
	},
  {
		path: "/products",
		element: CW(ProductsPage),
		layout: "app",
		title: "Products",
	},
  {
		path: "/storage",
		element: CW(StoragePage),
		layout: "app",
		title: "Storage",
	},
  // {
	// 	path: "/library",
	// 	element: CW(LibraryPage),
	// 	layout: "app",
	// 	title: "Library",
	// },
]



export default AppRoutes