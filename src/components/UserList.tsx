import React, { FC } from 'react';
import { useTypedSelector } from '../hook/useTypedSelector';

const UserList :FC = () => {
    const state = useTypedSelector(state => state.user);
    console.log(state);

    return (
        <div>
            UserList
        </div>
    );
};

export default UserList;