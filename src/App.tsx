import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <div className="App">
      <div className="app">
        <h1>Bank App</h1>
        <h2>{amount}$</h2>
        <div className="buttons">
          <button className="dep" onClick={() => depositMoney(1000)}>
            Deposit
          </button>
          <button className="with" onClick={() => withdrawMoney(500)}>
            Withdraw
          </button>
          <button className="bank" onClick={() => bankrupt()}>
            Bankrupt
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
