import React from 'react'
import Header from './header/calendarHeader'
import Body from './body/calendarBody'

export default class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <Header />
        <Body />
      </div>
    )
  }
}
