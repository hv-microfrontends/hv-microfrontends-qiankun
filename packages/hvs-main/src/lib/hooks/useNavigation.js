import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getActivePath } from "lib/utils/navigation";

const useNavigation = (navigation = []) => {
  const { pathname } = useLocation();
  const initialPath = getActivePath(pathname, navigation);
  const [activePath, setActivePath] = useState(initialPath);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const path = getActivePath(pathname, navigation);
    setActivePath(path);
  }, [pathname, navigation]);

  const toggleOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  return { activePath, isOpen, setIsOpen, toggleOpen };
};

export default useNavigation;
