import React, { Fragment } from 'react';

const TableRow = props => {
    return (
        <Fragment>
            <tr className={'main-table-row'}>
                <th>{props.customer}</th>
                <th>{props.address}</th>
                <th>{props.city}</th>
                <th>{props.region}</th>
                <th>{props.shippingCost}</th>
            </tr>
        </Fragment>
    )
}

export default TableRow;