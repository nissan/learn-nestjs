# Learn NestJS activities#

## Activity: Reading thru [documentation][1]

### Notes:
Target: Windows environment. 
Tried using Yarn instead of npm to install nest globally gives an error.
See https://github.com/nestjs/nest-cli/issues/613#issuecomment-602235328 for the root issue why this doesn't work without the additional step of running

`yarn global add @nestjs/schematics`

after, or removing it with yarn and re-installing with npm as per the instructions.

Creating the project, it adds its own `.git` folder, which created a problem since this was a folder inside my main git repo.

[1]: https://docs.nestjs.com/