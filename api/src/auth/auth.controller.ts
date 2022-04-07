import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {}

    @Post('signup')
    SignUp(@Body() dto: AuthDto){
        return this.authService.signUp(dto)
    }

    @Post('signin')
    SignIn(@Body() dto: AuthDto){
        return this.authService.login(dto)
    }
}