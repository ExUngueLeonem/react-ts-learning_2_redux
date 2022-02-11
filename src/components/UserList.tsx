import React, { FC, useEffect } from 'react';
import { useActions } from '../hook/useAction';
import { useTypedSelector } from '../hook/useTypedSelector';

const UserList :FC = () => {
    const {error, loading, users} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();

   useEffect(() => {
        fetchUsers()
    }, []);

    if (loading) {
        return <h1>Идет загрузка</h1>
    }
    if (error) {
        return <h1>Извините, произошла ошибка {error}</h1>
    }


    console.log(users)
    return (
        <div>
            {users.map( user => {
                return <div key={user.id}>{user.name}</div>
            })}
        </div>
    );
};

export default UserList;