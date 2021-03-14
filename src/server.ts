import './util/module-alias';
import { Server } from '@overnightjs/core';
import { ChoiceController } from './controllers/choice';
import bodyParser from 'body-parser';

export class SetupServer extends Server {

    constructor(private port = 3003) {
        super();
    }

    public init(): void {
        this.setupControllers()
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const choiceController = new ChoiceController();
        this.addControllers([choiceController]);
    }
}