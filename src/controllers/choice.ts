import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('choice')
export class ChoiceController {

    @Get('')
    public getChoiceResult(_: Request, res: Response) {

    }
}