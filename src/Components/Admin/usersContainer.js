import React, { useState } from 'react';
import tempMan from '../../Assets/accounts-assets/temp_man.jpg'
import Hero from '../Hero/Hero';

function UsersContainer() {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")))
    const handleChangeRole=  (e,i)=>{
        let array1=users
        array1[i].role=e.target.value;
        localStorage.setItem("users",JSON.stringify(array1));
        setUsers(array1)
    }

    const handleDeleteUser=(e,i)=>{
        let array1=users
        array1.splice(i,1);
        localStorage.setItem("users",JSON.stringify(array1));
        setUsers(array1)      
    }

    const badImage = (e)=>{
        e.target.onerror = null;
        e.target.src=tempMan
    }
    return (
        <>
            <Hero title="Users"/>
            <div className='usersContainer'>
                {users.map((user,indx)=>{
                    return <div className="admin-users-container" key={indx}>
                    <div >
                    <img src={user.img} alt={user.fname} onError={badImage}/>
                </div>
                <div>
                    {user.fname} {user.lname}
                </div>
                <div>
                    <h5>{user.email}</h5>
                </div>
                <div>
                    <label htmlFor="role">Role : </label>
                    <select value={user.role}  name="role" onChange={(e)=>handleChangeRole(e,indx)}>
                        <option value={user.role}>{user.role}</option>
                        <option value={user.role==="admin"? "user":"admin"}>{user.role==="admin"? "user":"admin"}</option>
                    </select>
                </div>
                <div>
                <button onClick={(e)=>handleDeleteUser(e,indx)}>Delete User</button>
                </div>
                </div>
                })}
            </div>
            </>
    )
}

export default UsersContainer