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
    const [activeIndex, setActiveIndex] = useState(0); // default item pertama aktif

    const menuItems = [
        { icon: <LayoutDashboard className='menu-icon' />, label: 'Dashboard' },
        { icon: <Book className='menu-icon' />, label: 'Modul utama' },
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
                <img src={Logo} alt="" />
            </div>

            <nav className='menu'>
                <ul>
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={activeIndex === index ? 'active' : ''}
                        >
                            {item.icon}{item.label}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}


export default Sidebar;