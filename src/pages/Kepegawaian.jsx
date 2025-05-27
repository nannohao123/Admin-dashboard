import AdminHeader from "../component/AdminHeader";
import Avatar from '../assets/Avatar.jpg';
import '../style/kepegawaian.css';
import { Pencil } from 'lucide-react';
import { NotepadText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Kepegawaian() {
    const datakepegawaian = Array.from({ length: 20 }).map((_, i) => ({
        avatar: Avatar,
        nik: '012345678910',
        nama: 'Ahmad Jibali',
        kota: 'Kab. Sukabumi',
        tanggalLahir: '05 Feb 2022',
        alamat: 'Pesantren Darul Ulum Lido, Rt 009, rw 004, Bogor, Jawa Barat, blok 12',
    }));

    const navigate = useNavigate();

    return (
        <div className="Main-kepegawaian" style={{ marginLeft:'280px', marginTop:'100px' }}>
            <AdminHeader label="Kepegawaian" />
            <div className="link-head">
                <button onClick={() => navigate('/kepegawaian')}>Daftar Pegawai</button>
                <button onClick={() => navigate('/entri')}>Entri</button>
                <button onClick={() => navigate('/laporan')}>Laporan</button>
                <button onClick={() => navigate('/pengaturan')}>Pengaturan</button>
            </div>
            <div className="tabel-kepegawaian-container">
                <h1>Orang</h1>
                <table className="tabel-kepegawaian">
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
                        {datakepegawaian.map((kepegawaian, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={kepegawaian.avatar} alt="avatar" className="avatar-img" />
                                </td>
                                <td>{kepegawaian.nik}</td>
                                <td>{kepegawaian.nama}</td>
                                <td>{kepegawaian.kota}</td>
                                <td>{kepegawaian.tanggalLahir}</td>
                                <td>{kepegawaian.alamat}</td>
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

export default Kepegawaian;