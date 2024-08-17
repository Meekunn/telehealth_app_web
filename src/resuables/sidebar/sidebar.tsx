import './Sidebar.css';
import SidebarItems from './SidebarItems';
import Items from '../sidebar/Sidebar.json';

function Sidebar(){
    return(
        <div className='mainSidebar'>
            <div className='sideContainer'>
                {/* <SidebarItems/> */}
                {Items.map((item, index) => <SidebarItems key ={index} item={item}/>)}
            </div>
            
        </div>
    )
}
export default Sidebar;

