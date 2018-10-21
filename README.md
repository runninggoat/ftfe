# Docker based React developing environment for FT Chain front-end

## The first time to run this project after cloning it

As `node_modules/` folder is not exist, you have to change `docker-compose.yml` file to run a basic and none dependent script `app.js`. Then get into the container and run

```shell
npm install
```

to install all the dependencies. Then switch back and run react.

## Attentions

1. Use docker-compose command to run project.
2. Remember to create default network for the project. Use docker's network command to create network in docker. The network name should be the same in `docker-compose.yml` file.
3. Make sure the eslint version is 5.6.0, be careful with the version in `node_module/`.
