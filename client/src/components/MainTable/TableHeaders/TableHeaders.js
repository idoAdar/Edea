import React from 'react';

import './TableHeaders.css';

const TableHeaders = () => {
    return (
        <tr className={'main-table-header'}>
            <th>Customer</th>
            <th>Address</th>
            <th>City</th>
            <th>Region</th>
            <th>Shipping Cost</th>
        </tr>
    )
}

export default TableHeaders;