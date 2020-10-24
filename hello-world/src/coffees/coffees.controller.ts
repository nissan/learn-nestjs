import { Controller, Get, Param } from '@nestjs/common';

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
}
