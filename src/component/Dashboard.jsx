import Sidebar from '../component/Sidebar.jsx'
import AdminHeader from '../component/AdminHeader.jsx'

function Dashboard() {
  const contentItems = [
    { tittle: 'Guru', color: 'skyblue' },
    { tittle: 'Guru', color: 'salmon' },
    { tittle: 'Guru', color: 'lightgreen' },
    { tittle: 'Guru', color: 'gold' }
  ]

  return (
    <div style={{ padding: '40px', display: 'flex' }}>
      <Sidebar />
      <div className='main-content'>
        <AdminHeader label='Dashboard' />
        <div className='d-info' style={{ marginLeft: '15px', display: 'flex' }}>
          {contentItems.map((item,index) =>(
            <ContentCard key={index} tittle={item.tittle} color={item.color} />
          ))}
        </div>
        <div className='d-data' style={{ 
          marginLeft: '45px',
          marginTop:'30px',
          height:'250px',
          backgroundColor:'white',
          color:'black',
          padding:'10px',
          borderRadius:'20px',
          width:'950px'
          }}>
          <h1>Data</h1>
        </div>
      </div>
    </div>
  );
}

function ContentCard({ tittle, color }) {
  return (
    <div style={{
      height: '150px',
      width: '200px',
      marginLeft: '30px',
      backgroundColor: color,
      padding:'10px',
      borderRadius:'20px'
    }}>
      <h2>{tittle}</h2>
    </div>
  )
}

export default Dashboard;
