import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { House, Video, Phone } from "lucide-react";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    "id": 1,
    "first_name": "გიორგი",
    "last_name": "ბერიძე",
    "profession": "პედიატრი",
    "phone": "+995 555 123 456",
    "gender": "მამრობითი",
    "about": "გამოცდილი პედიატრი, რომელიც ეწევა ბავშვთა ჯანმრთელობის პრობლემების მკურნალობას.",
    "clinic": "ბლუმედი",
    "comments": [],
  },
  {
    "id": 17,
    "first_name": "ელენე",
    "last_name": "სამხარაძე",
    "profession": "გინეკოლოგი",
    "phone": "+995 555 789 012",
    "gender": "მდედრობითი",
    "about": "გინეკოლოგი, რომელიც აქვს მრავალწლიანი გამოცდილება ქალთა ჯანმრთელობის სფეროში.",
    "clinic": "ბლუმედი",
    "comments": []
  },
  {
    "id": 19,
    "first_name": "ნიკოლოზ",
    "last_name": "ტატიშვილი",
    "profession": "გინეკოლოგი",
    "phone": "+995 555 901 234",
    "gender": "მამრობითი",
    "about": "გინეკოლოგი, რომელიც უზრუნველყოფს ქალთა რეპროდუქციული ჯანმრთელობის მკურნალობას.",
    "clinic": "ბლუმედი",
    "comments": []
  },
  {
    "id": 46,
    "first_name": "თამარ",
    "last_name": "მორგოშია",
    "profession": "ქირურგი",
    "phone": "+995 555 666 666",
    "gender": "მდედრობითი",
    "about": "ქირურგი, რომელიც სპეციალიზდება მრავალ სახის ქირურგიულ პროცედურებში.",
    "clinic": "ბლუმედი",
    "comments": []
  },
  {
    "id": 22,
    "first_name": "ზურაბ",
    "last_name": "მამუკაშვილი",
    "profession": "რეპროდუქტოლოგი",
    "phone": "+995 555 666 666",
    "gender": "მამრობითი",
    "about": "რეპროდუქტოლოგი სქესობრივი და რეპროდუქციული ჯანმრთელობის დარგში.",
    "clinic": "ბლუმედი",
    "comments": []
  },
  {
    "id": 62,
    "first_name": "მარიამ",
    "last_name": "კვარაცხელია",
    "profession": "ნეიროქირურგი",
    "phone": "+995 555 202 202",
    "gender": "მდედრობითი",
    "about": "ნეიროქირურგი, რომელიც კოორდინირებს და ახორციელებს სხვადასხვა სახის ნეიროქირურგიულ ოპერაციებს.",
    "clinic": "ბლუმედი",
    "comments": []
  },
  {
    "id": 73,
    "first_name": "გოჩა",
    "last_name": "კიკნაძე",
    "profession": "თერაპევტი",
    "phone": "+995 555 333 333",
    "gender": "მამრობითი",
    "about": "თერაპევტი, რომელიც მკურნალობს დაავადებებს და უზრუნველყოფს პაციენტების საერთო ჯანმრთელობის გაუმჯობესებას.",
    "clinic": "ბლუმედი",
    "comments": []
  },
  {
    "id": 51,
    "first_name": "ნინო",
    "last_name": "მამულაშვილი",
    "profession": "ფსიქოლოგი",
    "phone": "+995 555 111 111",
    "gender": "მდედრობითი",
    "about": "ფსიქოლოგი, რომელიც სპეციალიზდება ბავშვებთან და მოზრდილებთან ფსიქოლოგიურ კონსულტაციებში.",
    "clinic": "ბლუმედი",
    "comments": []
  },
  {
    "id": 40,
    "first_name": "ნიკოლოზ",
    "last_name": "მკვდრაძე",
    "profession": "ოფთალმოლოგი",
    "phone": "+995 555 101 010",
    "gender": "მამრობითი",
    "about": "ოფთალმოლოგი, რომელიც საუცხოო სამედიცინო მომსახურებას უწევს პაციენტებს.",
    "clinic": "ბლუმედი",
    "comments": []
  },
  {
    "id": 30,
    "first_name": "ალექსანდრე",
    "last_name": "საბაშვილი",
    "profession": "რეპროდუქტოლოგი",
    "phone": "+995 555 505 050",
    "gender": "მამრობითი",
    "about": "რეპროდუქტოლოგი, რომელიც სპეციალიზდება უშვილობის მკურნალობაში და განაყოფიერების ხელოვნური მეთოდების გამოყენებაში.",
    "clinic": "ბლუმედი",
    "comments": []
  }
];


const Doctor = () => {
  // creates a reference for the slider
  const sliderRef = useRef(null);
  // stores the scroll position
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    // function to store the scroll position before slide change
    const handleBeforeChange = () => {
      scrollPositionRef.current = window.scrollY;
    };

    // function to restore the scroll position after slide change
    const handleAfterChange = () => {
      window.scrollTo(0, scrollPositionRef.current);
    };

    if (sliderRef.current) {
      // pause the slider until all images are loaded
      sliderRef.current.slickPause();
      sliderRef.current.innerSlider.list.addEventListener('beforeChange', handleBeforeChange);
      sliderRef.current.innerSlider.list.addEventListener('afterChange', handleAfterChange);
      
      // activate autoplay when all images are loaded
      const images = document.querySelectorAll('.doctor-card img');
      let loadedImages = 0;
      
      const imageLoadHandler = () => {
        loadedImages++;
        if (loadedImages === images.length) {
          sliderRef.current.slickPlay();
        }
      };
      
      images.forEach(img => {
        if (img.complete) {
          imageLoadHandler();
        } else {
          img.addEventListener('load', imageLoadHandler);
        }
      });
      
      return () => {
        if (sliderRef.current && sliderRef.current.innerSlider && sliderRef.current.innerSlider.list) {
          sliderRef.current.innerSlider.list.removeEventListener('beforeChange', handleBeforeChange);
          sliderRef.current.innerSlider.list.removeEventListener('afterChange', handleAfterChange);
        }
        
        images.forEach(img => {
          img.removeEventListener('load', imageLoadHandler);
        });
      };
    }
  }, []);
  
  // slider settings
  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000, 
    pauseOnHover: true, 
    beforeChange: () => {
      scrollPositionRef.current = window.scrollY;
    },
    afterChange: () => {
      setTimeout(() => {
        window.scrollTo(0, scrollPositionRef.current);
      }, 0);
    }, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden m-auto bg-white rounded-2xl mt-10 py-12 px-7">
      <div className='flex flex-col md:flex-row gap-2 justify-between mb-10'>
        <h1 className="text-2xl font-poppins text-[#0b2849]">ექიმები</h1>
        <p className='text-lg text-[#00000080] font-poppins'>ხელმისაწვდომია 188 ექიმი</p>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {doctors.map(doctor => (
          <div key={doctor.id} className='pb-6'>
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctor;


