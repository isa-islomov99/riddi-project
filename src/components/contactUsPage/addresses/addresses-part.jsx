import React from 'react';
import './addresses-part.css'

const AddressesPart = () => {
	return (
		<div className='text_container'>
			<p className='contact_text_header'>Связаться с нами</p>

			<span className='gmail'>Электронная почта</span>
			<span className='number'>номер телефона</span>
			<span className='address'>Адресc</span>
			<span className='occupation_time'>Режим работы</span>

			<span className='gmail_data'>riddi@mail.com</span>
			<span className='number_data'>
				+998 99 999-99-99,<br />
				+998 71 254-07-27
			</span>
			<span className='address_data'>
				100015, Узбекистан, Ташкент, ул.Чехова, д. 21-3. (Ориентир: Hi-Tech Bank)
			</span>
			<span className='occupation_time_data'>с 10:00 до 20:00, выходной воскресенье</span>
		</div>
	);
};

export default AddressesPart;
