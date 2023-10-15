import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        // console.log(id);
        // mske sure user is confirmation
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('delete the user successfully');
                    // remove the user form the ui
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
            }
        })
    }
    return (
      <div>
        <h2>Users: {loadedUsers.length}</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user) => (
                  <tr key={user._id} className="bg-base-200">
                  <th>1</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>
                    <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users;