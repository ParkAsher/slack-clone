import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class JoinRequestDto {
    @ApiProperty({
        example: 'asherpark@gmail.com',
        description: '이메일',
        required: true,
    })
    public email: string;

    @ApiProperty({
        example: '박현민',
        description: '닉네임',
        required: true,
    })
    public nickname: string;

    @ApiProperty({
        example: 'gusals8665',
        description: '비밀번호',
        required: true,
    })
    public password: string;
}
