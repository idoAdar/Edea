import React from 'react';

import StatisticHeaders from './StatisticHeaders/StatisticHeaders';
import { Table } from 'react-bootstrap';

const StatisticTable = props => {
    return (
        <Table>
            <thead>
                <StatisticHeaders />
            </thead>
            <tbody>
                <tr>
                    <th>{props.statistic.totalOrders}</th>
                    <th>{Number(props.statistic.total_shippingCost).toFixed(2)}</th>
                    <th>{Number(props.statistic.shippingCost_average).toFixed(2)}</th>
                </tr>
            </tbody>
        </Table>
    )
}

export default StatisticTable;