import { Typography, Box, Stack } from '@mui/material'
import { SwiperContainerMobile, ImageContainer, MobileImageStyle, ColleagueName, ColleaguePosition, ColleagueFeedback, MobileViewPortRecommendationTitle } from './Style';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useAppSelector } from '../../redux/hook/hook';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function MobileViewPort() {
  const { theme } = useAppSelector((state) => state.themeState)
  const recommendations = [
    {
      name: "Leonardo Victorio",
      position: "Web Content Manager",
      testimonial: "I had the privilege of working alongside James for several months, and I can confidently say that he is an exceptional programmer.He is not only highly skilled but also an excellent team player, always willing to offer his expertise and support to others. His positive attitude, strong work ethic, and attention to detail made him an asset to the team.",
      image: "/image/ace-img.png"
    },
    {
      name: "John Ree Vergara",
      position: "Solution Architect",
      testimonial: "I had the pleasure of working alongside James at our previous company,and I must say that he were an exceptional developer.His commitment to delivering excellence was evident in every aspect of his work.I have no doubt that he will continue to excel in his career as a developer and make significant contributions to any future projects he undertake.",
      image: "/image/bers-img.png"
    },
    {
      name: "Michael Antoni",
      position: "Senior Software Engineer",
      testimonial: "I witnessed his remarkable growth and commitment firsthand. he consistently exceeded my expectations, showcasing exceptional skills and making valuable contributions. I have no doubt that Neil will thrive in any endeavor.",
      image: "/image/mike-img.png"
    },
  ];

  return (
    <Box sx={{ height: 250, marginTop: 10 }}>
        <Box sx={{...MobileViewPortRecommendationTitle, color: theme === "dark" ? "#fff" : "black"}}>Recommendations</Box>
        <Box mt={5}>
            <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            style={{...SwiperContainerMobile, backgroundColor: theme === "dark" ? "black" : "#fff" }}
            className="mySwiper"
            >
            {recommendations.map((reco, idx) => (
                <SwiperSlide key={idx}>
                    <Stack spacing={1}>
                        <Box sx={ImageContainer}>
                            <Box component="img" src={reco.image} alt={`${reco.name}-image`} sx={MobileImageStyle}/>
                        </Box>
                        <Typography variant="body1" sx={{...ColleagueName, color: theme === "dark" ? "#fff" : "black" }}>{reco.name}</Typography>
                        <Typography variant="body2" sx={{...ColleaguePosition, color: theme === "dark" ? "#fff" : "black" }}>{reco.position}</Typography>
                        <Typography variant="body2" sx={{...ColleagueFeedback, color: theme === "dark" ? "#fff" : "black" }}>"{reco.testimonial}"</Typography>
                    </Stack>
                </SwiperSlide>
            ))}
        </Swiper>
        </Box>
     </Box>
  )
}
