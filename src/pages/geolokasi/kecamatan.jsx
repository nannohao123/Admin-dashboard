import AdminHeader from '../../component/AdminHeader';
import Avatar from '../../assets/Avatar.jpg'
import '../../style/g-provinsi.css'
import { Pencil } from 'lucide-react';
import { NotepadText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Kecamatan() {
    const dataProvinsi = Array.from({ length: 20 }).map((_, i) => ({
        avatar: Avatar,
        nik: '012345678910',
        nama: 'Ahmad Jibali',
        kota: 'Kab. Sukabumi',
        tanggalLahir: '05 Feb 2022',
        alamat: 'Pesantren Darul Ulum Lido, Rt 009, rw 004, Bogor, Jawa Barat, blok 12',
    }));

    const navigate = useNavigate();

    return (
        <div className="Main-Provinsi" style={{ marginLeft:'280px', marginTop:'100px' }}>
            <AdminHeader label="Geolokasi" />
            <div className="link-head">
                <button onClick={() => navigate('/geolokasi')}>Negara</button>
                <button onClick={() => navigate('/provinsi')}>Provinsi</button>
                <button onClick={() => navigate('/kota')}>Kota</button>
                <button onClick={() => navigate('/kecamatan')}>Kecamatan</button>
                <button onClick={() => navigate('/kelurahan')}>Kelurahan</button>
                <button onClick={() => navigate('/alamat')}>Alamat</button>
            </div>
            <div className="tabel-Provinsi-container">
                <h1>Kecamatan</h1>
                <table className="tabel-Provinsi">
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>NIK</th>
                            <th>Name</th>
                            <th>Kota</th>
                            <th>Tanggal Lahir</th>
                            <th>Alamat</th>
                            <th>Surat</th>
                            <th>Ubah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataProvinsi.map((Provinsi, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={Provinsi.avatar} alt="avatar" className="avatar-img" />
                                </td>
                                <td>{Provinsi.nik}</td>
                                <td>{Provinsi.nama}</td>
                                <td>{Provinsi.kota}</td>
                                <td>{Provinsi.tanggalLahir}</td>
                                <td>{Provinsi.alamat}</td>
                                <td>
                                    <button className="btn-ubah">
                                        <NotepadText size={18} />
                                    </button>
                                </td>
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

export default Kecamatan;