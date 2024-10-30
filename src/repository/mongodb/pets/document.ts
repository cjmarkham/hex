import { Model } from '../../../domain/pets/models'

export interface Document {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
}

export const documentToModel = (document: Document): Model => {
    return document as Model
}
