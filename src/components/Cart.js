import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {getStoreItemArray} from '../reducers';
import CartItem from './CartItem';
import StoreItem from './StoreItem';

const Cart = () => {
  const state = useSelector((state) => state);
  const storeItems = useSelector(getStoreItemArray);
  return (
    <Sidebar>
      <h2>Your Cart</h2>
      <span>Items</span>
    {storeItems.map((item) => {
        return <CartItem item={item}/>
    })}
    <TotalPrice>Total: {StoreItem}</TotalPrice>
    <Purchase>Purchase</Purchase>
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

const Purchase = styled.button`
  height: 40px;
  width: 120px;
  padding: 0.5rem;
  font-size: 1rem;
  color: white;
  background-color: red;
  border-radius: 10px;
  border: none;
`;

const TotalPrice = styled.span`

`

export default Cart;
