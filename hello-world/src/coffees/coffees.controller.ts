import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(){
        return "Found all coffees"
    }

    @Get('flavours')
    findFlavours(){
        return "Found all flavours of coffee"
    }
}
