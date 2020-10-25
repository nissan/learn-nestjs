import { Body, Controller, Delete, Get, HttpCode, HttpStatus,Patch, Param, Post,Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(){
        
        return "Found all coffees";
    }

    @Get('flavours')
    findFlavours(@Res() response){
        // this approach to use expressjs standard
        // methods limits compatibility with nest standard decorators
        // like @HttpCode as well as nest standard interceptors
        // and makes this platform dependent
        response.status(HttpStatus.OK).send("Found all flavours of coffee");
    }

    @Get(':id')
    findOne(@Param('id') id:string) {
        return `This returns ${id} coffee`;
    }

    @Post('name')
    @HttpCode(HttpStatus.GONE)
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
