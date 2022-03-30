import { Request, Response } from 'express';
import { generatePalindromeNumbers } from '../utils/palindrome'

export default class PalindromeController {
    static generatePalindromeNumbers(arg0: number, arg1: number): any {
        throw new Error('Method not implemented.');
    }

    static async get(request: Request, response: Response) {
        const { first, last } = request.query;
        const palindromes = generatePalindromeNumbers(first as any, last as any);
        return response.status(200).send(palindromes);
    }
}