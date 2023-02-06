# API Yunex

Una api diseñada para poder gestionar el laboratorio,
seguimiento de modulos, reporte de mantenimiento,
operador registrado, y demás implementaciónes que se irán
añadiendo en el transcurso

Usa NPM para la gestión de los modulos, sigue el principio de REST con Expres, y usa variables de entorno para mantener aisladas los datos sensibles del desarrollo (o por lo menos en producción)

## API Reference

#### Registrarse

```
  POST /singup
```

| Parameter   | Type     | Description                |
| :--------   | :------- | :------------------------- |
| `username`  | `string` | **Required**.  |
| `password`  | `string` | **Required**.  |

#### Iniciar sesión

```
  POST /singin
```

| Parameter   | Type     | Description                |
| :--------   | :------- | :------------------------- |
| `username`  | `string` | **Required**.  |
| `password`  | `string` | **Required**.  |

#### Listar usuarios

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | `string` | **Required** el Bearer token.|

#### Listar usuarios

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | `string` | **Required** el Bearer token.|

#### Crear rol

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | `string` | **Required** el Bearer token.|
| `role`    | `string` | **Required** el nombre del rol.|
| `perms`   | `object` | **Required** objeto que contiene los permisos.|

#### Crear rol

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | `string` | **Required** el Bearer token.|
| `role`    | `string` | **Required** el nombre del rol.|
| `perms`   | `object` | **Required** objeto que contiene los permisos.|


#### Listar roles

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | `string` | **Required** el Bearer token.|

#### Actualizar rol

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | `string` | **Required** el Bearer token.|
| `role`    | `string` | **Required** el nombre del rol.|
| `perms`   | `object` | **Required** objeto que contiene los permisos.|


#### Remueve roles

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token`   | `string` | **Required** el Bearer token.|
| `role`    | `string` | **Required** el Bearer token.|
# YunexTrafficApi
