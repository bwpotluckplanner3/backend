const router = require('express').Router()
const Organizer = require('./organizer-model')
const {restricted} = require('../restricted-middleware')

router.get('/:user_id', restricted, (req, res, next) => {
  Organizer.getEvents(req.params.user_id)
    .then(allEvents => {
      res.status(200).json(allEvents)
    })
    .catch(next)
})

router.post('/event', restricted, (req, res, next) => {
  Organizer.createEvent(req.body)
    .then(newEvent => {
      res.status(201).json(newEvent)
    })
    .catch(next) 
})

router.put('/event/:event_id', restricted, (req, res, next) => {
  Organizer.updateEvent(req.params.event_id, req.body)
    .then(updatedevent => {
      res.status(200).json(updatedevent)
    })
    .catch(next)
})

router.get('/:event_id/guests', restricted, (req, res, next) => {
  Organizer.getEventGuests(req.params.event_id)
    .then(guests => {
      res.status(200).json(guests)
    })
    .catch(next)
})

// router.post('/:event_id/guests', restricted, (req, res, next) => {
//   Organizer.addGuestToEvent(req.params.event_id, req.body)
//     .then(guests => {
//       res.status(201).json(guests)
//     })
//     .catch(next)
// })

module.exports = router
