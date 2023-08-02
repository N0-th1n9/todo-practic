import React, { useContext, useState } from 'react';
import styles from './MyLoginPanel.module.scss';
import { VisiblePanelsContext } from "../../../Providers/VisiblePanelsProvider";
import MySingButton from "../../UI/MySIngButton/MySingButton";
import { useForm } from "react-hook-form";
import MySwitchButton from "../../UI/MySwitchButton/MySwitchButton";
import MyAddButton from "../../UI/MyAddButton/MyAddButton";
import MyInputForm from "../MyInputForm/MyInputForm";

const MyLoginPanel = () => {
  const { visiblePanel, setVisiblePanel } = useContext(VisiblePanelsContext);
  const [sing, setSing] = useState({ singIn: true, singUp: false });

  const {
    register: registerSignIn,
    formState: { errors: errorsSignIn },
    handleSubmit: handleSubmitSignIn,
    watch: watchSignIn,
    reset: resetSingIn
  } = useForm({
    mode: 'onBlur',
  });

  const {
    register: registerSignUp,
    formState: { errors: errorsSignUp },
    handleSubmit: handleSubmitSignUp,
    watch: watchSignUp,
    reset: resetSingUp
  } = useForm({
    mode: 'onBlur',
  });

  const onSignInSubmit = (data) => {
    console.log('Sign In Form Data:', JSON.stringify(data));
  };

  const onSignUpSubmit = (data) => {
    console.log('Sign Up Form Data:', JSON.stringify(data));
  };

  const rootClasses = [styles.login_off];
  if (visiblePanel.loginPanel) {
    rootClasses.push(styles.login);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisiblePanel({ ...visiblePanel, loginPanel: false })}>
      <section className={styles.container} onClick={e => e.stopPropagation()}>
        <div className={styles.top}>
          <MySingButton
            onClick={() => {
              setSing({ singIn: true, singUp: false });
              resetSingIn()
            }}
            sing={sing.singIn}
          >
            Sing In
          </MySingButton>
          <MySingButton
            onClick={() => {
              setSing({ singIn: false, singUp: true });
              resetSingUp()
            }}
            sing={sing.singUp}
          >
            Sing Up
          </MySingButton>
        </div>
        <div className={styles.sing_wrapper}>
          <>
            <form
              className={sing.singIn ? styles.sing : [styles.sing, styles.singIn_hidden].join(' ')}
              id="singInForm"
              onSubmit={handleSubmitSignIn(onSignInSubmit)}
            >
              <MyInputForm
                type='email'
                name='EmailSingIn'
                label='Email'
                errors={errorsSignIn}
                register={registerSignIn('EmailSingIn', {
                  required: 'Email is required',
                  validate: {
                    maxLength: (v) =>
                      v.length <= 50 || "The email should have at most 50 characters",
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              <MyInputForm
                type='password'
                name='PasswordSingIn'
                label='Password'
                errors={errorsSignIn}
                register={registerSignIn('PasswordSingIn', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <div className={styles.switchBtn}>
                <MySwitchButton register={registerSignIn('singed')} />
                <span>Keep me signed in</span>
              </div>
              <div className={styles.sbmBtn}>
                <MyAddButton type='submit' form="singInForm" onClick={(e) => e.stopPropagation()}>
                  Go
                </MyAddButton>
              </div>
            </form>
          </>
          <>
            <form
              className={sing.singUp ? styles.sing : [styles.sing, styles.singUp_hidden].join(' ')}
              id="singUpForm"
              onSubmit={handleSubmitSignUp(onSignUpSubmit)}
            >
              <MyInputForm
                type='text'
                name='NameSingIn'
                label='Name'
                errors={errorsSignUp}
                register={registerSignUp('NameSingIn', {
                  required: 'Name is required',
                  validate: {
                    maxLength: (v) =>
                      3 <= v.length <= 20 || "The name should have more than 3 characters and at most 20 characters",
                    matchPattern: (v) =>
                      /^[a-zA-Z0-9]+$/.test(v) ||
                      "The name must contain only Latin letters and numbers",
                  },
                })}
              />
              <MyInputForm
                type='email'
                name='EmailSingUp'
                label='Email'
                errors={errorsSignUp}
                register={registerSignUp('EmailSingUp', {
                  required: 'Email is required',
                  validate: {
                    maxLength: (v) =>
                      v.length <= 50 || "The email should have at most 50 characters",
                    matchPattern: (v) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              <MyInputForm
                type='password'
                name='PasswordSingUp'
                label='Password'
                errors={errorsSignUp}
                register={registerSignUp('PasswordSingUp', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <MyInputForm
                type='password'
                name='Confirm_password_singUp'
                label='Confirm Password'
                errors={errorsSignUp}
                register={registerSignUp('Confirm_password_singUp', {
                  required: 'Password is required',
                  validate: (ps) => {
                    if (watchSignUp('PasswordSingUp') !== ps) {
                      return "Your passwords do not match";
                    }
                  },
                })}
              />
              <div className={styles.sbmBtn}>
                <MyAddButton type='submit' form="singUpForm" onClick={(e) => e.stopPropagation()}>
                  Go
                </MyAddButton>
              </div>
            </form>
          </>
        </div>
      </section>
    </div>
  );
};

export default MyLoginPanel;
