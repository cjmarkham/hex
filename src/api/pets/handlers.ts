import { Service } from '../../domain/pets/service'

class Handlers {
    private service: Service

    constructor(service: Service) {
        this.service = service
    }

    public getPet = (req, res) => {

    }

    public listPets = async (req, res) => {
        console.log('getting pets')
        const pets = await this.service.listPets()

        res.status(200).send(JSON.stringify(pets))
    }
}

const provideHandlers = (service: Service): Handlers => {
    return new Handlers(service)
}

export default provideHandlers
