import React, {useContext, useState} from 'react';
import styles from './MyLoginPanel.module.scss'
import {VisiblePanelsContext} from "../../../Providers/VisiblePanelsProvider";
import MySingButton from "../../UI/MySIngButton/MySingButton";
import {useForm} from "react-hook-form";
import MySwitchButton from "../../UI/MySwitchButton/MySwitchButton";
import MyAddButton from "../../UI/MyAddButton/MyAddButton";
import MyInputForm from "../MyInputForm/MyInputForm";

const MyLoginPanel = () => {
  const {visiblePanel, setVisiblePanel} = useContext(VisiblePanelsContext)
  const [sing, setSing] = useState({singIn: true, singUp: false})

  const {
    register,
    formState: {errors},
    handleSubmit,
    watch,
    setError,
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  const rootClasses = [styles.login_off]
  if (!visiblePanel.loginPanel) {
    rootClasses.push(styles.login)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisiblePanel({...visiblePanel, loginPanel: false})}>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)} onClick={e => e.stopPropagation()}>
        <div className={styles.top}>
          <MySingButton
            onClick={() => {
              setSing({singIn: true, singUp: false})
              // reset()
            }}
            sing={sing.singIn}
          >Sing In
          </MySingButton>
          <MySingButton
            onClick={() => {
              setSing({singIn: false, singUp: true})
              // reset()
            }}
            sing={sing.singUp}
          >Sing Up
          </MySingButton>
        </div>
        <div className={styles.sing_wrapper}>
          <section className={sing.singIn ? styles.sing : [styles.sing, styles.singIn_hidden].join(' ')}>
            <MyInputForm
              type='email'
              name='EmailSingIn'
              label='Email'
              errors={errors}
              register={register('EmailSingIn', {
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
              errors={errors}
              register={register('PasswordSingIn', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters"
                },
              })}
            />
            <div className={styles.switchBtn}>
              <MySwitchButton register={register('singed')}/>
              <span>Keep me singed in</span>
            </div>
            <div className={styles.sbmBtn}>
              <MyAddButton type='submit'>
                Go
              </MyAddButton>
            </div>
          </section>
          <section className={sing.singUp ? styles.sing : [styles.sing, styles.singUp_hidden].join(' ')}>
            <MyInputForm
              type='text'
              name='NameSingIn'
              label='Name'
              errors={errors}
              register={register('NameSingIn', {
                required: 'Name is required',
                validate: {
                  maxLength: (v) =>
                    3 <= v.length <= 20 || "The name should have more 3 characters and at most 20 characters",
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
              errors={errors}
              register={register('EmailSingUp', {
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
              errors={errors}
              register={register('PasswordSingUp', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters"
                },
              })}
            />
            <MyInputForm
              type='password'
              name='Confirm_password_singUp'
              label='Confirm Password'
              errors={errors}
              register={register('Confirm_password_singUp', {
                required: 'Password is required',
                validate: (ps) => {
                  if (watch('PasswordSingUp') !== ps) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            <div className={styles.sbmBtn}>
              <MyAddButton type='submit'>
                Go
              </MyAddButton>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default MyLoginPanel;