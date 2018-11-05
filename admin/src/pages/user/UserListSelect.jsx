import React, {Component} from 'react';
import { Menu, Dropdown, Button, Icon,Input,Form} from 'antd';

const FormItem = Form.Item;


export const PAGE_ROUTE = "/users/list";



export default class UserListSelect extends Component{
    state={};
    render(){
        const menu = (
            <Menu>
                <Menu.Item key="1">互联网商户</Menu.Item>
                <Menu.Item key="2">互联网商户</Menu.Item>
                <Menu.Item key="3">互联网商户</Menu.Item>
            </Menu>
        );
        return (
            <div style={{backgroundColor:'#fff',width:'100%',height:150,marginBottom:30}}>
                <span style={{marginLeft:10}}>产品线:</span>
                <Dropdown overlay={menu}>
                    <Button style={{ margin: '20px 50px 10px 10px' ,width:150 }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                <span>控制点:</span>
                <Dropdown overlay={menu}>
                    <Button style={{ margin: '20px 50px 10px 10px',width:150 }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                <span>风险类型:</span>
                <Dropdown overlay={menu}>
                    <Button style={{ margin: '20px 50px 10px 10px',width:150 }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                <span>状态：</span>
                <Dropdown overlay={menu}>
                    <Button style={{ margin: '20px 50px 10px 10px',width:150 }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                <Form layout="inline" style={{display:'inline-block',marginTop:20,marginLeft:10,verticalAlign:'top'}}>
                    <FormItem label="规则ID ">
                        <Input placeholder="请输入" style={{width:150}}/>
                    </FormItem>
                    <FormItem label="规则名称 " style={{marginLeft:12}}>
                        <Input placeholder="请输入"  style={{width:150}}/>
                    </FormItem>
                </Form>
                <span>是否开启处罚:</span>
                <Dropdown overlay={menu}>
                    <Button style={{ margin: '20px 50px 10px 18px',width:150,lineHeight:'default'}}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                <span style={{marginLeft:'-18px'}}>操作类型:</span>
                <Dropdown overlay={menu}>
                    <Button style={{ margin: '20px 50px 10px 10px',width:150,lineHeight:'default' }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                <Button style={{width:100,display:'block',float:'right',marginTop:20}}>添加</Button>
                <Button type="primary" style={{width:100,display:'block',float:'right',marginTop:20}}>查询</Button>
            </div>

        );
    }
}
