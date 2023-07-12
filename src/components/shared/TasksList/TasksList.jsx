import React from 'react';
import MyTask from "../../UI/MyTask/MyTask";
import './TasksList.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Grid} from 'swiper';
import 'swiper/swiper-bundle.min.css';

const TasksList = ({chooseFavorite, tasks, removeTasks, favTasks}) => {
  const swiperParams = favTasks ?
    {
      modules: [Navigation, Grid],
      spaceBetween: 30,
      slidesPerView: 2,
      autoHeight: false,
      navigation: {
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide"
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        440: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        551: {
          slidesPerView: 2,
          spaceBetween: 15,
          grid: {
            rows: 1
          }
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    }
    :
    {
      modules: [Navigation, Grid],
      spaceBetween: 30,
      slidesPerView: 2,
      autoHeight: false,
      navigation: {
        nextEl: ".button-next-slide",
        prevEl: ".button-prev-slide"
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          grid: {
            rows: 3
          }
        },
        440: {
          slidesPerView: 2,
          spaceBetween: 15,
          grid: {
            rows: 2
          }
        },
        551: {
          slidesPerView: 2,
          spaceBetween: 15,
          grid: {
            rows: 1
          }
        },
        850: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    };

  return (
    <div className="tasks_container">
      <div className="btnShow_container">
        <button className="btnShow">show all</button>
      </div>
      <div className={favTasks ? "tasks fav_tasks" :"tasks"}>
        {tasks.length
          ?
          <Swiper {...swiperParams}>
            {tasks.map((task, index) => (
              <SwiperSlide key={index}>
                <MyTask task={task} id={index} chooseFavorite={chooseFavorite}
                        removeTasks={removeTasks}/>
              </SwiperSlide>))}

            <div className="btnNavContainer">
              <button className="button-prev-slide"></button>
              <button className="button-next-slide"></button>
            </div>
          </Swiper>
          :
          <h3>Tasks is not found</h3>}
      </div>
    </div>
  )
    ;
};

export default TasksList;