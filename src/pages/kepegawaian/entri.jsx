import AdminHeader from "../../component/AdminHeader";
import { useNavigate } from 'react-router-dom';

function Entri(){
    const navigate = useNavigate();
    return(
        <div style={{ marginLeft:'280px', marginTop:'-350px' }}>
            <AdminHeader label="Kepegawaian"/>
            <div className="link-head">
                <button onClick={() => navigate('/kepegawaian')}>Daftar Pegawai</button>
                <button onClick={() => navigate('/entri')}>Entri</button>
                <button onClick={() => navigate('/laporan')}>Laporan</button>
                <button onClick={() => navigate('/pengaturan')}>Pengaturan</button>
            </div>
        </div>
    )
}

export default Entri;