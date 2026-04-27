import { Box } from '@mui/material'
import { MobileExperienceTitle, MobileExperienceContainer, MobileExperienceDataContainer, MobileExperienceTimelineBox, MobileExperienceTimelineStick, MobileExperienceTextContainer, MobileExperienceInactiveYear, MobileExperienceActiveYear, MobileExperienceName, MobileExperienceCompany } from './Style'
import { Building2 } from 'lucide-react'
import { useAppSelector } from "../../redux/hook/hook";

export default function MobileViewPort() {
    const { theme } = useAppSelector((state) => state.themeState)
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
                <Box sx={{...MobileExperienceTitle, color: theme === "dark" ? "#fff" : "black"}}>Experience</Box>
                <Box sx={MobileExperienceContainer}>
                    {
                        experiences.map((exp, key) => (
                            <Box key={key} sx={MobileExperienceDataContainer}>
                                <Box
                                    sx={{
                                        ...MobileExperienceTimelineBox,
                                        borderColor: exp.status === "inactive" ? theme === "dark" ? "#ccc" : "#ccc" : theme === "dark" ? "#ccc" : "black",
                                        backgroundColor: exp.status === "inactive" ? "#fff" : "black",
                                    }}
                                />
                                {key !== experiences.length - 0 && (
                                    <Box sx={MobileExperienceTimelineStick}/>
                                )}
                                <Box sx={MobileExperienceTextContainer}>
                                    <Box sx={{...MobileExperienceName, color: theme === "dark" ? "#fff" : "text.secondary"}}>{exp.name}</Box>
                                    <Box sx={exp.status === "inactive" ? {...MobileExperienceInactiveYear, color: theme === "dark" ? "#fff" : "text.secondary"} : MobileExperienceActiveYear}>{exp.year}</Box>
                                </Box>
                                <Box display="flex" gap={1} mt={1}>
                                    <Building2 size={16} color={theme === "dark" ? "#fff" : "grey"}/>
                                    <Box sx={{...MobileExperienceCompany, color: theme === "dark" ? "#fff" : "text.secondary"}}>{exp.company}</Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    )
}
