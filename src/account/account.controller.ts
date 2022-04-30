import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Account')
@Controller()
export class AccountController {
    @Post('update-account')
    async updateProfile() { }
}
