import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getllAll() {
        return 'this will return all movies';
    }
    @Get('search')
    search(@Query('year') searchingYear) {
        return `we are searching movie year : ${searchingYear}`
    }
    @Get('/:id')
    getOne(@Param('id') id: string) {
        return `this will return one movies with the id: ${id}`;
    }
    @Post('/:id')
    create(@Body() movieDate) {
        console.log(movieDate)
        return 'this will create a movie';
    }
    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `This will delete a movie${movieId}`;
    }
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {

        return { updateMovie: movieId, ...updateData }
    }

}
