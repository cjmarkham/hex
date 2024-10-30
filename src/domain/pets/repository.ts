import { Model } from './models'

export default abstract class Repository {
    list: () => Promise<Array<Model>>
    get: (id: string) => Promise<Model>
}
