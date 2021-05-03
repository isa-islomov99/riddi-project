import React from "react";
import "./emptyCard.css";
import emptyCardImg from "../../assets/emptyCardImg/Union.png";

const EmptyCard = () => {
  return (
    <div className="container">
      <div className="emptyCard">
        <p className="emptyTitle">Ваша корзина пуста</p>
        <div className="emptyImg-item">
          <img src={emptyCardImg} className="empatyImg" />
        </div>
        <p className="emptyText">Продолжить покупку</p>
      </div>
    </div>
  );
};

export default EmptyCard;

// Created by Ravshan
