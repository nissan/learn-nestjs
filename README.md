# Learn NestJS activities#

## Activity: Reading thru [documentation][1]

### Notes:
Target: Windows environment. 
Installing with npm as per the instructions, i.e.

`npm i -g @nestjs/cli`

is better than trying to do so with `yarn`
Using Yarn instead of npm to install nest globally gives an error.
See https://github.com/nestjs/nest-cli/issues/613#issuecomment-602235328 for the root issue why this doesn't work without the additional step of running

`yarn global add @nestjs/schematics`

Save yourself the headache, follow the docs and use npm for this step. The installer for creating a new app lets you use `yarn` at this point so it's not a bad tradeoff.

Creating the project with `nest new`, the new project adds its own `.git` folder, which created a problem since my learning repository was the main folder and the new project was a sub-folder inside my main git repo.
To resolve I ran the following commands

```powershell
cd {{appname}}
rm -r -fo .git
cd ..    
git add .  
```

## Activity: Updating the package.json
Using the plugin to VSCode, I updated all the packages to their latest versions.
There was a conflict with typescript 4.x though, so that was reverted to the original value until further analysis.

## Activity: Generate first controller
- Shorthand is `nest g co` for a controller
- Without spec files is `nest g co --no-spec`
- In a path is `nest g co /{{path/for/controller}}`
- To simulate before running `nest g co --dry-run`

## Activity: Using Status Codes
If we use expressjs standard methods by adding @Res decorators itlimits compatibility with nest standard decorators like @HttpCode as well as nest standard interceptors and makes this platform dependent

## Activity: Pagination with Query Parameters
Best practice: Use path parameters to identify a specific resource, with query parameters to filter or sort that resource

## Activity: Creating the basic service
Nest provides handlers for common exceptions e.g. instead of

`throw new HttpException(`${id} not found`, HttpStatus.NOT_FOUND);`

we can use instead

`throw new NotFoundException(`${id} not found`);`

[1]: https://docs.nestjs.com/