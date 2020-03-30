import {lazy, Suspense} from 'react';
const About =  lazy(() => import('@/pages/about')),
	NovelPage = lazy(() => import('@/pages/novelPage/indexPage'));
	//Home =  lazy(() => import('@/pages/index')),
	// import Home from '@/pages/index';
	// import About from '@/pages/about';
	// import NovelPage from '@/pages/novelPage/indexPage';

const routes = [
	
    {
        path: "/about",
        name: 'About',
        component: About
    },
    {
        path: "/novel",
        name: 'NovelPage',
        component: NovelPage
    }
];


export default routes;




//   ,
//     {
//       path: "/tacos",
//       component: Tacos,
//       routes: [
//         {
//           path: "/tacos/bus",
//           component: Bus
//         },
//         {
//           path: "/tacos/cart",
//           component: Cart
//         }
//       ]
//     }