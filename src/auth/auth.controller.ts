import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}

    @Get('profile')
    @UseGuards(AuthGuard)
        profile(){
            return 'profile' // si todo sale bien, veria 'profile'
        }

    @Post('register')
        register(@Body() registerDto:RegisterDto){
            return this.authService.register(registerDto)
        }

    @Post('login')
        login(@Body() loginDto:LoginDto){
            return this.authService.login(loginDto)
        }
}