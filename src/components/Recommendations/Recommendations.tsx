import { Card, CardContent, Typography, Icon, CardHeader, Box } from '@mui/material'
import Slider from "react-slick";
import { StickyNote } from 'lucide-react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Recommendations() {

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
    <Card variant="outlined">
      <CardHeader avatar={
        <Icon><StickyNote /></Icon>
       }
       title={
        <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', marginTop: 1.5 }}>
          Recommendations
        </Typography>
       }
       />
        <CardContent>
          <Slider {...settings}>
            {recommendations.map((rec, index) => (
              <Box key={index}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Box component="img"
                    src={rec.image}
                    alt="profile-img"
                    sx={{
                      width: 90,
                      height: 90,
                      borderRadius: 20,
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "bold", textAlign: "center" }}>{rec.name}</Typography>
                <Typography variant="subtitle2" sx={{ fontFamily: "Poppins, sans-serif", textAlign: "center" }}>{rec.position}</Typography>
                <Typography variant="caption" sx={{ fontFamily: "Poppins, sans-serif" }}>{rec.testimonial}</Typography>
              </Box>
            ))}
          </Slider>
        </CardContent>
    </Card>
  )
}
