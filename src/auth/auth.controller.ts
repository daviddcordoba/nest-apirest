import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guard/roles.guard';
import { Role } from './enums/rol.enum';
import { Auth } from './decorators/auth.decorator';

interface RequestWithUser extends Request{ //podria ir en una carpeta interfaces
    user:{
        email:string,
        role:string
    }
}

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}

    @Get('profile')
    @Auth(Role.ADMIN)
    //@Roles(Role.ADMIN) // decorador que no existe en next -> lo tengo que crear
    //@UseGuards(AuthGuard,RolesGuard) // es como un middleware de express
        profile(@Req() req: RequestWithUser){
            return req.user // si todo sale bien, veria 'profile'
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
