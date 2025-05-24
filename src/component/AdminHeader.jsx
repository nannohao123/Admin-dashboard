import Avatar from '../assets/Avatar.jpg'
import { useState } from 'react';
import '../style/AdminHeader.css'
import { useNavigate } from 'react-router-dom';


function AdminHeader({ label }) {
    const [isOpen, setIsOpem] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpem(!isOpen)
    }

    const handleLogout =() => {
        navigate('/');
    }

    return (
        <div className="main-head">
            <h1 style={{ fontSize: '50px', marginTop: '10px', marginLeft: '40px', marginRight: '40px', color:'black' }}>{label}</h1>
            <input type="text"
                style={{
                    height: '60px',
                    width: '900px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    border: 'none',
                    marginTop: '10px',
                    color: 'black',
                    paddingLeft: '20px',
                    fontSize: '18px',
                    marginRight: '40px'
                }}
                placeholder="Cari data disini"
            />
            <div className='user-dropdown' onClick={toggleDropdown}>
                <img 
                    src={Avatar} 
                    alt="avatar" 
                    className='avatar' 
                    
                    />
                <div className='users'>
                    <p>Ahmad Jibawi</p>
                    <p style={{ color:'grey' }}>Teacher</p>
                </div>
                {isOpen && (
                    <div className='dropdown-menu'>
                        <div className='user-info'>
                            <img src={Avatar} alt="Avatar" className="dropdown-avatar" />
                            <div>
                                <p className="name">Ahmad Jibawi</p>
                                <p className="role" >Teacher</p>
                            </div>
                        </div>
                        <hr />
                        <div className='button-drop'>
                            <button className="dropdown-button">Setting</button>
                            <button className="dropdown-button" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminHeader