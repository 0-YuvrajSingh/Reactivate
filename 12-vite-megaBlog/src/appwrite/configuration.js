// Major config for appwrite
import config from '../config/config'
import {Client, Databases, Storage, Query, ID} from "appwrite"

export class StorageService {
    client = new Client();
    databases;
    storage; // hitesh used bucket

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async readPost(slug) {
        {/* Get A Single Post : getPost/readPost */}
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }

    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug, {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            throw error
        }
    }

    async getActivePosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            throw error
        }
    }

    // File Management (Upload & Delete) :

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error
        }
    }

    filePreview(fileId) {
        try {
            return this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            throw error
        }
    }

    async downloadFile(fileId) {
        try {
            return await this.storage.downloadFile(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            throw error
        }
    }
}

const storageService = new StorageService();
export default storageService