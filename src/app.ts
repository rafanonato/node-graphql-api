import * as express from 'express';
import { isExportAssignment } from 'typescript';
import * as graphHTTP from 'express-graphql';
import schema from './graphql/schema'

class app{

    public express: express.Application;

    constructor(){
        this.express = express();
        this.middleware();
    }

    private middleware(): void{

       this.express.use('/graphql', graphHTTP({
            schema: schema,
            graphiql: process.env.NODE_ENV === 'development'
       }));
    }
}

export default new app().express;