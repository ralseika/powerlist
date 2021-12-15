import { useEffect, useState } from "react";
import Day from "./Day";
import { v4 as uuidv4 } from "uuid";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

import SwiperCore, {
  Keyboard,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/core";
import moment from "moment";
SwiperCore.use([Keyboard, Pagination, Navigation, EffectCoverflow, Pagination]);

// const mockData: IDay[] = [
//   {id: 1, date: new Date(), tasks: [
//         {
//           id: 1,
//           name: "blabla",
//           checked: false
//         },

//         {
//           id: 1,
//           name: "blabla",
//           checked: false
//         },

//         {
//           id: 3,
//           name: "blabla",
//           checked: false
//         }
//   ] }
// ]

export interface IDay {
  id: string;
  date: string;
  tasks: ITask[];
}

export interface ITask {
  id: string;
  name: string;
  checked: boolean;
}

const LOCAL_STORAGE_KEY = "power-list-tasks";

export default function DayList() {
  const [taskDays, setTaskDays] = useState<IDay[]>([]);

  useEffect(() => {
    const storageDaysJson = localStorage.getItem(LOCAL_STORAGE_KEY);
    let storageDays: IDay[] = [];  
    if (storageDaysJson) {
      storageDays = JSON.parse(storageDaysJson);
    }
    if (storageDays.length > 0) {
      setTaskDays(storageDays);
    }
    if (storageDays.length === 0) {
      storageDays.push({ id: uuidv4(), date: moment().format("l"), tasks: [] });
      storageDays.push({
        id: uuidv4(),
        date: moment().add(1, "days").format("l"),
        tasks: [],
      });
      setTaskDays(storageDays);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskDays));
  }, [taskDays]);

  return (
    <Swiper
      effect={"coverflow"}
      navigation={true}
      simulateTouch={false}
      slidesPerView={2}
      spaceBetween={10}
      initialSlide={taskDays.length - 1}
      centeredSlides={true}
      className="mySwiper"
      breakpoints={{
        "1024": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      keyboard={{
        enabled: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 100,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      style={{ padding: "30px 0" }}
    >
      {taskDays.map((day) => (
        <SwiperSlide key={day.id}>
          <Day />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
