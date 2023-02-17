import {
    Body,
    Controller,
    Get,
    Post,
    Req,
    Res,
    UseInterceptors,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger/dist';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
    //DI
    constructor(private userService: UsersService) {}

    @ApiOperation({ summary: '내 정보 조회' })
    @Get()
    getUsers(@User() user) {
        return user;
    }

    @ApiOperation({ summary: '회원가입' })
    @Post()
    async join(@Body() body: JoinRequestDto) {
        await this.userService.join(body.email, body.nickname, body.password);
    }

    @ApiOperation({ summary: '로그인' })
    @Post('login')
    login(@User() user) {
        return user;
    }

    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', { httpOnly: true });
        res.send('ok');
    }
}
