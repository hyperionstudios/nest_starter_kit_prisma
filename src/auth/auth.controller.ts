import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller()
export class AuthController {
    /**
     * Registering new user into the system <br>
     * Email must be unique <br>
     * This end point will trigger a verification email being 
     * sent to the user's email address
     */
    @Post('signup')
    async register() { }

    @Post('signin')
    async login() { }

    @Post('request-reset')
    async requestPasswordReset() { }

    @Post('reset-password')
    async resetPassword() { }

    @Post('request-email-verification')
    async requestEmailVerification() { }

    @Post('verify-email')
    async verifyEmail() { }
}
