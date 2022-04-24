import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

/**
 * Add any other required parameters for
 * new registration like first name last name etc 
 * with validation as needed
 */
export class SignUpDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    password: string;
}