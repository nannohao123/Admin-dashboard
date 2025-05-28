import AdminHeader from "../component/AdminHeader";
import { Pencil } from 'lucide-react';
import { SquareDashed } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { Download } from 'lucide-react';
import '../style/keuangan.css'


function keuangan(){
    const dataOrang = Array.from({ length: 20 }).map((_, i) => ({
        nama: 'ahmad jibawi',
        tanggal: '05 November 2024',
        kategoriPembayaran: 'Bayar Nihai',
        metodePembayaran: 'BCA Virtual Account',
    }));

    return (
        <div className="Main-keuangan" style={{ marginLeft:'280px', marginTop:'100px' }}>
            <AdminHeader label="keuangan"/>
            <div className="tabel-keuangan-container">
                <div className="header-keuangan">
                    <h1>Daftar Transaksi</h1>
                    <button className="btn-kategori">
                        <SlidersHorizontal/>
                        Kategori
                    </button>
                </div>
                <table className="tabel-keuangan">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Nama</th>
                            <th>tanggal transaksi</th>
                            <th>kategori transaksi</th>
                            <th>Metode bayar</th>
                            <th>Download data</th>
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
                                <td>{orang.nama}</td>
                                <td>{orang.tanggal}</td>
                                <td>{orang.kategoriPembayaran}</td>
                                <td>{orang.metodePembayaran}</td>
                                <td>
                                    <button className="btn-ubah">
                                        <Download size={18} />
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

export default keuangan;