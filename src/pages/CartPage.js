import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';

function CartPage() {
    const { cartItems } = useSelector(state => state.cartReducer)
    const [totalAmount, setTotalAmount] = useState(0)
    const dispatch = useDispatch();

    const placed = () => {
        alert('Your Order is Placed');
    }

    useEffect(() => {
        let temp = 0;
        cartItems.forEach((cartItem) => {
            temp = temp + cartItem.price
        })
        setTotalAmount(temp)
    }, [cartItems]);


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    }, [cartItems])


    const deleteFromCart = (product) => {
        dispatch({ type: 'DELETE_FROM_CART', payload: product });
    }

    return <Layout>

        <table className='table mt-3'>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(item => {
                    return <tr>
                        <td>
                            <img src={item.imageURL} height="80" width="80"></img>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td><FaTrash onClick={() => deleteFromCart(item)} /></td>
                    </tr>
                })}
            </tbody>
        </table>

        <div className='d-flex justify-content-end'>
            <h1 className='total-amount'>Total Amount ={totalAmount} RS/-</h1>
        </div>
        <div className='d-flex justify-content-end mt-3'>
            <button onClick={placed}>PLACE ORDER</button>
        </div>
    </Layout>;
}

export default CartPage;
