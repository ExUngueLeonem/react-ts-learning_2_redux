export interface UserState {
    users: UserItem[];
    loading: boolean;
    error: null | string;
}

interface UserItem {
address: { 
    city: string;
    street: string;
    suite: string;
    };
email: string;
id: 1;
name: string;
phone: string;
username: string;
website: string;
}

//написать тип для UserItem

export const enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersActionSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: UserItem[];
}

interface FetchUsersActionError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersActionSuccess | FetchUsersActionError;
