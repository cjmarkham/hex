import Repository from './repository'
import { Model } from './models'

export class Service {
    public repository: Repository

    constructor(repository: Repository) {
        this.repository = repository
    }

    public getPet = async (id: string): Promise<Model> => {
        return this.repository.get(id)
    }

    public listPets = async (): Promise<Array<Model>> => {
        return this.repository.list()
    }
}

export const provideService = (repository: Repository): Service => {
    return new Service(repository)
}
