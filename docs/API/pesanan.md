# API Specs pesanan

## create pesanan

Endpoint: POST /api/pesanan

Request Body :

```json
{
  "user_id": "6555934b9a9948b77c1edb41",
  "status": "pending",
  "pesan": "tes",
  "harga_total": 30000
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "pesanan berhasil dibuat",
  "data": {
    "_id": "654cb952407d9d81ab448f16",
    "status": "pending",
    "pesan": "tes",
    "harga_total": 30000
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

## get pesanan by id

Endpoint: GET /api/pesanan/:id

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "_id": "654cb952407d9d81ab448f16",
    "status": "pending",
    "pesan": "tes",
    "harga_total": 30000
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

## update pesanan

Endpoint: PATCH /api/pesanan/:id

Request Body :

```json
{
  "status": "success"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "user berhasil dibuat",
  "data": {
    "_id": "654cb952407d9d81ab448f16",
    "status": "success",
    "pesan": "tes",
    "harga_total": 30000
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

## delete pesanan

Endpoint: DEL /api/pesanan/:id

Response Body Success:

```json
{
  "status": "success",
  "message": "pesanan berhasil dihapus"
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
