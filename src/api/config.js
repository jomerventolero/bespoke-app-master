import config from '@/conf/config'
import { Client, Account, ID } from 'appwrite';

const appwriteClient = new Client()

appwriteClient
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId)

const account = new Account(appwriteClient)


export default class AppwriteService {
    async createUser(email, password, name) {
        try {
            const user = await account.create(ID.unique(), email, password, name)
        } catch (error) {
            throw error
        }
    }
}


