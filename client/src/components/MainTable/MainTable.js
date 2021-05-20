import React, { Fragment } from 'react';

import TableRow from './TableRow/TableRow';
import TableHeaders from './TableHeaders/TableHeaders';
import { Table } from 'react-bootstrap';
import './MainTable.css';

const MainTable = props => {
    return (
        <Fragment>
            <Table>
                <thead>
                    <TableHeaders />
                </thead>
                <tbody>
                    {props.orders.map(record => {
                        return <TableRow key={record.OrderId} 
                        customer={record.Customer}
                        address={record.Address}
                        city={record.City}
                        region={record.Region}
                        shippingCost={record.ShippingCost}/>
                    })}
                </tbody>        
            </Table>
        </Fragment>
    )
}

export default MainTable;