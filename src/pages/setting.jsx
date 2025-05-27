import '../style/setting.css'
import Avatar from '../assets/Avatar.jpg';
import AdminHeader from "../component/AdminHeader";

function AccountSettings(){
    return(
        <div className="account-settings">
            <AdminHeader label="Setting"/>
            <div className="profile-header">
                <img src={Avatar} alt="Profile" className="profile-img" />
                <div className="profile-info">
                    <h2>Ahamd Jibawi</h2>
                    <p>Accountant Management</p>
                </div>
            </div>

            <div className="settings-panels">
                <div className="edit-profile">
                    <h3>Edit Profile</h3>
                    <label>Name</label>
                    <input type="text" placeholder="Ahmad Jibawi" disabled />
                    <label>Email</label>
                    <input type="email" placeholder="ahmadjibawi@gmail.com" disabled />
                    <label>Address</label>
                    <input type="text" placeholder="Darul ulum lido..." />
                    <label>Bio</label>
                    <input type="text" placeholder="Bio" />
                </div>
                <div className="change-password">
                    <h3>Change Password</h3>
                    <label>Old Password</label>
                    <input type="password" placeholder="Old Password" />
                    <label>New Password</label>
                    <input type="password" placeholder="New Password" />
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="Confirm New Password" />
                </div>
            </div>

            <div className="action-buttons">
                <button className="cancel-btn">Cancel</button>
                <button className="save-btn">Save Changes</button>
            </div>
        </div>
    )
}

export default AccountSettings;