import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import {
    BadRequestException,
    HttpException,
    UnauthorizedException,
} from '@nestjs/common/exceptions';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>,
    ) {}

    async join(email: string, nickname: string, password: string) {
        const users = await this.usersRepository.findOne({ where: { email } });

        if (users) {
            // 이미존재하는 유저
            throw new UnauthorizedException('이미 존재하는 사용자입니다.');
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        await this.usersRepository.save({
            email,
            nickname,
            password: hashedPassword,
        });
    }
}
