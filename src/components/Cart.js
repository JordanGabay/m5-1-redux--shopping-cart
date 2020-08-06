import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {getStoreItemArray} from '../reducers';
import CartItem from './CartItem';

const Cart = () => {
  const state = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);
  return (
    <Sidebar>
      <h2>Your Cart</h2>
      <span>1 item</span>
    {storeItems.map((item) => {
        return <CartItem item={item}/>
    })}
    </Sidebar>
  );
};

const Sidebar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: indigo;
  color: white;
  padding: 2rem;
`;


export default Cart;
