import UTILS, {  } from './Utils.js';

const
	steps = {
		1: [
			{name: 'Моб телефон', field: 'PHONE', defaultValue: '', type: 'text'},
			{name: 'Название компании', field: 'COMPANY', defaultValue: '', type: 'text'},
			{name: 'ИНН', field: 'INN_NUM', defaultValue: '', type: 'text'},
			{name: 'Фамилия', field: 'SURNEME', defaultValue: '', type: 'text'},
			{name: 'Имя', field: 'NAME', defaultValue: '', type: 'text'},
			{name: 'Отчество', field: 'SECOND_NAME', defaultValue: '', type: 'text'},
			{name: 'Эл почта', field: 'EMAIL', defaultValue: '', type: 'text'},
		],
		2: [
			{name: 'Паспорт руководителя', field: 'CHIEF_PASSPORT', defaultValue: '', type: 'file'},
			{name: 'Паспорт учредителя', field: 'OWNER_PASSPORT', defaultValue: '', type: 'file'},
			{name: 'ИНН', field: 'INN', defaultValue: '', type: 'file'},
			{name: 'ОГРН', field: 'OGRN', defaultValue: '', type: 'file'},
			{name: 'Эл архив ИФНС', field: 'IFNS', defaultValue: '', type: 'file'},
		],
		3: [
			{name: 'Устав', field: 'ORDER', defaultValue: '', type: 'file'},
			{name: 'Протокол', field: 'RECORD', defaultValue: '', type: 'file'},
			{name: 'Сведения об учредителях', field: 'OWNER_INFO', defaultValue: '', type: 'file'},
			{name: 'Фин отчетность', field: 'FINANCE', defaultValue: '', type: 'file'},
			{name: 'СНИЛС', field: 'SNILS', defaultValue: '', type: 'file'},
		]
	},
	initialState = {
		STEP: 1,
		ERRORS: {},
	};

/* ... . .-. --. . / --.. .... ..- .-. .- ...- .-.. . ...- */
	
const CONSTANTS = {
	steps,
	initialState,
};

export {
	steps,
	initialState,
};

export default CONSTANTS;