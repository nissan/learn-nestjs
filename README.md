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



[1]: https://docs.nestjs.com/