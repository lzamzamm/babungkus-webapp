# API Specs pesanan

## create pesanan

Endpoint: POST /api/pesanan

Request Body :

```json
{
  "user_id": 1,
  "produk_id": 1,
  "status_penjual": "Pending",
  "status_pembeli": "Pending",
  "jumlah": 1,
  "pesan": "tes",
  "harga_total": 30000,
  "expired_at": "2023-11-24T10:39:58.606Z"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "pesanan berhasil dibuat",
  "data": {
    "user_id": 5,
    "produk_id": 2,
    "jumlah": 5,
    "status_penjual": "Pending",
    "status_pembeli": "Pending",
    "pesan": "tes",
    "harga_total": 30000,
    "expired_at": "24-11-2023",
    "_id": "66138aa41482b330e82082eb",
    "createdAt": "2024-04-08T06:11:48.046Z",
    "updatedAt": "2024-04-08T06:11:48.046Z",
    "pesanan_id": 5,
    "__v": 0
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

## get pesanan all

Endpoint: GET /api/pesanan

Response Body Success:

```json
{
  "status": "success",
  "data": [
    {
      "_id": "6610e6b3363de7cae687742e",
      "user_id": 2,
      "produk_id": 1,
      "jumlah": 5,
      "status_penjual": "Pending",
      "status_pembeli": "Pending",
      "pesan": "tes",
      "harga_total": 30000,
      "expired_at": "24-11-2023",
      "createdAt": "2024-04-06T06:07:47.765Z",
      "updatedAt": "2024-04-06T06:07:47.765Z",
      "pesanan_id": 1,
      "__v": 0
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

## get pesanan all by current user

Endpoint: GET /api/pesanan/current/user

Response Body Success:

```json
{
  "status": "success",
  "data": [
    {
      "_id": "6612cf5587a848f7dbe15662",
      "user_id": 5,
      "produk_id": 1,
      "jumlah": 5,
      "status_penjual": "Pending",
      "status_pembeli": "Pending",
      "pesan": "tes",
      "harga_total": 30000,
      "expired_at": "2023-11-24T10:39:58.606Z",
      "createdAt": "2024-04-07T16:52:37.760Z",
      "updatedAt": "2024-04-07T16:52:37.760Z",
      "pesanan_id": 3,
      "__v": 0,
      "info_produk": {
        "_id": "660ec76555828dc0f1e44ad9",
        "toko_id": 1,
        "nama": "Nasi Kuning",
        "harga": 20000,
        "kategori": "Makanan",
        "stok": 12,
        "deskripsi": "Makanan sisa penjualan",
        "image": "foto.png",
        "expired_at": "2023-11-24T10:39:58.606Z",
        "createdAt": "2024-04-04T15:29:41.216Z",
        "updatedAt": "2024-04-07T16:52:37.708Z",
        "produk_id": 1,
        "__v": 0
      }
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

## get pesanan by id

Endpoint: GET /api/pesanan/:id

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "_id": "6610e6b3363de7cae687742e",
    "user_id": 2,
    "produk_id": 1,
    "jumlah": 5,
    "status_penjual": "Pending",
    "status_pembeli": "Pending",
    "pesan": "tes",
    "harga_total": 30000,
    "expired_at": "24-11-2023",
    "createdAt": "2024-04-06T06:07:47.765Z",
    "updatedAt": "2024-04-06T06:07:47.765Z",
    "pesanan_id": 1,
    "__v": 0
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
    "_id": "6610e6b3363de7cae687742e",
    "user_id": 2,
    "produk_id": 1,
    "jumlah": 5,
    "status_penjual": "Batal",
    "status_pembeli": "Batal",
    "pesan": "terima kasih",
    "harga_total": 30000,
    "expired_at": "25-11-2023",
    "createdAt": "2024-04-06T06:07:47.765Z",
    "updatedAt": "2024-04-08T06:12:39.564Z",
    "pesanan_id": 1,
    "__v": 0
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
