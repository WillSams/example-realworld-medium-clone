set ENV=development
set NODE_ENV=%ENV%
set VITE_ENV=%NODE_ENV%
set IS_DEBUG=1

set FRONTEND_PORT=3000

set GRAPHQL_PORT=8080
set GRAPHQL_API=http://localhost:%GRAPHQL_PORT%/%ENV%
set VITE_GRAPHQL_API=%GRAPHQL_API%

set AWS_PROFILE=localhost-user
set AWS_ACCESS_KEY_ID=fakeMyKeyId
set AWS_SECRET_ACCESS_KEY=fakeSecretAccessKey
set AWS_REGION=us-east-1

set DB_PORT=8081
set DYNAMO_ENDPOINT=http://localhost:%DB_PORT%
