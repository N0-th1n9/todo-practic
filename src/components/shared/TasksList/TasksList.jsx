import React from 'react';
import MyTask from "../../UI/MyTask/MyTask";
import './TasksList.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/swiper-bundle.min.css';

const TasksList = ({chooseFavorite, tasks, removeTasks}) => {
  return (
    <div className="tasks_container">
      <div className="btnShow_container">
        <button className="btnShow">show all</button>
      </div>
      <div className="tasks">
        {tasks.length
          ?
          <Swiper
            modules={[Navigation]}
            mousewheel={{
              sensitivity: 1,
            }}
            direction={'horizontal'}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide"
            }}
            breakpoints={{
              1300: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }}
          >
            {tasks.map((task, index) => (
              <SwiperSlide>
                <MyTask key={index} task={task} id={index} chooseFavorite={chooseFavorite}
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


    // <div className="tasks_container">
    //   <div className="btnShow_container">
    //     <button className="btnShow">show all</button>
    //   </div>
    //   <div className="tasks">
    //     <Swiper
    //       modules={[Navigation]}
    //       spaceBetween={50}
    //       slidesPerView={3}
    //     >
    //       {tasks.length
    //         ?
    //         <SwiperSlide>
    //           {tasks.map((task, index) => (
    //             <MyTask key={index} task={task} id={index} chooseFavorite={chooseFavorite} removeTasks={removeTasks}/>))}
    //         </SwiperSlide>
    //         :
    //         <h3>Tasks is not found</h3>}
    //     </Swiper>
    //   </div>
    //   <div className="btnNavContainer">
    //     <button className="btn_prevEl"></button>
    //     <button className="btn_nextEl"></button>
    //   </div>
    // </div>
  );
};

export default TasksList;