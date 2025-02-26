import React from "react";
import "./styles.css"; 
import Sidebar from "./Sidebar"; 

const customers = [
  { name: "Ahmet Aydın", username: "@ahmeta", role: "Customer", email: "ahmeta@example.com", avatar: "https://picsum.photos/40" },
  { name: "Ayşe Öztürk", username: "@ayseozturk", role: "General", email: "ayseozturk@example.com", avatar: "https://picsum.photos/40" },
  { name: "Ceyda Kara", username: "@ceydak", role: "Customer", email: "ceydak@example.com", avatar: "https://picsum.photos/40" },
  { name: "Faik Cambaz", username: "@faikcam", role: "Admin", email: "faikcam@example.com", avatar: "https://picsum.photos/40" },
  { name: "Metin Çetin", username: "@metcet", role: "Customer", email: "metcet@example.com", avatar: "https://picsum.photos/40" },
  { name: "Semiha Şahane", username: "@semsah", role: "Customer", email: "semsah@example.com", avatar: "https://picsum.photos/40" }
];

export default function CustomerDashboard() {
  return (
    <div>
     
      <Sidebar />

     
      <div className="dashboard-container">
       
        <div className="header-container">
          <h2>Customers</h2>
          <div>
            <button className="export-csv-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
  <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"/>
</svg>   Export CSV</button>
            <button className="invite-customer-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>  Invite Customer</button>
          </div>
        </div>

        <p className="subtitle">Find all platform customers here</p>

       
        <div className="cards-container">
          <div className="card">
            <p>General customers</p>
            <h3>11,450</h3>
            <p className="positive">+2.15%</p>
          </div>
          <div className="card">
            <p>Admins</p>
            <h3>812</h3>
            <p className="negative">-0.34%</p>
          </div>
          <div className="card">
            <p>Creators</p>
            <h3>83</h3>
            <p className="positive">+1.18%</p>
          </div>
        </div>
        
        <div className="info">
           <p>All Customers(12,345)</p>
        </div>

       
        <div className="actions-container">
          <div>
            <button className="btn">View all</button>
            <button className="btn">General</button>
            <button className="btn">Admin</button>
            <button className="btn">Creator</button>
          </div>

         {/*
         <div className="search-container">
            <input type="text" placeholder="Search" className="input" />
            <button className="btn">Filters</button>
          </div>
          
          */}
        </div>
         


        <table className="customers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Role</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index} className="table-row">
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="avatar"
                    />
                    <div>
                      <div className="name">{customer.name}</div>
                      <div className="username">{customer.username}</div>
                    </div>
                  </div>
                </td>
                <td>{customer.username}</td>
                <td>
                  <span className={`role ${customer.role.toLowerCase()}`}>{customer.role}</span>
                </td>
                <td>{customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}