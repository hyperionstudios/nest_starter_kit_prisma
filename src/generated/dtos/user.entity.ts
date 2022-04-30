
import {Login} from './login.entity'


export class User {
  id: string ;
firstName: string ;
lastName: string ;
logins?: Login[] ;
createdAt: Date ;
updatedAt: Date ;
}
