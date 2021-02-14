# Typescript Todo App

## Description

This is a simple todo app built in typescript.

## Technologies

- express (Node.js/TypeScript)
- mongodb (mongoose as ORM)
- React (JavaScript/TypeScript)
- docker/docker-compose (dev container and deployment)

## How to run the project

### Run the project in the dev container (not need a mongodb running)
Install a vscode extension to work in a dev container

```
$ code --install-extension ms-vscode-remote.remote-containers
```
Clone the project and open it with vscode
```
$ git clone https://github.com/ryuichi24/typescript-todo-app

# With docker running in your local machine
$ code typescript-todo-app
```

A popup appears saying "reopen in container" and click it
or you can also do "Remote-Containers: Reopen in Container"
in Command pallette (Shift + Cmd + p or Ctrl + Shift + p).
Wait until the dev container gets ready... and do below:



```
$ cd src/backend

# start the project!
$ yarn dev
```

### Run the project locally (need a mongodb running)

```
$ git clone https://github.com/ryuichi24/typescript-todo-app

$ cd typescript-todo-app/src/backend

$ yarn install --frozen-lockfile

# start the project!
$ yarn dev
```
