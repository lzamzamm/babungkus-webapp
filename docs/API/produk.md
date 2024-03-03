# API specs produk

## create produk

Endpoint: POST /api/produk

Request Body :

```json
{
  "toko_id": "655593858bc234dd084da5fa",
  "nama": "Roti",
  "harga": 25000,
  "kategori": "roti",
  "jumlah": 30,
  "deskripsi": "Makanan sisa penjualan",
  "image": "foto.png",
  "lokasi": "Yogyakarta"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "produk berhasil dibuat",
  "data": {
    "_id": "654cb955a6899def83534cbb",
    "toko_id": "655593858bc234dd084da5fa",
    "nama": "Roti",
    "harga": 25000,
    "kategori": "roti",
    "jumlah": 30,
    "deskripsi": "Makanan sisa penjualan",
    "image": "foto.png",
    "lokasi": "Yogyakarta"
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

## get product by id

Endpoint: GET /api/produk/:id

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "_id": "654cb955a6899def83534cbb",
    "toko_id": "655593858bc234dd084da5fa",
    "nama": "Roti",
    "harga": 25000,
    "kategori": "roti",
    "jumlah": 30,
    "deskripsi": "Makanan sisa penjualan",
    "image": "foto.png",
    "lokasi": "Yogyakarta"
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

## get product by kategori

Endpoint: GET /api/produk/kategori

Request Body :

```json
{
  "kategori": "roti"
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": [
    {
      "_id": "654cb955a6899def83534cbb",
      "toko_id": "655593858bc234dd084da5fa",
      "nama": "Roti",
      "harga": 25000,
      "kategori": "roti",
      "jumlah": 30,
      "deskripsi": "Makanan sisa penjualan",
      "image": "foto.png",
      "lokasi": "Yogyakarta"
    },
    {
      "_id": "654cb955a6899def83536uhj"
      // ...
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

## get all product

Endpoint: GET /api/produk

Response Body Success:

```json
{
  "status": "success",
  "data": [
    {
      "_id": "654cb955a6899def83534cbb",
      "toko_id": "655593858bc234dd084da5fa",
      "nama": "Roti",
      "harga": 25000,
      "kategori": "roti",
      "jumlah": 30,
      "deskripsi": "Makanan sisa penjualan",
      "image": "foto.png",
      "lokasi": "Yogyakarta"
    },
    {
      "_id": "654cb955a6899def83534uhj"
      // ...
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

## update produk

Endpoint: PATCH /api/produk/:id

Request Body :

```json
{
  "nama": "Bread"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "produk berhasil dibuat",
  "data": {
    "_id": "654cb955a6899def83534cbb",
    "toko_id": "655593858bc234dd084da5fa",
    "nama": "Bread",
    "harga": 25000,
    "kategori": "roti",
    "jumlah": 30,
    "deskripsi": "Makanan sisa penjualan",
    "image": "foto.png",
    "lokasi": "Yogyakarta"
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

## delete produk

Endpoint: DEL /api/produk/:id

Response Body Success:

```json
{
  "status": "success",
  "message": "produk berhasil dihapus"
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
