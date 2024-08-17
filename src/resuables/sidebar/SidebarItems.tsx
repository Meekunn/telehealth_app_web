import{useState} from "react"

interface SidebarItem {
    title: string;
    childrens?: SidebarItem[];
    icon :string;
    path?: string;
    progress?: number; 
}

export default function SidebarItems({item} : {item: SidebarItem}){

    const [open, setOpen] = useState(false)
    if (item.childrens){
        return(
            <div className={open ? "sidebar-Item open" :"sidebar-Item"}>
                <div className="sidebar-tittle">
                    <span>
                        {item.icon && <i className = {item.icon}></i>}
                        {item.title}
                    </span>
                    <i className="bi bi-chevron-down toggle-btn" onClick = {()=>setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    {item.childrens.map((child,index) => <SidebarItems key={index}item={child}/>)} 
                </div>
            </div>
        )
    }else{
        return(
            < a href={item.path ||"#"} className = "sidebar-Item plain">
                {item.icon && <i className = {item.icon}></i>}
                {item.title}
            </a>               
    
        )
    }

    
}