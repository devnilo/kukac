import { Request, Response } from 'express';
import { consultCep } from '../utils/viacep'
import Cep from '../models/Cep'

export default class CepController {

    static async get(request: Request, response: Response) {
        const { cep } = request.query;

        try {
            const data: Cep = await consultCep(cep as any);

            return response.status(200).send(data);
        } 
        catch(error) {
            const status = error;
            const message = error;

            return response.status(status as any).send(message as any);
        }
    }
}