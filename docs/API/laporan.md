# API laporan

## create laporan

Endpoint: POST /api/laporan

Request Body :

```json
{
  "user_id": 1,
  "toko_id": 1,
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
    "user_id": 1,
    "toko_id": 1,
    "laporan_id": 1,
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
      "laporan_id": 1,
      "user_id": 1,
      "toko_id": 1,
      "judul": "Laporan penipuan",
      "alasan": "Tokonya menjual barang yang tidak sesuai",
      "image": "image1.png",
      "info_toko": {
        "nama": "arip",
        "deskripsi": "nasi goreng",
        "image": "jpg",
        "status": "Active",
        "jam_operasional": "10.00 sampai 11.000",
        "loksi": "sapen",
        "no_telp": "098080"
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

## get laporan by id

Endpoint: GET /api/laporan/:id

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "laporan_id": 1,
    "user_id": 1,
    "toko_id": 1,
    "judul": "Laporan penipuan",
    "alasan": "Tokonya menjual barang yang tidak sesuai",
    "image": "image1.png",
    "info_toko": {
      "nama": "arip",
      "deskripsi": "nasi goreng",
      "image": "jpg",
      "status": "Active",
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
