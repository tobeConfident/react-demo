import React, {Component} from 'react';
import { Table,Divider,Form,Switch } from 'antd';

const { Column } = Table;
const FormItem = Form.Item;

export const PAGE_ROUTE = "/users/list";

export default class UserList extends Component{
    state = {};

    render(){
        const data = [{
            key: '1',
            规则ID: 'FXQZH00002',
            产品线: '互联网商户',
            规则名称: '反洗钱规定2',
            执行类型: '实时',
            规则描述: '商户（个人账户）未留存有效身份证件的复印件等于P1，商户（个人账户）P2天内资金双边收付金额累计人民币大于等于P3元，阻断当前交易',
            控制点: '交易',
            风险类型: '套现',
            处罚方式: '暂停交易',
            创建人: '胡忠鹏',
            操作类型: '拒绝',
            是否开启处罚: '未处罚',
            创建时间: '2018-07-23 15:36:29',
            状态: '未启用',
            备注: '3',
            操作: ['详情', '修改']
        }, {
            key: '2',
            规则ID: 'FXQZH00002',
            产品线: '互联网商户',
            规则名称: '反洗钱规定2',
            执行类型: '实时',
            规则描述: '商户（个人账户）未留存有效身份证件的复印件等于P1，商户（个人账户）P2天内资金双边收付金额累计人民币大于等于P3元，阻断当前交易',
            控制点: '交易',
            风险类型: '套现',
            处罚方式: '暂停交易',
            创建人: '胡忠鹏',
            操作类型: '拒绝',
            是否开启处罚: '未处罚',
            创建时间: '2018-07-23 15:36:29',
            状态: '未启用',
            备注: '3',
            操作: ['详情', '修改']
        }, {
            key: '3',
            规则ID: 'FXQZH00002',
            产品线: '互联网商户',
            规则名称: '反洗钱规定2',
            执行类型: '实时',
            规则描述: '商户（个人账户）未留存有效身份证件的复印件等于P1，商户（个人账户）P2天内资金双边收付金额累计人民币大于等于P3元，阻断当前交易',
            控制点: '交易',
            风险类型: '套现',
            处罚方式: '暂停交易',
            创建人: '胡忠鹏',
            操作类型: '拒绝',
            是否开启处罚: '未处罚',
            创建时间: '2018-07-23 15:36:29',
            状态: '未启用',
            备注: '3',
            操作: ['详情', '修改']
        },
            {
                key: '4',
                规则ID: 'FXQZH00002',
                产品线: '互联网商户',
                规则名称: '反洗钱规定2',
                执行类型: '实时',
                规则描述: '商户（个人账户）未留存有效身份证件的复印件等于P1，商户（个人账户）P2天内资金双边收付金额累计人民币大于等于P3元，阻断当前交易',
                控制点: '交易',
                风险类型: '套现',
                处罚方式: '暂停交易',
                创建人: '胡忠鹏',
                操作类型: '拒绝',
                是否开启处罚: '未处罚',
                创建时间: '2018-07-23 15:36:29',
                状态: '未启用',
                备注: '3',
                操作: ['详情', '修改']
            },
            {
                key: '5',
                规则ID: 'FXQZH00002',
                产品线: '互联网商户',
                规则名称: '反洗钱规定2',
                执行类型: '实时',
                规则描述: '商户（个人账户）未留存有效身份证件的复印件等于P1，商户（个人账户）P2天内资金双边收付金额累计人民币大于等于P3元，阻断当前交易',
                控制点: '交易',
                风险类型: '套现',
                处罚方式: '暂停交易',
                创建人: '胡忠鹏',
                操作类型: '拒绝',
                是否开启处罚: '未处罚',
                创建时间: '2018-07-23 15:36:29',
                状态: '未启用',
                备注: '3',
                操作: ['详情', '修改']
            }];
        return (
            <div style={{width:'100%',backgroundColor:'#fff'}}>
                <Table dataSource={data}>
                    <Column
                        title="规则ID"
                        dataIndex="规则ID"
                        key="规则ID"
                    />
                    <Column
                        title="产品线"
                        dataIndex="产品线"
                        key="产品线"
                    />
                    <Column
                        title="规则名称"
                        dataIndex="规则名称"
                        key="规则名称"
                    />
                    <Column
                        title="执行类型"
                        dataIndex="执行类型"
                        key="执行类型"
                    />
                    <Column
                        title="规则描述"
                        dataIndex="tags"
                        key="tags"
                    />
                    <Column
                        title="控制点"
                        dataIndex="控制点"
                        key="控制点"
                    />
                    <Column
                        title="风险类型"
                        dataIndex="风险类型"
                        key="风险类型"
                    />
                    <Column
                        title="处罚方式"
                        dataIndex="处罚方式"
                        key="处罚方式"
                    />
                    <Column
                        title="创建人"
                        dataIndex="创建人"
                        key="创建人"
                    />
                    <Column
                        title="操作类型"
                        dataIndex="操作类型"
                        key="操作类型"

                    />
                    <Column
                        title="是否开启处罚"
                        dataIndex="是否开启处罚"
                        key="是否开启处罚"
                    />
                    <Column
                        title="创建时间"
                        dataIndex="创建时间"
                        key="创建时间"
                    />
                    <Column
                        title="状态"
                        dataIndex="状态"
                        key="状态"
                    />
                    <Column
                        title="备注"
                        dataIndex="备注"
                        key="备注"
                    />
                    <Column
                        title="操作"
                        key="操作"
                        render={() => (
                            <span>
                                <a href="javascript:;">详情</a>
                                <Divider type="vertical" />
                                <a href="javascript:;">修改</a>
                                <Divider type="vertical" />
                                <Form layout="inline">
                                    <FormItem>
                                        <Switch />
                                    </FormItem>
                                </Form>
                                <Divider type="vertical" />
                                <a href="javascript:;">元素流程图</a>
                            </span>
                            )}
                        />
                </Table>

            </div>
        );
    }
}
