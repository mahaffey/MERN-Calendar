# MERN-Calendar
Calendar App built with the MERN Stack (MongoDB, Express.js, React.js, Node.js)

## Built with MERN Stack
1. Node.js
2. Express.js
3. React.js
4. MongoDB
5. Bootstrap

## To Install
1. Clone GitHub file
* Make sure you have all the frameworks above and MongoDB installed
* run 'mongod' in your terminal to start up MongoDB
```bash
$ mongod
```
* Navigate to 'calendar-server'
##### Run either the yarn or npm command but not both
* Install dependencies
```bash
$ yarn install
$ npm install
```
6. Start up backend server
```bash
$ yarn start
$ npm start
```
7. Navigate to 'calendar-client'
8. Install dependencies
```bash
$ yarn install
$ npm install
```
9. Start up client
```bash
$ yarn start
$ npm start
```
10. Because the backend is already going to be running on port 3000, the client  is going to be located on port 3001.
11. Navigate to 'http://localhost:3001/'

### This project client is incomplete, however, the backend server is fully functional

#### Pinging the API
1. Using cURL in the terminal, Postman or other similar apps you can GET, POST, PUT, and DELETE, information from the calendar.
2. Below is an example of a POST request by using cURL, dates must be in this format: YYYY-MM-DDTHH:MM:SS.000Z, the trailing 0s may be changed if you want to be accurate to the millisecond
```bash
  curl -H "Content-Type: application/json" -X POST -d '{"title": "Doctors Appointment","description": "Checkup","location": "50th and 5th","is_all_day_event": false,"start_time": "2017-11-23T18:00:00.000Z","end_time": "2017-11-23T19:00:00.000Z"}' http://localhost:3000
```

3. After executing the POST request, you may send a GET request to retrieve the data on the API
```bash
curl -H "Content-Type: application/json" -X GET http://localhost:3000
```
4. You can also navigate to http://localhost:3000 in your browser to see all calendar entries.
5. Routes:
  * '/'
    * GET
      * Will get all calendar entries
    * POST
      * Will create a calendar entry
  * '/entries/:entryId'
    * GET
      * Will get a calendar entry
    * PUT
      * Will update a calendar entry
    * DELETE
      * Will get a calendar entry
