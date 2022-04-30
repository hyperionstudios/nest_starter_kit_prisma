
import {LoginStatus} from '@prisma/client'
import {User} from './user.entity'


export class Login {
  id: string ;
User?: User  | null;
userId: string  | null;
ip: string  | null;
deviceId: string  | null;
deviceType: string  | null;
country: string  | null;
countryCode: string  | null;
countryFlag: string  | null;
city: string  | null;
status: LoginStatus ;
createdAt: Date ;
updatedAt: Date ;
}
