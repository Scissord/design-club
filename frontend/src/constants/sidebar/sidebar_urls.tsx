import {
  IconHome,
  IconProduct,
  IconClients,
  IconSource,
  // IconArticle,
  // IconStorage
} from "@icons";

export const sidebar_urls = [
  {
    icon: <IconHome/>,
    label: 'Главная',
    path: '/'
  },
  {
    icon: <IconProduct/>,
    label: 'Номенклатура',
    path: '/products'
  },
  {
    icon: <IconClients/>,
    label: 'Клиенты',
    path: '/clients'
  },
  {
    icon: <IconSource/>,
    label: 'Источники',
    path: '/sources'
  },

  // {
  //   icon: <IconArticle/>,
  //   label: 'Артикулы',
  //   path: '/articles'
  // },
  // {
  //   icon: <IconStorage/>,
  //   label: 'Склад',
  //   path: '/storage'
  // },
];
