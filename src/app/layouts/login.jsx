import { useEffect } from 'react';
import { useState } from 'react';
import TextField from '../components/text-field';
import { validator } from '../utils/validator';
const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({});

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setError(errors);
    return Object.keys(error).length === 0;
  };

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Электронная почта введена некорректно' },
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: {
        message: 'Введите заглавную букву',
      },
      isContainDigit: {
        message: 'Введите цифру',
      },
      min: {
        message: 'Больше 8 символов',
        value: 8,
      },
    },
  };

  const isValid = !Object.keys(error).length === 0;

  useEffect(() => {
    validate();
  }, [data]);

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) console.log('good');
  };
  return (
    <form action='' onSubmit={handleSubmit}>
      <TextField
        type={'text'}
        label='Почта'
        name='email'
        value={data.email}
        onChange={handleChange}
        error={error.email}
      />
      <TextField
        type={'password'}
        label='Пароль'
        name='password'
        value={data.password}
        onChange={handleChange}
        error={error.password}
      />
      <button type='submit' disabled={isValid}>
        Отправить
      </button>
    </form>
  );
};

export default Login;
