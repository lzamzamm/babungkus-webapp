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

Endpoint: GET /api/toko/

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
    "no_telp": "098080",
    "info_produk": [
      {
        "_id": "660ec76555828dc0f1e44ad9",
        "toko_id": 1,
        "nama": "Nasi Kuning",
        "harga": 20000,
        "kategori": "Makanan",
        "stok": 17,
        "deskripsi": "Makanan sisa penjualan",
        "image": "foto.png",
        "expired_at": "2023-11-24T10:39:58.606Z",
        "createdAt": "2024-04-04T15:29:41.216Z",
        "updatedAt": "2024-04-06T06:10:08.009Z",
        "produk_id": 1,
        "__v": 0
      }
    ]
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
