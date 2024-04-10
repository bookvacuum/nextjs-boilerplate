"use client";
import { ReactNode } from "react";
import { store } from "./p2p/store";
import { Provider } from "react-redux";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default CartProvider;
