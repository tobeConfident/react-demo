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
            <div style={{backgroundColor:'#fff',width:'100%',height:100,marginBottom:10}}>
                产品线： <Dropdown overlay={menu}>
                    <Button style={{ marginRight: 50,width:150 }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                控制点： <Dropdown overlay={menu}>
                    <Button style={{ marginRight: 50,width:150 }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                风险类型： <Dropdown overlay={menu}>
                    <Button style={{ marginRight: 50,width:150 }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                状态： <Dropdown overlay={menu}>
                    <Button style={{ marginRight: 50,width:150 }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                <Form layout="inline" style={{display:'inline-block',marginTop:20}}>
                    <FormItem label="规则ID">
                        <Input placeholder="请输入"/>
                    </FormItem>
                    <FormItem label="规则名称">
                        <Input placeholder="请输入"/>
                    </FormItem>
                </Form>
                是否开启处罚： <Dropdown overlay={menu}>
                    <Button style={{ marginRight: 50,width:150,marginTop:20,lineHeight:'default' }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                操作类型: <Dropdown overlay={menu}>
                    <Button style={{ marginRight: 50,width:150,marginTop:20,lineHeight:'default' }}>
                        <span style={{marginRight:50}}>全部</span>
                        <Icon type="down" />
                    </Button>
                </Dropdown>
                <Button type="primary" style={{width:100,display:'block',float:'right',marginTop:20}}>查询</Button>
            </div>

        );
    }
}
