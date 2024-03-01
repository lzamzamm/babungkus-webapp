# API specs user

## register User

Endpoint: POST /api/register

Request Body :

```json
{
  "username": "arip",
  "nama_lengkap": "arip muhammad",
  "email": "arip@gmail.com",
  "password": 123,
  "no_telp": "080707",
  "role": "user"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "user berhasil dibuat",
  "data": {
    "username": "arip",
    "nama_lengkap": "arip muhammad",
    "email": "arip@gmail.com",
    "no_telp": "080707"
  }
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```

## login user

Endpoint: POST /api/login

Request Body :

```json
{
  "username": "arip",
  "password": 123
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "berhasil login"
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```

## update user

Endpoint: PUT /api/user/current

Request Body :

```json
{
  "username": "arip",
  "nama_lengkap": "arip muhammad",
  "email": "arip@gmail.com",
  "password": 123,
  "no_telp": "080707"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "user berhasil di update",
  "data": {
    "username": "arip",
    "nama_lengkap": "arip muhammad",
    "email": "arip@gmail.com",
    "no_telp": "080707"
  }
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```

## get current user

Endpoint: GET /api/user

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "username": "arip",
    "nama_lengkap": "arip muhammad",
    "email": "arip@gmail.com",
    "password": 123,
    "no_telp": "080707",
    "role": "user"
  }
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```

## get user by id

Endpoint: GET /api/user/:id

Response Body Success:

```json
{
  "status": "success",
  "message": "user berhasil di update",
  "data": {
    "username": "arip",
    "nama_lengkap": "arip muhammad",
    "email": "arip@gmail.com",
    "no_telp": "080707"
  }
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```

## logout user

Endpoint: POST /api/logout

Response Body Success:

```json
{
  "status": "success",
  "message": "user berhasil logout"
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "request body error"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": "system error"
}
```
