import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Query,
  Body,
  Param,
  Headers,
  Ip,
} from '@nestjs/common';
import { request } from 'http';

@Controller('users')
export class UsersController {
  @Get('/:id/{:optional}')
  public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
    console.log(id);
    console.log(limit);
    return 'You sent a get request to user endpoints ';
  }

  @Post()
  public createUsers(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(request);
    console.log(headers);
    console.log(ip);
    return 'You sent a get request to user endpoints ';
  }
}
