import {NavLink, useLoaderData, useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {FC} from "react";

type SideBarItemProps = {
    highlightPath:string,
    translationkey: string,
    icon:React.ReactElement
}

export const SideBarItem:FC<SideBarItemProps>  =({highlightPath,translationkey,icon})=>{
    const navigate = useNavigate()
    const location = useLocation()


    const highlightIfSelected = (path:string)=>{
        if(location.pathname.includes(path)){
            return 'bg-gray-700'
        }
        return ''
    }
    return   <li className="sidebar">
        <NavLink to={highlightPath} className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700 h-20">
            {icon}
            <span className="ml-3">{translationkey}</span>
        </NavLink>
    </li>
}
