import AdminHeader from "../component/AdminHeader";
import Avatar from '../assets/Avatar.jpg';
import { Pencil } from 'lucide-react';
import '../style/kartukluarga.css'


function KartuKeluarga(){
    const dataOrang = Array.from({ length: 20 }).map((_, i) => ({
        avatar: Avatar,
        nama: 'Ahmad Jibali',
        tanggalTerbit: '05 Feb 2025',
    }));

    return (
        <div className="Main-KK" style={{ marginLeft:'280px', marginTop:'100px', display:'flex' }}>
            <AdminHeader label="Kartu Keluarga" />
            <div className="tabel-KK-container">
                <h1>Daftar Kartu Keluarga</h1>
                <table className="tabel-KK">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Name</th>
                            <th>Tanggal Terbit</th>
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
                                <td>{orang.tanggalTerbit}</td>
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

            <div className="tabel-KK-container">
                <h1>Anggota Kartu Keluarga</h1>
                <table className="tabel-KK">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Name</th>
                            <th>Tanggal Terbit</th>
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
                                <td>{orang.tanggalTerbit}</td>
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

export default KartuKeluarga;