import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(){
        return "Found all coffees";
    }

    @Get('flavours')
    findFlavours(){
        return "Found all flavours of coffee";
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return `This returns ${id} coffee`;
    }

    @Post('name')
    createName(@Body('name') body){
        return body;
        //return "This creates a new coffee";
    }

    @Post()
    create(@Body() body){
        return body;
        //return "This creates a new coffee";
    }
}
