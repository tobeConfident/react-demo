import React, {Component} from 'react';
import UserListSelect from './UserListSelect';
import UserList from "./UserList";

export const PAGE_ROUTE = "/users/list";



export default class Index extends Component{
    // state={
    //     titleData:[]
    // };
    // componentDidMount(){
    //     const res = {
    //         data:{
    //             titleData:['产品线','控制点','风险类型','状态']
    //         }
    //     };
    //     const {titleData} = res.data;
    //     this.setState = ({titleData:titleData});
    // };
    render(){
        return (
           <div>
               <UserListSelect style={{margin:10}}/>
               <UserList />
           </div>
        );
    }
}
