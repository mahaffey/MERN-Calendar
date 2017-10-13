'use strict'

var mongoose = require('mongoose')
  Entry = mongoose.model('Entries')

exports.list_all_entries = function(req, res) {
  Entry.find({}, function(err, entries) {
    if (err)
      res.send(err)
    res.json(entries)
  })
}


exports.create_an_entry = function(req, res) {
  var new_entry = new Entry(req.body)
  new_entry.save(function(err, entry) {
    if (err)
      res.send(err)
    res.json(entry)
  })
}

exports.update_an_entry = function(req, res) {
  Entry.findOneAndUpdate(
    {_id: req.params.entryId},
    req.body,
    {new: true},
    function(err, entry) {
      if (err)
        res.send(err)
      res.json(entry)
  })
}

exports.delete_an_entry = function(req, res) {
  Entry.remove(
    {_id: req.params.entryId},
    function(err, entry) {
      if (err)
        res.send(err)
      res.json({message: 'Calendar entry successfully deleted'})
    }
  )
}
