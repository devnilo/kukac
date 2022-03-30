import dotenv from 'dotenv'

export default {
    'environment': process.env.ENV || 'development',
    'host': process.env.HOST || 'localhost',
    'port': process.env.PORT || 3003,
    'endpoint': process.env.ENDPOINT || '/api/v1'
}