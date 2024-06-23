import { MongooseModuleOptions } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { IDatabaseOptionsService } from '../interfaces/database.options-service.interface'
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseOptionsService implements IDatabaseOptionsService {

    private readonly host: string;
    private readonly user: string;
    private readonly password: string;
    private readonly debug: boolean;
    private readonly cluster: string;
    private readonly name: string;
    private readonly env: string;
    
    constructor(private readonly configService: ConfigService) {
        this.env = this.configService.get<string>('app.env');
        this.host = this.configService.get<string>('db.connections.host');
        this.user = this.configService.get<string>('db.connections.user');
        this.password = this.configService.get<string>('db.connections.password');
        this.debug = this.configService.get<boolean>('db.connections.debug');
        this.cluster = this.configService.get<string>('db.connections.cluster')
        this.name = this.configService.get<string>('db.connections.name')
    }
    createOptions(): MongooseModuleOptions {
        let uri = `${this.host}://${this.user}:${this.password}@${this.cluster}/?retryWrites=true&w=majority&appName=${this.name}`;

       /*  if (this.database) {
            uri = `${uri}://${this.database}${this.options}`;
        } */

        if (this.env !== "production") {
            mongoose.set('debug', this.debug);
        }

        const mongooseOptions: MongooseModuleOptions = {
            uri,
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            autoCreate: true,
            // useMongoClient: true,
        };

        if (this.user && this.password) {
            mongooseOptions.auth = {
                username: this.user,
                password: this.password,
            };
        }
        return {...mongooseOptions};

    }

}