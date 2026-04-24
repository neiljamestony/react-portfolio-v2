import { Box } from '@mui/material'
import { MobileExperienceTitle, MobileExperienceContainer, MobileExperienceDataContainer, MobileExperienceTimelineBox, MobileExperienceTimelineStick, MobileExperienceTextContainer, MobileExperienceInactiveYear, MobileExperienceActiveYear, MobileExperienceName, MobileExperienceCompany } from './Style'

export default function MobileViewPort() {
    const experiences = [
        {
            name: "Software Engineer",
            status: "active",
            company: "Accenture Inc.",
            year: "Present"
        },
        {
            name: "Frontend Developer",
            status: "inactive",
            company: "i4One Inc.",
            year: "2022"
        },
        {
            name: "Web Developer",
            status: "inactive",
            company: "Aktus Global Management",
            year: "2019"
        },
        {
            name: "BS Computer Science",
            status: "inactive",
            company: "St. Clare College of Caloocan",
            year: "2019"
        },
        {
            name: "Hello World! 👋🏻",
            status: "inactive",
            company: "Wrote my first line of code",
            year: "2018"
        }
    ]
    return (
        <Box mb={5}>
            <Box sx={{ height: 450 }}>
                <Box sx={MobileExperienceTitle}>Experience</Box>
                <Box sx={MobileExperienceContainer}>
                    {
                        experiences.map((exp, key) => (
                            <Box key={key} sx={MobileExperienceDataContainer}>
                                <Box
                                    sx={{
                                        ...MobileExperienceTimelineBox,
                                        borderColor: exp.status === "inactive" ? "#ccc" : "black",
                                        backgroundColor: exp.status === "inactive" ? "#fff" : "black",
                                    }}
                                />
                                {key !== experiences.length - 0 && (
                                    <Box sx={MobileExperienceTimelineStick}/>
                                )}
                                <Box sx={MobileExperienceTextContainer}>
                                    <Box sx={MobileExperienceName}>{exp.name}</Box>
                                    <Box sx={exp.status === "inactive" ? MobileExperienceInactiveYear : MobileExperienceActiveYear}>{exp.year}</Box>
                                </Box>
                                <Box sx={MobileExperienceCompany}>{exp.company}</Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
