# API toko

## create toko

Endpoint: POST /api/toko

Request Body :

```json
{
  "user_id": 1,
  "nama": "arip",
  "deskripsi": "nasi goreng",
  "is_confirmed": false,
  "image": "jpg",
  "jam_operasional": "10.00 sampai 11.000",
  "lokasi": "sapen",
  "no_telp": "098080"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "Menunggu konfirmasi admin",
  "data": {
    "toko_id": 1,
    "nama": "arip",
    "deskripsi": "nasi goreng",
    "image": "jpg",
    "is_confirmed": false,
    "jam_operasional": "10.00 sampai 11.000",
    "lokasi": "sapen",
    "no_telp": "098080"
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

## get toko all

Endpoint: GET /api/toko

Response Body Success:

```json
{
  "status": "success",
  "data": [
    {
      "toko_id": 1,
      "nama": "arip",
      "deskripsi": "nasi goreng",
      "image": "jpg",
      "jam_operasional": "10.00 sampai 11.000",
      "loksi": "sapen",
      "no_telp": "098080"
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

## get toko by id

Endpoint: GET /api/toko/:id

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "toko_id": 1,
    "nama": "arip",
    "deskripsi": "nasi goreng",
    "image": "jpg",
    "jam_operasional": "10.00 sampai 11.000",
    "lokasi": "sapen",
    "no_telp": "098080"
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

## update toko

Endpoint: PUT /api/toko/:user_id

Request Body :

```json
{
  "nama": "arip",
  "deskripsi": "nasi goreng"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "toko berhasil di update",
  "data": {
    "toko_id": 1,
    "nama": "arip",
    "deskripsi": "nasi goreng",
    "image": "jpg",
    "is_confirmed": true,
    "jam_operasional": "10.00 sampai 11.000",
    "lokasi": "sapen",
    "no_telp": "098080"
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
