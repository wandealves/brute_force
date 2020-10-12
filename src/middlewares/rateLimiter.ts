import {Request, Response, NextFunction} from 'express';
import redis from 'redis';
import {RateLimiterRedis} from 'rate-limiter-flexible';

const redisClient = redis.createClient({
  host: 'localhost',
  port:6379,
  password: undefined,
});


const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimiter',
  points: 5,//quantas requisições por IP
  duration: 5,//segundos
});

export default async function rateTimiter(request:Request, response:Response, next:NextFunction):Promise<any>{
  try{
    await limiter.consume(request.ip);
    return next();
  }catch(err){
    return response.status(429).json({message: 'Too many requests', code:429})
  }
}