### World Champions

Frontend developed test

### Configs

This project uses the Super Hero API, you need set envirment variable `REACT_APP_HERO_KEY` on `.env` file

### Run

To execute this code you need install Nodejs, optionaly you can run with Docker and Docker-compose.

Follow the commands:

`Install all dependencies`

```
    npm i --legacy-peer-deps
```

The tag `--legacy-peer-deps` is required because this project uses `react-virtualized` and this module does not support React v17

`Run the local application`

```
    npm start
```

or if you prefer to run Docker:

```
    docker-compose up
```

Runnig in docker the port exposed will be 5000

### Live Demo

You can see i live demo [here](https://world-champions.herokuapp.com/)
