# API specs user

## register User

Endpoint: POST /api/siswa

Request Body :

```json
{
  "username": "arip",
  "nama_lengkap": ,
  "email": ,


}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "siswa berhasil ditambahkan",
  "data": {}
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": ""
}
```

Process Failed:

```json
{
  "status": "error",
  "message": ""
}
```

## login user

## update user

## get current user

## get user by id

## logout user
