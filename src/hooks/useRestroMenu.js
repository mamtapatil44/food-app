import React, { useEffect, useState } from 'react'
import { MENU_API } from '../utils/constants';

const useRestroMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        getMenuList();
    },[]);

    const getMenuList = async()=>{
        const data = await fetch(MENU_API+ resId);
        const json = await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestroMenu