
import {Login} from '../../login/entities/login.entity'


export class User {
  id: string ;
firstName: string ;
lastName: string ;
logins?: Login[] ;
createdAt: Date ;
updatedAt: Date ;
}
