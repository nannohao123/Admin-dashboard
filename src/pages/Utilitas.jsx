import AdminHeader from "../component/AdminHeader";
import { Pencil } from 'lucide-react';
import { SquareDashed } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import '../style/utilitas.css'


function Utilitas(){
    const dataOrang = Array.from({ length: 20 }).map((_, i) => ({
        nomor: '001',
        tanggal: '05 Agustus 2024',
        kategorisurat: 'Surat Contoh',
        tentang: 'Pesantren Darul Ulum Lido',
        pembuat: 'ahmad',
    }));

    return (
        <div className="Main-utilitas" style={{ marginLeft:'280px', marginTop:'100px' }}>
            <AdminHeader label="Utilitas"/>
            <div className="tabel-utilitas-container">
                <div className="header-utilitas">
                    <h1>Daftar Surat</h1>
                    <button className="btn-kategori">
                        <SlidersHorizontal/>
                        Kategori
                    </button>
                </div>
                <table className="tabel-utilitas">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Nomor</th>
                            <th>tanggal</th>
                            <th>kategorisurat</th>
                            <th>Pembuat</th>
                            <th>Ubah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataOrang.map((orang, index) => (
                            <tr key={index}>
                                <td>
                                    <button className="btn-ubah">
                                        <SquareDashed size={18} />
                                    </button>
                                </td>
                                <td>{orang.nomor}</td>
                                <td>{orang.tanggal}</td>
                                <td>{orang.kategorisurat}</td>
                                <td>{orang.pembuat}</td>
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

export default Utilitas;