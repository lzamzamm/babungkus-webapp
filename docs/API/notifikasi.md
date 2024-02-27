# API Specs notifikasi

## create notifikasi

Endpoint: POST /api/notifikasi

Request Body :

```json
{
  "user_id": 1,
  "pesan": "Agung ingin membeli produkmu",
  "is_read": false
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "notifikasi berhasil dibuat",
  "data": {
    "_id": 1,
    "user_id": 1,
    "pesan": "Agung ingin membeli produkmu",
    "is_read": false
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

## get notifikasi by current user

Endpoint: GET /api/notifikasi

Response Body Success:

```json
{
  "status": "success",
  "data": [
    {
      "_id": 1,
      "user_id": 1,
      "pesan": "Agung ingin membeli produkmu",
      "is_read": false
    },
    {
      "_id": 2
      //...
    }
  ]
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

## update notifikasi

Endpoint: PATCH /api/notifikasi/:id

Request Body :

```json
{
  "is_read": true
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "notifikasi berhasil dibuat",
  "data": {
    "_id": 1,
    "user_id": 1,
    "pesan": "Agung ingin membeli produkmu",
    "is_read": true
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
