import React from "react";
import "./checkout.css";
import { useForm } from "react-hook-form";
import yandexImg from "../../assets/checkoutImg/image 38.png";
import paymeImg from "../../assets/checkoutImg/payme.jpg";
import mirImg from "../../assets/checkoutImg/image 9.png";
import visaImg from "../../assets/checkoutImg/image 10.png";
import masterCardImg from "../../assets/checkoutImg/image 11.png";

const Checkout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

//   no react number format was used for the phone number

  return (
    <div className="container b">
      <div className="checkout b">
        <p className="ОФОРМЛЕНИЕ-ЗАКАЗА">ОФОРМЛЕНИЕ ЗАКАЗА</p>
        <div className="checkout-box b">
          <div className="checkout-item-form b">
            <div className="item-form">
              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-left">
                  <label className="form-label">имя</label>
                  <input
                    className="form-input"
                    {...register("name", { required: true, maxLength: 25 })}
                    type="text"
                  />
                  <label className="form-label">Адрес</label>
                  <input
                    className="form-input"
                    {...register("address", { required: true })}
                    type="text"
                  />
                  <label className="form-label">страна</label>
                  <input
                    className="form-input"
                    {...register("country", { required: true })}
                    type="text"
                  />
                  <label className="form-label">почтовый индекс</label>
                  <input
                    className="form-input"
                    {...register("postcode", { required: true })}
                    type="email"
                  />
                </div>
                <div className="form-right">
                  <label className="form-label">Фамилия</label>
                  <input
                    className="form-input"
                    {...register("Surname", { required: true })}
                    type="text"
                  />
                  <label className="form-label">город</label>
                  <input
                    className="form-input"
                    {...register("city", { required: true })}
                    type="text"
                  />
                  <label className="form-label">штат / провинция</label>
                  <input
                    className="form-input"
                    {...register("State-province", { required: true })}
                    type="text"
                  />
                  <label className="form-label">номер телефона</label>
                  <input
                    className="form-input"
                    {...register("phone number", { required: true })}
                    type="number"
                  />
                </div>
              </form>
            </div>
            <div className="item-oplata b">
              <p className="oplata-text">оплата</p>
              <div className="oplata-images b">
                <div className="image">
                  <img
                    src={yandexImg}
                    className="payiconimg"
                    alt="pastdagi rasm"
                  />
                </div>
                <div className="image">
                  <img
                    src={paymeImg}
                    className="payiconimg"
                    alt="pastdagi rasm"
                  />
                </div>
                <div className="image">
                  <img
                    src={mirImg}
                    className="payiconimg"
                    alt="pastdagi rasm"
                  />
                </div>
                <div className="image">
                  <img
                    src={visaImg}
                    className="payiconimg"
                    alt="pastdagi rasm"
                  />
                </div>
                <div className="image">
                  <img
                    src={masterCardImg}
                    className="payiconimg"
                    alt="pastdagi rasm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-item-store b">
            <form className="totalForm" onSubmit={handleSubmit(onSubmit)}>
              <p className="totalOrder">итог заказа</p>
              <hr />
              <div className="totalForm-df">
                <p className="subjects">2 предмета</p>
                <p className="totalForm-costs">58$</p>
              </div>
              <div className="totalForm-df">
                <p className="subjects">Перевозка</p>
                <p className="totalForm-costs">5$</p>
              </div>
              <hr />
              <div className="totalForm-df">
                <p className="total">Итог</p>
                <p className="totalForm-costs">63$</p>
              </div>
              <hr />
              <div className="promoCode-Block">
                <p className="promoCodeText">
                  Введите код подарочного сертификата / промо-код
                </p>
                <div>
                  <input className="totalForm-input" type="text" />
                  <button class="useBtn">применять</button>
                </div>
              </div>

              <hr />
              <div className="totalForm-df">
                <p className="checkboxBtnText">
                  {" "}
                  <input
                    {...register("checkout", { required: true })}
                    type="checkbox"
                  />{" "}
                  Нажимая "Оформить заказ", я соглашаюсь с публичным договором
                  оферты{" "}
                </p>
              </div>
              <div className="totalForm-submit b">
                <button className="CheckoutBtn" type="submit">
                  Оформить заказ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

// Created by Ravshan
