import React from 'react'
import Navigation from './navbar'
import { PageHeader, Grid, Row, Col } from 'react-bootstrap'

export default class Header extends React.Component {
  constructor() {
    super()
    let monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]
    this.state = {
      currentDate: new Date(),
      monthNames: monthNames,
      dayNames: dayNames
    }

    console.log(this.state.currentDate)
  }

  componentWillMount() {
    let currentDate = this.state.currentDate
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()
    let date = currentDate.getDate()
    let day = currentDate.getDay()

    let monthSpelled = this.state.monthNames[month]
    let daySpelled = this.state.dayNames[day]


    this.setState ({
      currentDate: currentDate,
      year: year,
      month: month,
      date: date,
      day: day,
      monthSpelled: monthSpelled,
      daySpelled: daySpelled
    })

  }

  render () {

    return (
      <div>
        <Navigation />
        <h1 className='Month-Year-Header'>
          {this.state.monthSpelled} {this.state.year}
        </h1>
        <PageHeader>
          <Grid className='seven-cols'>
            <Row>
              <Col lg={1} md={1} className='weekend-day'>Sun</Col>
              <Col lg={1} md={1}>Mon</Col>
              <Col lg={1} md={1}>Tue</Col>
              <Col lg={1} md={1}>Wen</Col>
              <Col lg={1} md={1}>Thu</Col>
              <Col lg={1} md={1}>Fri</Col>
              <Col lg={1} md={1} className='weekend-day'>Sat</Col>
            </Row>
          </Grid>
        </PageHeader>
      </div>
    )
  }
}
