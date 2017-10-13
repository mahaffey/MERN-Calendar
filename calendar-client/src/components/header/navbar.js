import React from 'react'
import { Navbar, Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

class Navigation extends React.Component {
  render () {
    return (
      <Navbar fluid>
       <Navbar.Header>
         <Button>
           <a href="https://www.google.com">Calendars</a>
         </Button>
       </Navbar.Header>

         <ButtonGroup>
           <Button>Day</Button>
           <Button>Week</Button>
           <Button>Month</Button>
           <Button>Year</Button>
         </ButtonGroup>

       <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
          </Navbar.Form>
     </Navbar>
    )
  }
}


export default Navigation
