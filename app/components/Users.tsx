import React from "react";

const Users = async () => {
    const users = await getUsers();

    return (
        <div className="w-96 m-10 bg-yellow-200 flex justify-center items-center dark:bg-black dark:text-yellow-300">
            <ul className="space-y-4 mt-8">
                {users.map((user) => (
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export async function getUsers() {
    const response = await fetch("http://localhost:4000/user");
    const users = await response.json();
    return users;
}

export default Users;
