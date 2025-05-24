import Sidebar from '../component/Sidebar.jsx'
import AdminHeader from '../component/AdminHeader.jsx'
import { User } from 'lucide-react';
import { Presentation } from 'lucide-react';
import { Building } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Calendar } from 'lucide-react';

function Dashboard() {
  const contentItems = [
    { tittle: 'Santri', color: '#FAC0C6', icon: <User className='static-icon' />, dCount: '5,000', fontColor: '#83575C', bColor: '#FA5A7D' },
    { tittle: 'Guru', color: '#F5D99F', icon: <Presentation className='static-icon' />, dCount: '1,500', fontColor: '#6E634D', bColor: '#FF947A' },
    { tittle: 'Pegawai', color: '#B6F5CB', icon: <Building className='static-icon' />, dCount: '6,000', fontColor: '#52765E', bColor: '#3CD856' },
    { tittle: 'Alumni', color: '#DDBEFF', icon: <GraduationCap className='static-icon' />, dCount: '200,000', fontColor: '#6B5D79', bColor: '#BF83FF' }
  ]

  const upcomingEvents = [
    { icon: <Calendar className='static-icon' />, eName: 'Khutbatul arsy', dName: '02 July, 10:30 AM' },
    { icon: <Calendar className='static-icon' />, eName: 'Spartcom', dName: '02 July, 10:30 AM' },
    { icon: <Calendar className='static-icon' />, eName: 'Wisuda', dName: '02 July, 10:30 AM' }
  ]

  return (
    <div style={{ padding: '40px', display: 'flex', marginTop:'-100px', marginLeft:'-50px'}}>
      <div className='main-content'>
        <div style={{ }}>
          <AdminHeader label='Dashboard'/>
        </div>
        <div className='contents' style={{ display: 'flex', marginTop:'50px' }}>
          <div className='info-left'>
            <div className='d-info' style={{ marginLeft: '15px', display: 'flex' }}>
              {contentItems.map((item, index) => (
                <ContentCard
                  key={index}
                  tittle={item.tittle}
                  color={item.color}
                  icon={item.icon}
                  dCount={item.dCount}
                  fontColor={item.fontColor}
                  bColor={item.bColor}
                />
              ))}
            </div>
            <div className='d-data' style={{
              marginLeft: '45px',
              marginTop: '30px',
              height: '350px',
              backgroundColor: 'white',
              color: 'black',
              padding: '10px',
              borderRadius: '20px',
              width: '950px'
            }}>
              <h1>Data</h1>
            </div>
          </div>
          <div className='info-right'>
            <div className='calender' style={{
              width: '422px',
              marginLeft: '40px',
              borderRadius: '20px',
              height: '260px',
              color: 'black',
              backgroundColor: 'white',
              padding: '20px',
            }}>
              <h1>Calender</h1>
            </div>
            <div className='event' style={{
              width: '460px',
              height: '200px',
              marginLeft: '40px',
              marginTop: '28px'
            }}>
              <div className='top-event' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginTop: '-30px', color: 'black', marginBottom: '-20px' }}>
                <h2>Upcoming Event</h2>
                <p style={{ textDecoration: 'underline', cursor: 'pointer' }}>See all</p>
              </div>
              {upcomingEvents.map((item, index) => (
                <EventDetails
                  key={index}
                  icon={item.icon}
                  eName={item.eName}
                  dName={item.dName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentCard({ tittle, color, icon, dCount, fontColor, bColor }) {
  return (
    <div style={{
      height: '160px',
      width: '200px',
      marginLeft: '30px',
      backgroundColor: color,
      padding: '10px',
      borderRadius: '20px'
    }}>
      <div style={{
        color: 'white',
        borderRadius: '28px',
        padding: '10px',
        width: '30px',
        height: '30px',
        paddingLeft: '17px',
        paddingTop: '17px',
        marginTop: '5px',
        marginLeft: '10px',
        backgroundColor: bColor
      }}>
        {icon}
      </div>
      <h2 style={{ color: fontColor, marginLeft: '10px', }}>{dCount}</h2>
      <h3 style={{ color: fontColor, fontWeight: 'normal', marginTop: '-15px', fontSize: '15px', marginLeft: '10px', }}>{tittle}</h3>
    </div>
  )
}

function EventDetails({ icon, eName, dName }) {
  return (
    <div className='eventdetails' style={{
      padding: '10px',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '12px'
    }}>
      <div style={{
        padding: '5px',
        marginRight: '15px',
        marginLeft: '10px',
        paddingLeft: '8px',
        paddingRight: '8px',
        borderRadius: '10px',
        backgroundColor: '#E6DEFF',
        color: '#BF83FF'
      }}>
        {icon}
      </div>
      <div className='' style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'black'
      }}>
        <span style={{ fontSize:'15px'}}>{eName}</span>
        <span style={{ fontSize: '12px', color: '#B9B9B9' }}>{dName}</span>
      </div>
    </div>
  )
}

export default Dashboard;
