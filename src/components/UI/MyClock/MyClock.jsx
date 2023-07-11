import React, {useEffect, useState} from 'react';
import styles from './MyClock.module.scss'

const MyClock = () => {
  const date = new Date()
  const [time, setTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear()
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date();
      setTime({
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds(),
        day: date.getDay(),
        month: date.getMonth(),
        year: date.getFullYear()
      });
    }, 1000);
  });

  const formatTime = (value) => {
    return value < 10 ? '0' + value : value;
  };

  const clock = `${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}`;
  const calendar = `${formatTime(time.day)}.${formatTime(time.month)}.${time.year}`;

  return (
    <div className={styles.clock}>
      <span>{clock}</span>
      <span>{calendar}</span>
    </div>
  );
};

export default MyClock;