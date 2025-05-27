import AdminHeader from "../component/AdminHeader";
import Avatar from '../assets/Avatar.jpg';
import '../style/orang.css';
import { Pencil } from 'lucide-react';



function Orang() {
    const dataOrang = Array.from({ length: 20 }).map((_, i) => ({
        avatar: Avatar,
        nik: '012345678910',
        nama: 'Ahmad Jibali',
        kota: 'Kab. Sukabumi',
        tanggalLahir: '05 Feb 2022',
        alamat: 'Pesantren Darul Ulum Lido, Rt 009, rw 004, Bogor, Jawa Barat, blok 12',
    }));

    return (
        <div className="Main-orang" style={{ marginLeft:'280px', marginTop:'100px' }}>
            <AdminHeader label="Orang" />
            <div className="tabel-orang-container">
                <table className="tabel-orang">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>NIK</th>
                            <th>Name</th>
                            <th>Kota</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                            <th>Ubah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataOrang.map((orang, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={orang.avatar} alt="avatar" className="avatar-img" />
                                </td>
                                <td>{orang.nik}</td>
                                <td>{orang.nama}</td>
                                <td>{orang.kota}</td>
                                <td>{orang.tanggalLahir}</td>
                                <td>{orang.alamat}</td>
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

export default Orang;