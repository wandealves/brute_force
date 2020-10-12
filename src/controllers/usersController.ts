import { Request, Response } from 'express';

import User from '../models/user';

class UsersController {
  public async show(request: Request, response: Response): Promise<Response> {

    const users:User[] = [
      {id:1,name:'user 01'},
      {id:2,name:'user 02'},
      {id:3,name:'user 03'},
      {id:4,name:'user 04'},
      {id:5,name:'user 05'},
      {id:6,name:'user 06'},
      {id:7,name:'user 07'},
      {id:8,name:'user 08'},
      {id:9,name:'user 09'},
      {id:10,name:'user 10'},
    ];

    return response.status(200).json(users);
  }
}

export default UsersController;