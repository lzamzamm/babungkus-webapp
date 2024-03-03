# API laporan

## create laporan

Endpoint: POST /api/laporan

Request Body :

```json
{
  "user_id": "6555934b9a9948b77c1edb41",
  "toko_id": "655593858bc234dd084da5fa",
  "judul": "Laporan penipuan",
  "alasan": "Tokonya menjual barang yang tidak sesuai",
  "image": "image1.png"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "laporan berhasil dibuat",
  "data": {
    "_id": "654b32705958a6c86b56c2f9",
    "user_id": "6555934b9a9948b77c1edb41",
    "toko_id": "655593858bc234dd084da5fa",
    "judul": "Laporan penipuan",
    "alasan": "Tokonya menjual barang yang tidak sesuai",
    "image": "image1.png"
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

## get laporan all

Endpoint: GET /api/laporan

Response Body Success:

```json
{
  "status": "success",
  "data": [
    {
      "_id": "654b32705958a6c86b56c2f9",
      "user_id": "6555934b9a9948b77c1edb41",
      "toko_id": "655593858bc234dd084da5fa",
      "judul": "Laporan penipuan",
      "alasan": "Tokonya menjual barang yang tidak sesuai",
      "image": "image1.png",
      "info_toko": {
        "nama": "arip",
        "deskripsi": "nasi goreng",
        "image": "jpg",
        "is_confirmed": true,
        "jam_operasional": "10.00 sampai 11.000",
        "loksi": "sapen",
        "no_telp": "098080"
      }
    },
    {
      "_id": "654b32705958a6c86b56c7f5"
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

## get laporan by id

Endpoint: GET /api/laporan/:id

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "_id": "654b32705958a6c86b56c2f9",
    "user_id": "6555934b9a9948b77c1edb41",
    "toko_id": "655593858bc234dd084da5fa",
    "judul": "Laporan penipuan",
    "alasan": "Tokonya menjual barang yang tidak sesuai",
    "image": "image1.png",
    "info_toko": {
      "nama": "arip",
      "deskripsi": "nasi goreng",
      "image": "jpg",
      "is_confirmed": true,
      "jam_operasional": "10.00 sampai 11.000",
      "loksi": "sapen",
      "no_telp": "098080"
    }
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

## update laporan

Endpoint: PUT /api/laporan/:id

Request Body :

```json
{
  "is_confirmed": false
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "laporan berhasil di update",
  "data": {
    "_id": 1,
    "user_id": "6555934b9a9948b77c1edb41",
    "toko_id": "655593858bc234dd084da5fa",
    "judul": "Laporan penipuan",
    "alasan": "Tokonya menjual barang yang tidak sesuai",
    "image": "image1.png",
    "info_toko": {
      "nama": "arip",
      "deskripsi": "nasi goreng",
      "image": "jpg",
      "is_confirmed": false,
      "jam_operasional": "10.00 sampai 11.000",
      "loksi": "sapen",
      "no_telp": "098080"
    }
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

## delete laporan

Endpoint: DEL /api/laporan/:id

Response Body Success:

```json
{
  "status": "success",
  "message": "laporan berhasil dihapus"
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
