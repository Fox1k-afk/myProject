import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { LoginContext } from '../../context/ProfileContext';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loginUser } from '../../store/slices/ActionCreators';
import LoginButton from './LoginButton';
import s from './LoginRegist.module.css';

const INITIAL_INPUT_VALUE = {
	username: 'mor_2314',
	password: '83r5^_',
};

const FORM_VALIDATION_SCHEMA = {
	username: Yup.string()
		.required('Login required')
		.min(4, 'should be 4 chars minimun'),

	password: Yup.string()
		.min(6, 'should be 6 chars minimum.')
		.required('Password required'),
};

const LoginForm = () => {
	const { close: loginClose } = useContext(LoginContext);
	const auth = useAppSelector((state) => state.auth);
	const [inpVal] = useState(INITIAL_INPUT_VALUE);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	console.log(auth);

	useEffect(() => {
		if (auth.Loggined) {
			loginClose();
			navigate('/parnyam');
		}
	}, [auth.Loggined, loginClose, navigate]);

	function LoginInput({ field, form: { errors } }: any) {
		return (
			<div>
				<input {...field} type='text' style={getStyles(errors, field.name)} />
				<ErrorMessage
					name={field.name}
					component={'div'}
					className=' text-red-700 mt-[5px]'
				/>
			</div>
		);
	}

	function PasswordInput({ field, form: { errors } }: any) {
		return (
			<div>
				<input {...field} type='password' style={getStyles(errors, field.name)} />
				<ErrorMessage
					name={field.name}
					component='div'
					className=' text-red-700 mt-[5px]'
				/>
			</div>
		);
	}

	function getStyles(errors: string, fieldName: string) {
		if (getIn(errors, fieldName)) {
			return {
				borderBottom: '1px solid red',
			};
		}
	}

	interface IValues {
		username: string;
		password: string;
	}
	function onSubmit(values: IValues) {
		console.log(JSON.stringify(values, null, 2));
		dispatch(loginUser(values));
	}

	return (
		<Formik
			initialValues={inpVal}
			validationSchema={Yup.object(FORM_VALIDATION_SCHEMA)}
			onSubmit={onSubmit}
		>
			<Form>
				<div className={s.modal__form_input}>
					<label className={s.custom_input}>
						Username
						<Field name='username' component={LoginInput} />
					</label>
				</div>

				<div className={s.modal__form_input}>
					<label className={s.custom_input}>
						Password
						<Field name='password' component={PasswordInput} />
					</label>
				</div>

				<LoginButton />
			</Form>
		</Formik>
	);
};

export default LoginForm;
