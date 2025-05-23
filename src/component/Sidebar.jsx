import '../style/sidebar.css'
import { Menu } from 'lucide-react';
import Logo from '../assets/Logo.png'
import { LayoutDashboard } from 'lucide-react';
import { Book } from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Users } from 'lucide-react';
import { Landmark } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { SquareKanban } from 'lucide-react';
import { useState } from 'react';


function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // submenu toggle

    const menuItems = [
        { icon: <LayoutDashboard className='menu-icon' />, label: 'Dashboard' },
        { 
            icon: <Book className='menu-icon' />,
            label: 'Modul utama',
            subMenu:[
                { label: 'Geolokasi' },
                { label: 'Orang' },
                { label: 'Kartu Keluarga' },
            ]
        },
        { icon: <Briefcase className='menu-icon' />, label: 'Kepegawaian' },
        { icon: <Users className='menu-icon' />, label: 'Users' },
        { icon: <Landmark className='menu-icon' />, label: 'Keuangan' },
        { icon: <GraduationCap className='menu-icon' />, label: 'Akademik' },
        { icon: <SquareKanban className='menu-icon' />, label: 'Utilitas' }
    ];

    return (
        <div className='sidebar-menu'>
            <div className='header'>
                <Menu className='humberger' />
                <img src={Logo} alt="Logo" />
            </div>

            <nav className='menu'>
                <ul>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <div
                                onClick={() => {
                                    setActiveIndex(index);
                                    if (item.subMenu) {
                                        setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
                                    } else {
                                        setOpenSubMenuIndex(null); // tutup submenu lain
                                    }
                                }}
                                className={activeIndex === index ? 'active' : ''}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '8px' }}
                            >
                                {item.icon}
                                <span style={{ marginLeft: '10px' }}>{item.label}</span>
                            </div>

                            {/*Render submenu jika ada dan aktif*/}
                            {item.subMenu && openSubMenuIndex === index && (
                                <ul className="submenu">
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="submenu-item">
                                            {subItem.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
export default Sidebar;
