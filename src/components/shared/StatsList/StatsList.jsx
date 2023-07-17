import React from 'react';
import styles from './StatsList.module.scss';

const StatsList = ({stats, name}) => {
  return (
    <section className={styles.stats_wrapper}>
      <div className={styles.stats_title}>
        <h3>Stats</h3>
        <p>{name}</p>
      </div>
      <div className={styles.stats_blocks}>
        {stats.map((stat, index) =>
          <div className={styles.stats_block} key={index}>
            <span>{stat.Count}</span>
            <p>{stat.Name}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsList;