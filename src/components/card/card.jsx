import React from "react";
import "./card.css";
import cardImg from "../../assets/cardImg/image 27 (3).png";

const Card = () => {
  return (
    <section className="container">
        <h1 class="section_title">Korzina</h1>
        <div class="section_card_box">
          <div class="cards_item">
            {/* <!-- card => map => --> */}
            <div class="card">
              <div class="card_img">
                <img src={cardImg} alt="img src ishlamayabti" class="cardImg" />
              </div>
              <div class="card_store">
                <p class="card_title">
                  Каролина с синими горизонтальными полосами
                </p>
                <p class="card_title">85$</p>
                <div class="button_group">
                  <div class="btn_group_btnPilusMinus">
                    <button class="btnPilusMinus">+</button>
                    <span class="btnPilusMinus">1</span>
                    <button class="btnPilusMinus">-</button>
                  </div>
                  <div>
                    <button class="btnDelete">Удалить x</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- card <= map --> */}

            {/* <!-- repeat card  --> */}
            <div class="card">
              <div class="card_img">
                <img src={cardImg} alt="img src ishlamayabti" class="cardImg" />
              </div>
              <div class="card_store">
                <p class="card_title">
                  Каролина с синими горизонтальными полосами
                </p>
                <p class="card_title">85$</p>
                <div class="button_group">
                  <div class="btn_group_btnPilusMinus">
                    <button class="btnPilusMinus">+</button>
                    <span class="btnPilusMinus">1</span>
                    <button class="btnPilusMinus">-</button>
                  </div>
                  <div>
                    <button class="btnDelete">Удалить x</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- repeat <= card --> */}
          </div>
          <div class="TotalOrders_item">
            <div class="b">
              {/* <!-- order products =>>> --> */}
              <div class="orders">
                <div class="d-flex">
                  <p class="order_title">Итог заказа</p>
                </div>
                <div class="d-flex">
                  <p class="order_text">2 продукта</p>
                  <p class="order_text">170$</p>
                </div>
                <div class="d-flex">
                  <p class="order_text">Перевозка</p>
                  <p class="order_text">0</p>
                </div>
                <div class="d-flex">
                  <p class="order_text">Скидка</p>
                  <p class="order_text">-30$</p>
                </div>
                <div class="d-flex line">
                  <h1></h1>
                </div>
                <div class="d-flex">
                  <p class="order_title">Итоговая цена</p>
                  <p class="order_text">140$</p>
                </div>
              </div>
              {/* <!-- order products <<<= --> */}
              <div class="order_buttons">
                <button class="btnrLeft">Продолжить покупки</button>
                <button class="btnrRight">Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Card;

// Created by Ravshan
