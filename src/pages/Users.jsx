import AdminHeader from "../component/AdminHeader";
import Avatar from '../assets/Avatar.jpg';
import { Pencil } from 'lucide-react';
import '../style/users.css'


function Users(){
    const dataOrang = Array.from({ length: 20 }).map((_, i) => ({
        avatar: Avatar,
        nama: 'Ahmad Jibali',
        email: 'ahmadjibawi@gmail.com',
        password: 'sukabumi12345',
    }));

    return (
        <div className="Main-users" style={{ marginLeft:'280px', marginTop:'100px', display:'flex' }}>
            <AdminHeader label="Users"/>
            <div className="tabel-users-container">
                <table className="tabel-users">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Ubah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataOrang.map((orang, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={orang.avatar} alt="avatar" className="avatar-img" />
                                </td>
                                <td>{orang.nama}</td>
                                <td>{orang.email}</td>
                                <td>{btoa(orang.password)}</td>
                                <td>
                                    <button className="btn-ubah">
                                        <Pencil size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;