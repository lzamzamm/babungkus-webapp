# API Specs pesanan

## create pesanan

Endpoint: POST /api/pesanan

Request Body :

```json
{
  "user_id": 1,
  "status_penjual": "pending",
  "status_pembeli": "pending",
  "jumlah": 1,
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
    "pesanan_id": 1,
    "status_penjual": "pending",
    "status_pembeli": "pending",
    "jumlah": 1,
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
    "pesanan_id": 1,
    "status_penjual": "pending",
    "status_pembeli": "pending",
    "jumlah": 1,
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
  "status_penjual": "success"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "user berhasil dibuat",
  "data": {
    "pesanan_id": 1,
    "status_penjual": "success",
    "status_pembeli": "pending",
    "jumlah": 1,
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
