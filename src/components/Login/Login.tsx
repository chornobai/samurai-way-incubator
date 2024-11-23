import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../Form/FormControls/Forms_Controls";
import {
  maxlenghtCreator,
  requiredField,
} from "../../utils/validators/validators";
import { connect } from "react-redux";
import { LoginTC } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import s from "../Form/FormControls/FormControl.module.css";
import { getAuthSelector, getCaptchaSelector } from "../../redux/selectors";

// Типы пропсов для Login
export type LoginPropsType = {
  isAuth: boolean;
  captcha: string | null;
  LoginTC: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: any
  ) => void;
};

// Компонент Login
const Login: React.FC<LoginPropsType> = React.memo((props) => {
  const onSubmit = (formData: any) => {
    props.LoginTC(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to={"profile"} />;
  }

  return (
    <section>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
    </section>
  );
});

// Типы пропсов для LoginForm
type LoginFormPropsType = {
  captcha: string | null;
};

const LoginForm: React.FC<
  LoginFormPropsType & InjectedFormProps<{}, LoginFormPropsType>
> = (props) => {
  const max40 = maxlenghtCreator(40);

  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        type="email"
        name="email"
        placeholder={"email"}
        component={Input}
        validate={[requiredField]}
      />
      <Field
        type="password"
        name="password"
        placeholder={"password"}
        component={Input}
        validate={[requiredField]}
      />
      <label htmlFor="rememberMe">
        <Field type="checkbox" name="rememberMe" component={Input} /> remember
        me
      </label>
      {props.captcha && <img src={props.captcha} alt="Captcha" />}
      {props.captcha && (
        <Field
          type="text"
          name="captcha"
          placeholder="Enter captcha"
          component={Input}
          validate={[requiredField]}
        />
      )}
      <div className={s.formControl_common_error}>{props.error}</div>
      <button type={"submit"}>Login</button>
    </form>
  );
};

// Обертывание в reduxForm
const LoginReduxForm = reduxForm<{}, LoginFormPropsType>({
  form: "login",
})(LoginForm);

// mapStateToProps
type mapStateToPropsType = {
  isAuth: boolean;
  captcha: string | null;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: getAuthSelector(state),
    captcha: getCaptchaSelector(state),
  };
};

export default connect(mapStateToProps, { LoginTC })(Login);
