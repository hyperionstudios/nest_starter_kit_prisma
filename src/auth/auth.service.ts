import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Tokens } from 'src/common/types';
import { SignInDto, SignUpDto } from './dto';
@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private config: ConfigService,
        private jwt: JwtService,
    ) { }

    /**
     * Hash a String, used for passwords
     * @param data 
     * @returns 
     */
    async hash(data: string): Promise<string> {
        return await bcrypt.hash(data, 10);
    }

    /**
     * Generate Tokens both access and refresh token 
     * based on user id and user email
     * set the expire time to whatever you want
     * @param userID 
     * @param email 
     * @returns {Tokens}
     */
    async generateTokens(userID: string, email: string): Promise<Tokens> {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwt.signAsync({
                sub: userID,
                email,
            }, {
                secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
                expiresIn: 60 * 60 * 24 * 7,
            }),
            this.jwt.signAsync({
                sub: userID,
                email,
            }, {
                secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
                expiresIn: 60 * 60 * 24 * 7 * 4,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        }
    }

    /**
     * to be implemented by the user
     * @param signInDto 
     */
    async signUpLocal(signInDto: SignInDto) {
        //todo: create new user
        //todo: generate tokens
        //todo: create login record
        //todo: generate email confirmation
        //todo: return the tokens
    }

    /**
     * to be implemented by the user
     */
    async signInLocal(signUpDto: SignUpDto) {
        //todo: check if user exists
        //todo: generate tokens
        //todo: create login record
        //todo: return the tokens
    }

    /**
     * to be implemented by the user
     * @param userId 
     * @param refreshToken 
     */
    async refreshTokens(userId: string, refreshToken: string) {
        //todo: check if user exists
        //todo: check if refresh token is valid
        //todo: generate new tokens
    }

    // todo: switch to logoutDto -> include tokens,deviceId etc
    async logout(refreshToken: string, deviceID: string) { }
}
