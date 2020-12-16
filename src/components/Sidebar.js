import React from 'react';
import './Sidebar.css';
import {
    Add,
    Apps,
    BookmarkBorder,
    Create,
    Drafts, ExpandLess,
    FiberManualRecord, FileCopy,
    Inbox,
    InsertComment,
    PeopleAlt
} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Amjad Mohammad</h2>
                    <h3>
                        <FiberManualRecord/>Amjad mohammad
                    </h3>
                </div>
                <Create/>
            </div>
            <SidebarOption Icon={InsertComment} title='Threads' />
            <SidebarOption Icon={Inbox} title='Mentions & reactions'/>
            <SidebarOption Icon={Drafts} title='Saved items'/>
            <SidebarOption Icon={BookmarkBorder} title='Channel browser'/>
            <SidebarOption Icon={PeopleAlt} title='People & user groups'/>
            <SidebarOption Icon={Apps} title='Apps'/>
            <SidebarOption Icon={FileCopy} title='File browser'/>
            <hr/>
            <SidebarOption Icon={ExpandLess} title='Show less'/>
            <hr/>
            <SidebarOption Icon={Add} title='Add Channel' />
        </div>
    );
}

export default Sidebar;
