import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

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

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return `This action deletes #${id} coffee`;
    }
}
