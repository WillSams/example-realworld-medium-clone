# ![RealWorld Example App](logo.png)

**TypeScript, Vite, Reactjs, Redux Toolkit, Redux Sagas, Python, FastAPI, GraphQL, Boto3, AWS**

[![Application Unit Tests](https://github.com/WillSams/example-ts-react-with-python/actions/workflows/pr-validate.yml/badge.svg)](https://github.com/WillSams/example-ts-react-with-python/actions/workflows/pr-validate.yml)
[![Client Deployment](https://github.com/WillSams/example-ts-react-with-python/actions/workflows/build-and-deploy-client.yml/badge.svg)](https://github.com/WillSams/example-ts-react-with-python/actions/workflows/build-and-deploy-client.yml)
[![Backend Deployment](https://github.com/WillSams/example-ts-react-with-python/actions/workflows/build-and-deploy-backend.yml/badge.svg)](https://github.com/WillSams/example-ts-react-with-python/actions/workflows/build-and-deploy-backend.yml)

React + FastAPI codebase containing real world examples (Graphql, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

*[Demo](https://samswebs.com/conduit-example/)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)*

This codebase was created to demonstrate a fully fledged fullstack application built with React and FastAPI including Graphql API, authentication, routing, pagination, and more.

## How it works

> TODO

## Pre-requisites

To run the service, you will need to install the following tools.

* [NodeJS](https://nodejs.org/en/)
* [Docker](https://www.docker.com/)

The below are optional but highly recommended:

* [nvm](https://github.com/nvm-sh/nvm) - Used to manage NodeJS versions.
* [Direnv](https://direnv.net/) - Used to manage environment variables.
    - Install [direnv](https://direnv.net) for persisting environment variables needed for development.

## Getting Started

First, we'll need to set up our environment variables.  You can do this by either any of the methods mentioned in [/tools/environ-vars/ENV.md](./tools/environ-vars/ENV.md) but I recommend using [Direnv](https://direnv.net/).

### Install Python Packages

Execute the following in your terminal:

```bash
python -m venv venv
source venv/bin/activate
pip install --upgrade pip 
pip install -r requirements.txt
```

### Install Node.js Packages

Execute the following within your terminal:

```bash
nvm use                  # To eliminate any issues, install/use the version listed in .nvmrc. 
npm i                    # install the packages needed for project
cd ../frontend && npm i  # install the packages needed for the frontend
cd ..                    # navigate back to the root of the repostiory
```

### Create the database

Finally, let's create and seed a local instance of [AWS DynamoDB]():

```bash
docker-compose up -d    # runs the database in the background
```

During development, you can just execute `npm run dev:db-baseline` to refresh the database back to the original seed data.

## Development

To run both the frontend and backend concurrently:

```bash
docker-compose up -d  # runs the database in the background
npm run dev
```

## Testing

### Unit Tests

> TODO

### Functional Tests

> TODO

## Deployment

### Deploying the Client to GitHub Pages

> TODO

### Deploying the Backend to AWS Lambda

> TODO

