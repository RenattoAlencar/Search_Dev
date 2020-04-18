const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()


routes.get(`/devs`, DevController.index )
routes.post(`/devs`, DevController.store)
routes.get(`/search`, SearchController.index)



routes.put('/devs', (request, response) => {
  console.log(request.params)
  return response.json({ message: 'Hello Omnisack' })
})

routes.delete('/devs/:id', (request, response) => {
  console.log(request.params)
  return response.json({ message: 'Hello Omnisack' })
})

module.exports = routes;
