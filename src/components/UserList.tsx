import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hook/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';

const UserList :FC = () => {
    const {error, loading, users} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

   useEffect(() => {
        dispatch(fetchUsers())
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