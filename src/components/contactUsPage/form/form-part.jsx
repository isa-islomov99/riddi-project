import React from 'react';
import './form-part.css'

const FormPart = () => {
	return (
		<div class='big_inputs_container'>
			<form class='inputs_grid_container'>
				<span class='first_input_name_data'>Имя и фамилия</span>
				<input class='first_input' type='text' name='name' id='' />
				<span class='second_input_mail_data'>Электронная почта</span>
				<input class='second_input' type='text' name='gmail' id='' />
				<span class='third_input_number_data'>номер телефона</span>
				<input class='third_input' type='number' name='phone number' id='' />
				<span class='fourth_input_text'>Ваше сообщение</span>
				<input class='fourth_input' type='text' name='comment' id='' />
				<button class='contact_us_btn'>
					<span class='contact_us_btn_text'> Отправить</span>
				</button>
			</form>
		</div>
	);
};

export default FormPart;
