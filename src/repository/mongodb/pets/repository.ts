import Repository from '../../../domain/pets/repository'
import { Document, documentToModel } from './document'
import { Model } from '../../../domain/pets/models'

class PetRepository implements Repository {
    public list = async (): Promise<Array<Model>> => {
        const docs = [{
            id: '1',
            name: 'Pet 1',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            id: '1',
            name: 'Pet 1',
            createdAt: new Date(),
            updatedAt: new Date(),
        }] as Array<Document>

        return docs.map((d: Document) => documentToModel(d))
    }

    public get = async (): Promise<Model> => {
        const doc = {
            id: '1',
            name: 'Pet 1',
            createdAt: new Date(),
            updatedAt: new Date(),
        } as Document

        return documentToModel(doc)
    }
}

const provideRepository = (): Repository => {
    return new PetRepository()
}

export default provideRepository
