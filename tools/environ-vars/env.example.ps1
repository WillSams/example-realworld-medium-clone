$env:ENV = development
$env:NODE_ENV = ${env:ENV}
$env:VITE_ENV = ${env:NODE_ENV}
$env:IS_DEBUG = 1

$env:FRONTEND_PORT = 3000

$env:GRAPHQL_PORT = 8080
$env:GRAPHQL_API = http://localhost:${env:GRAPHQL_PORT}/${env:ENV}
$env:VITE_GRAPHQL_API = ${env:GRAPHQL_API}

$env:AWS_PROFILE = localhost-user
$env:AWS_ACCESS_KEY_ID = fakeMyKeyId
$env:AWS_SECRET_ACCESS_KEY = fakeSecretAccessKey
$env:AWS_REGION = us-east-1

$env:DB_PORT = 8081
$env:DYNAMO_ENDPOINT = http://localhost:${env:DB_PORT}
