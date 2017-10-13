'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema


var ItemSchema = new Schema({
  title: {
    type: String,
    require: 'Please enter name for calendar entry'
  },
  description: {
    type: String,
  },
  is_all_day_event: {
    type: Boolean,
  },
  start_time: {
    type: Date,
  },
  end_time: {
    type: Date,
  }
  Created_date: {
    type: Date,
    default: Date.now
  }
})
