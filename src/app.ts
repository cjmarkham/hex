import express from 'express'

import provideHandlers from './api/pets/handlers'
import { provideService } from './domain/pets/service'
import provideRepository from './repository/mongodb/pets/repository'


const repository = provideRepository()
const service = provideService(repository)
const handlers = provideHandlers(service)
/**
 * provideMongo()
 * providePostgres()
 * provideSecrets()
 * etc...
 */

const start = () => {
    const app = express()

    app.get('/', handlers.listPets)

    app.listen(3000, () => {
        console.log('App started')
    })
}

start()
