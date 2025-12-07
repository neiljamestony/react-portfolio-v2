import { Card, CardContent, Typography, Box, Icon, CardHeader } from '@mui/material'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Timeline, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import { BriefcaseBusiness } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      name: "Software Engineer",
      status: "active",
      company: ["Accenture Inc."],
      year: "Present"
    },
    {
      name: "Frontend Developer",
      status: "inactive",
      company: ["i4One Inc."],
      year: "2022"
    },
    {
      name: "Web Developer",
      status: "inactive",
      company: ["Aktus Global Management"],
      year: "2019"
    },
    {
      name: "BS Computer Science",
      status: "inactive",
      company: ["St. Clare College of Caloocan"],
      year: "2019"
    },
    {
      name: "Hello World! 👋🏻",
      status: "inactive",
      company: ["Wrote my first line of code"],
      year: "2018"
    }
  ]
  return (
    <Card variant="outlined" sx={{ minHeight: 633 }}>
        <CardHeader avatar={
              <Icon><BriefcaseBusiness /></Icon>
          }
          title={
              <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', marginTop: 1.5 }}>
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
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontFamily: 'Poppins, sans-serif' }}>{exp.name}</Typography>
                      <br/>
                      {
                        exp.company.map((data, index) => (
                          <Box key={index} sx={{ 
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              width: '120%'
                            }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: 10 }}>{data}</Typography>
                            <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
                              <Typography variant="caption" sx={{ fontFamily: 'Poppins, sans-serif', border: '1px solid #ececec', borderRadius: 2, padding: 0.5, fontSize: 10 }}>
                                {exp.year}
                              </Typography>
                            </Box>
                          </Box>
                        ))
                      }
                    </TimelineContent>
                  </TimelineItem>
                ))
              }
            </Timeline>
        </CardContent>
    </Card>
  )
}
