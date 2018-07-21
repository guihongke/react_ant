import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '路线管理',
    icon: 'dashboard',
    path: 'busline',
    children: [
      {
        name: '路线管理',
        path: 'line',
      },
      {
        name: '巴士管理',
        path: 'bus',
      },
      {
        name: '地点管理',
        path: 'place',
      }
    ],
  },
  {
    name: '订单管理',
    icon: 'dashboard',
    path: 'order',
    children: [
      {
        name: '测试页',
        path: 'analysis',
      },
      {
        name: '测试页2',
        path: 'monitor',
      }
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
