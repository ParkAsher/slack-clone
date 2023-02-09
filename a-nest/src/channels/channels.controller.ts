import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
    // 모든 채널 가져오기
    @Get()
    getAllChannels() {}

    // 채널 생성
    @Post()
    createChannel() {}

    // 특정 채널 가져오기
    @Get(':name')
    getSpecificChannel() {}

    // 특정 채널 채팅목록 가져오기
    @Get(':name/chats')
    getChats(@Query() query, @Param() param) {}

    // 채팅쓰기
    @Post(':name/chats')
    postChat(@Body() body) {}

    // 채널에 참여한 유저 목록 가져오기
    @Get(':name/members')
    getAllMembers() {}

    // 유저 초대
    @Post(':name/members')
    inviteMembers() {}
}
