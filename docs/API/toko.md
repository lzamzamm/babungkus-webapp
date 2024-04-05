# API toko

## create toko

Endpoint: POST /api/toko

Request Body :

```json
{
  "user_id": 1,
  "nama": "arip",
  "deskripsi": "nasi goreng",
  "status": "Pending",
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
    "status": "Pending",
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

Endpoint: GET /api/toko/all

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
    "status": "Pending",
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

## update status toko

Endpoint: PUT /api/toko/status

Request Body :

```json
{
  "toko_id": 1,
  "status": "Confirm"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "Status toko berhasil diupdate",
  "data": {
    "toko_id": 1,
    "nama": "arip",
    "deskripsi": "nasi goreng",
    "image": "jpg",
    "status": "Active",
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

## get toko by status

Endpoint: GET /api/toko/

Request Body :

```json
{
  "status": "Active"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "Status toko berhasil diupdate",
  "data": {
    "toko_id": 1,
    "nama": "arip",
    "deskripsi": "nasi goreng",
    "image": "jpg",
    "status": "Active",
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
