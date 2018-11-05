import React, {Component} from 'react';
import UserListSelect from './UserListSelect';
import UserList from "./UserList";

export const PAGE_ROUTE = "/users/list";



export default class Index extends Component{
    render(){
        return (
           <div>
               <UserListSelect/>
               <UserList />
           </div>
        );
    }
}
