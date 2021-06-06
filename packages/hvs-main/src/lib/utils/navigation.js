export const getActivePath = (pathname, navigation) => {
  let activePath;

  navigation.forEach(item => {
    const hasPath = pathname?.includes(item.path);

    if (hasPath) {
      activePath = item.data ? getActivePath(pathname, item.data) : { ...item };
    }
  });

  return activePath;
};

export const isTopLevel = (path, navigation) => {
  return !!navigation.find(item => item.path === path);
};

export const getFirstLevel = navigation =>
  navigation.map(item => ({ ...item, data: null }));
