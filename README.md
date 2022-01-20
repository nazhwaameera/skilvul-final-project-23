# API Spec

Login User :

- Email: eldodo@gmail.com
- Password: eldo123

Login Admin :

- Endpoint: https://final-project-23.netlify.app/admin
- Email: eldodo6411@gmail.com
- Password: Pokwe123-

Login Mentor :

- Endpoint: https://final-project-23.netlify.app/mentor/login
- Email: mentor1@gmail.com
- Password: mentor123

#### Quest

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "id_mentor": "string",
  "id_maps": "string",
  "tanggal_diberikan": "date",
  "tanggal_diselesaikan": "date",
  "konten": "string",
  "status": "string",
  "files": {
    [ObjectId("file1"), ObjectId("file2"), ObjectId("file3")],ObjectId("file4")], ObjectId("file5")]
  },
  "feedback":{
    [ObjectId("feedback")
  },
}
```

### File

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "id_quest": "string",
  "file": "string"
}
```

#### Feedback

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "id_mentor": "string",
  "id_quest": "string",
  "konten_quest": "string",
  "tanggal": "date",
  "konten": "string"
}
```

#### Achievement

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "id_mentor": "string",
  "tanggal_diberikan": "date",
  "id_maps": "string",
  "files": {
    [ObjectId("file1"), ObjectId("file2"), ObjectId("file3")],ObjectId("file4")], ObjectId("file5")]
  },
  "title": "string",
}
```

#### Todo

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "konten": "string",
  "status": "string"
}
```

## Peserta (Siswa)

### Peserta

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "email": "string",
  "password": "string",
  "kelas": "string",
  "asal_sekolah": "string",
  "level": "number",
  "exp": "number",
  "mentor_id": "string",
  "quests": {
    [ObjectId("quest1"), ObjectId("quest2"), ObjectId("quest3")],ObjectId("quest4")], ObjectId("quest5")]
  },
  "feedbacks": {
    [ObjectId("feedback1"), ObjectId("feedback2"), ObjectId("feedback3")],ObjectId("feedback4")], ObjectId("feedback5")]
  },
  "achievements": {
    [ObjectId("achievement1"), ObjectId("achievement2"), ObjectId("achievement3")],ObjectId("achievement4")], ObjectId("achievement5")]
  },
  "todos": {
    [ObjectId("todo1"), ObjectId("todo2"), ObjectId("todo3")],ObjectId("todo4")], ObjectId("todo5")]
  },
}
```

### Login

Request :

- Method : POST
- Endpoint : `/login`
- Header :
  - Accept: application/json
- Body :

```json
{
  "email": "string",
  "password": "string"
}
```

### Melihat profil

Request :

- Method : GET
- Endpoint : `/profil/:nama`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "kelas": "string",
  "asal_sekolah": "string",
  "level": "number",
  "exp": "number",
  "quests": {
    [ObjectId("quest1"), ObjectId("quest2"), ObjectId("quest3")],ObjectId("quest4")], ObjectId("quest5")]
  },
  "achievements": {
    [ObjectId("achievement1"), ObjectId("achievement2"), ObjectId("achievement3")],ObjectId("achievement4")], ObjectId("achievement5")]
  },
}
```

Relation: One to Many
Description: One user -> Many quests, One user -> Many achievements
Method: Referencing

### Melakukan mentoring

Request :

- Method : GET
- Endpoint : `/mentoring`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": ObjectId("AA1"),
  "mentor_id": "string",
  "mentor_nama": "string",
  "mentor_notelp": "string"
}
```

Relation: One to One
Description: One user -> One mentor
Method: Embedded

### Melihat feedbacks

Request :

- Method : GET
- Endpoint : `/feedbacks`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "kelas": "string",
  "asal_sekolah": "string",
  "level": "number",
  "exp": "number",
  "feedbacks": {
    [ObjectId("feedback1"), ObjectId("feedback2"), ObjectId("feedback3")],ObjectId("feedback4")], ObjectId("feedback5")]
  },
}
```

Relation: One to Many
Description: One user -> Many feedbacks
Method: Referencing

### Melihat achievements

Request :

- Method : GET
- Endpoint : `/profile`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "kelas": "string",
  "asal_sekolah": "string",
  "level": "number",
  "exp": "number",
  "quests": {
    [ObjectId("quest1"), ObjectId("quest2"), ObjectId("quest3")],ObjectId("quest4")], ObjectId("quest5")]
  },
  "achievements": {
    [ObjectId("achievement1"), ObjectId("achievement2"), ObjectId("achievement3")],ObjectId("achievement4")], ObjectId("achievement5")]
  },
}
```

Relation: One to Many
Description: One user -> Many achievements
Method: Referencing

### Melihat to-do list

Request :

- Method : GET
- Endpoint : `/todos`
- Header :
  - Accept: application/json

note:
display: fixed (di pojok kanan bawah)

Response :

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "kelas": "string",
  "asal_sekolah": "string",
  "level": "number",
  "exp": "number",
  "todos": {
    [konten("todo1"), konten("todo2"), konten("todo3")],konten("todo4")], konten("todo5")]
  },
}
```

Relation: One to Many
Description: One user -> Many todos
Method: Embedded

### Menambah item pada to-do list

- Method : POST
- Endpoint : `/todos/add-todo`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "konten": "string",
  "status": "string"
}
```

Relation: One to Many
Description: One user -> Many todos
Method: Embedded

Response :

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "kelas": "string",
  "asal_sekolah": "string",
  "level": "number",
  "exp": "number",
  "todos": {
    [konten("todo1"), konten("todo2"), konten("todo3")],konten("todo4")], konten("todo5")]
  },
}
```

### Menghapus item pada to-do list

Request :

- Method : PATCH
- Endpoint : `/todos/:id_todo`
- Header :
  - Accept: application/json

Response :

```json
{
  "code": "number",
  "status": "string"
}
```

### Melihat progres dalam satu map -> melihat quest yang sudah dan belum diselesaikan, jumlah quest yang harus diselesaikan tiap minggu, melihat achievements

Request :

- Method : GET
- Endpoint : `/maps/:id_maps`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "level": "number",
  "quests": {
    [ObjectId("quest1"), ObjectId("quest2"), ObjectId("quest3")],ObjectId("quest4")], ObjectId("quest5")]
  },
  "achievements": {
    [ObjectId("achievement"), files("achievement"), title("achievement")]
  },
}
```

### Menyelesaikan quest

- Method : POST
- Endpoint : `/maps/:id_maps/quests/:id_quest`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "id_maps": "string",
  "id_quest": "string",
  "file": "string"
}
```

Relation: One to Many
Description: One quest -> Many files
Method: Embedded

Response :

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "id_maps": "string",
  "id_quest": "string",
  "file": "string"
}
```

### Melihat quest yang sudah diselesaikan pada satu map ---

Request :

- Method : GET
- Endpoint : `/maps/:id_maps/quests?filter=done`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "level": "number",
  "quests": {
    [konten("quest1"), konten("quest2"), konten("quest3")], konten("quest4")], konten("quest5")]
  },
}
```

Relation: One to One
Description: One user -> One map
Method: Referencing

## Mentor

### Mentor

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "email": "string",
  "password": "string",
  "no_telp": "string",
  "peserta_asuh": {
    [ObjectId("peserta1"), ObjectId("peserta2"), ObjectId("peserta3")],ObjectId("peserta4")], ObjectId("peserta5")]
  }
}
```

### Login

Request :

- Method : POST
- Endpoint : `/login/mentor`
- Header :
  - Accept: application/json

### Melihat list peserta asuh dan status pengerjaan quest tiap peserta asuh

Request :

- Method : GET
- Endpoint : `/dashboard`
- Header :
  - Accept: application/json

Response :

```json
{
  "peserta_asuh": {
    [ObjectId("peserta1"), ObjectId("peserta2"), ObjectId("peserta3")],ObjectId("peserta4")], ObjectId("peserta5")]
  }
}
```

note: query quest dari peserta

### Melihat detail penyelesaian quest tiap peserta

Request :

- Method : GET
- Endpoint : `/dashboard/detail-penyelesaian/:id_quest`
- Header :
  - Accept: application/json

Response :

```json
{
  {
  "_id": ObjectId("AA1"),
  "id_siswa": "string",
  "tanggal_diberikan": "date",
  "tanggal_diselesaikan": "date",
  "konten": "string",
  "status": "string",
  "files": {
    [ObjectId("file1"), ObjectId("file2"), ObjectId("file3")],ObjectId("file4")], ObjectId("file5")]
  }
}
```

### Memberikan feedback

Request :

- Method : POST
- Endpoint : `/:id_quest?create=feedback`
- Header :
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("AA1"),
  "konten": "string"
}
```

Response :

```json
{
  "status": "string",
  "data": {
    "_id": ObjectId("AA1"),
    "konten": "string"
  }
}
```

### Memberikan quest baru

Request :

- Method : POST
- Endpoint : `/:id_quest?create=quest`
- Header :
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("AA1"),
  "konten": "string"
}
```

Response :

```json
{
  "status": "string",
  "data": {
    "_id": ObjectId("AA1"),
    "konten": "string"
  }
}
```

## Admin

### Login

Request :

- Method : POST
- Endpoint : `/login/admin`
- Header :
  - Accept: application/json
- Body :

```json
{
  "email": "string",
  "password": "string"
}
```

### Menambahkan peserta baru (diarahkan ke mentor)

Request :

- Method : POST
- Endpoint : `/create-peserta`
- Header :
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "email": "string",
  "password": "string",
  "kelas": "string",
  "asal_sekolah": "string",
  "level": "number",
  "exp": "number",
  "mentor_id": "string"
}
```

Response :

```json
{
  "status": "string",
  "data": {
    "_id": ObjectId("AA1"),
    "nama": "string",
    "email": "string",
    "password": "string",
    "kelas": "string",
    "asal_sekolah": "string",
    "level": "number",
    "exp": "number",
    "mentor_id": "string"
  }
}
```

### Menambahkan mentor baru

Request :

- Method : POST
- Endpoint : `/create-mentor`
- Header :
  - Accept: application/json
- Body :

```json
{
  "_id": ObjectId("AA1"),
  "nama": "string",
  "email": "string",
  "password": "string",
  "no_telp": "string"
}
```

Response :

```json
{
  "status": "string",
  "data": {
    "_id": ObjectId("AA1"),
    "nama": "string",
    "email": "string",
    "password": "string",
    "no_telp": "string"
  }
}
```
