import {useContext, useEffect} from "react";
import {VisibleMenu} from "../Providers/VisibleMenu";

const {setVisibleMenu} = useContext(VisibleMenu)

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 700) setVisibleMenu(false)
  };

  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [setVisibleMenu]);