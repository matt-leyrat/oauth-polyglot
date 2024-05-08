# Koa OAuth Server

## Register Route
```sh
curl -X POST \
  http://localhost:3000/auth/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "mypassword"
  }'
```

## Login Route
```sh
curl -X POST \
  http://localhost:3000/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "john@example.com",
    "password": "mypassword"
  }'
```
expected response:
```json
{
  "token": "<your-token>"
}
```

## Protected Route
```sh
curl -X GET \
  http://localhost:3000/protected \
  -H 'Authorization: Bearer <your-token>'
```
