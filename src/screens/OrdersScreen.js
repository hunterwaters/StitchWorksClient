import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {saveOrder, listOrders, deleteOrder} from '../actions/orderActions';
import { Link } from 'react-router-dom';

function OrdersScreen (props) {

    const orderList = useSelector(state => state.orderList)
    const {loading, orders, error} = orderList

    
    const orderDelete = useSelector(state=>state.orderDelete);
    const {loading: loadingDelete, success: successDelete, error: errorDelete} = orderDelete;
    const dispatch = useDispatch();

    useEffect(() => {
      
        dispatch(listOrders())
        return () => {
            //
        }
    }, [successDelete])
    
    const deleteHandler = (order) => {
        dispatch(deleteOrder(order._id))
    }

    
    return  loading? <div>Loading...</div> :
    <div className = "content content-margined">
        <div className = "order-header">
            <h3>Orders</h3>
        </div>
        
        <div className = "orderList">
            <table className = "table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>
                        <th>DELIVERED AT</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => ( <tr key ={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.isPaid.toString()}</td>
                        <td>{order.paidAt}</td>
                        <td>{order.paidAt}</td>
                        <td>{order.isDelivered.toString()}</td>
                        <td>{order.deliveredAt}</td>
                        <td>
                            <Link to = {"/order/" + order._id } className = "button">Details</Link>
                            {' '}
                            <button type = "button" onClick ={() => deleteHandler(order)} className = "button">Delete</button>
                        </td>
                    </tr> ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default OrdersScreen;