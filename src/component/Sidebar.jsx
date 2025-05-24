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
import { Link } from 'react-router-dom';


function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null); // submenu toggle

    const menuItems = [
        { icon: <LayoutDashboard className='menu-icon' />, label: 'Dashboard', path: '/dashboard' },
        {
            icon: <Book className='menu-icon' />,
            label: 'Modul utama',
            subMenu: [
                { label: 'Geolokasi', path: '/geolokasi' },
                { label: 'Orang', path: '/orang' },
                { label: 'Kartu Keluarga', path: '/kartu-keluarga' },
            ]
        },
        { icon: <Briefcase className='menu-icon' />, label: 'Kepegawaian', path: '/kepegawaian' },
        { icon: <Users className='menu-icon' />, label: 'Users', path: '/users' },
        { icon: <Landmark className='menu-icon' />, label: 'Keuangan', path: '/keuangan' },
        { icon: <GraduationCap className='menu-icon' />, label: 'Akademik', path: '/akademik' },
        { icon: <SquareKanban className='menu-icon' />, label: 'Utilitas', path: '/utilitas' }
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
                                        setOpenSubMenuIndex(null);
                                    }
                                }}
                                className={activeIndex === index ? 'active' : ''}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '8px' }}
                            >
                                {item.path ? (
                                    <Link to={item.path} style={{ display: 'flex', alignItems: 'center', color: 'inherit', textDecoration: 'none' }}>
                                        {item.icon}
                                        <span style={{ marginLeft: '10px' }}>{item.label}</span>
                                    </Link>
                                ) : (
                                    <>
                                        {item.icon}
                                        <span style={{ marginLeft: '10px' }}>{item.label}</span>
                                    </>
                                )}
                            </div>

                            {/* Submenu */}
                            {item.subMenu && openSubMenuIndex === index && (
                                <ul className="submenu">
                                    {item.subMenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="submenu-item">
                                            <Link to={subItem.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                {subItem.label}
                                            </Link>
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
