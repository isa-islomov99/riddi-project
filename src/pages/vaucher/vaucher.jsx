import React from "react";
import "./vaucher.css";
import { useForm } from "react-hook-form";
import vaucherImg from "../../assets/vaucherImg/image 44 (3).png";
const Vaucher = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // the format of the reaction number was not used to enter the amount
  
  return (
    <div className="container">
      <div className="vaucher">
        <p className="vaucher-title">Подарочный сертификат</p>
        <div>
          <p className="vaucher-text">
            Подарок для кого-то особенного? Или даже твой босс? Ответ -
            подарочная карта Riddi - мы создадим учетную запись для получателя и
            зачислим сумму в баллы лояльности
          </p>
          <div className="vaucher-box">
            <div className="img-item">
              <img src={vaucherImg} className="img-vaucher" />
            </div>
            <div className="pay-item">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="vaucher-form b"
              >
                <label className="form-label">ВАШЕ ИМЯ *</label>
                <input
                  className="form-input"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <label className="form-label">ИМЯ ПОЛУЧАТЕЛЯ *</label>
                <input
                  className="form-input"
                  {...register("received name", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                <label className="form-label">
                  Электронная почта получателя *
                </label>
                <input
                  className="form-input"
                  {...register("email", { required: true })}
                />
                <label className="form-label">СООБЩЕНИЕ *</label>
                <input
                  className="form-input-message"
                  type="text"
                  {...register("message")}
                />
                <label className="form-label">сумма *</label>
                <div className="pay-send">
                  <div className="send-cost">
                    <input
                      className="form-input-cost"
                      type="number"
                      {...register("cost", { required: true })}
                    />
                    <span className="form-label-cost-text">сум</span>
                  </div>
                  <button type="submit" className="submit-btn">
                    добавить в корзину
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaucher;

// Created by Ravshan
