import { Card, CardContent, Typography, Box, Icon, CardHeader } from '@mui/material'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import { BriefcaseBusiness } from 'lucide-react'
import { HeaderTitle, ExperienceName, ExperienceContainer, ExperienceCompany, YearContainer, Year } from './Style';

export default function Experience() {
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
    <Card variant="outlined" sx={{ height: 588 }}>
        <CardHeader avatar={
              <Icon><BriefcaseBusiness /></Icon>
          }
          title={
              <Typography gutterBottom variant="h6" component="div" sx={HeaderTitle}>
              Experience
              </Typography>
          }
          />
        <CardContent>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {
                experiences.map((exp, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot variant={exp.status === "active" ? "filled" : "outlined"} 
                        sx={{ backgroundColor: exp.status === "active" ? "black" : "none", borderColor: exp.status === "active" ? "black" : "grey" }}
                      />
                      {index + 1 !== experiences.length && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent >
                      <Typography variant="subtitle2" sx={ExperienceName}>{exp.name}</Typography>
                      <br/>
                      <Box sx={ExperienceContainer}>
                        <Typography variant="body1" sx={ExperienceCompany}>{exp.company}</Typography>
                        <Box sx={YearContainer}>
                          <Typography variant="caption" sx={Year}>
                            {exp.year}
                          </Typography>
                        </Box>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                ))
              }
            </Timeline>
        </CardContent>
    </Card>
  )
}
