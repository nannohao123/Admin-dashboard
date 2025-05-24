import Sidebar from "./Sidebar";
import Layout from "./Layout";
import { Outlet } from "react-router-dom";

function LayoutWrapper(){
    return(
        <div className="app-container" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Layout>
          <Outlet /> {/* Ini akan render route child */}
        </Layout>
      </div>
    </div>
    )
}

export default LayoutWrapper;