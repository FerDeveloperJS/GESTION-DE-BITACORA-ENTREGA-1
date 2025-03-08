### CASOS DE PRUEBA INICIAR DE SESIÓN

### Casos normales

## Caso de prueba #1: Caso normal

Email | Contraseña | Resultado esperado |
----------------------|--------------|----------------------|
`usuario1@outlook.com` | `Contraseña123` | Inicio de sesión exitoso, el sistema otorga acceso. |

## Caso de prueba #2: Caso normal

Email | Contraseña | Resultado esperado |
----------------------|--------------|----------------------|
`soysebastian@gmail.com` | `Soysebas123` | Contraseña incorrecta. Intente de nuevo|


## Caso de prueba #3: Caso normal

Email | Contraseña | Resultado esperado |
----------------------|--------------|----------------------|
`USUARIO123@GMAIL.COM` | `Contraseña1222` | Inicio de sesión exitoso, el sistema otorga acceso. |



### Casos extremos

## Caso de prueba #1: Caso extremo


Email | Contraseña | Resultado esperado |
----------------------|--------------|----------------------|
`lucas🚀@gmail.com` | `lucas12345` | Error: Correo con caracteres especiales, intenta de nuevo

## Caso de prueba #2: Caso extremo

Email | Contraseña | Resultado esperado |
----------------------|--------------|----------------------|
`lucas@gmail.com` | `lucas12345🚀` | Error: Cotraseña con caracteres especiales, intenta de nuevo



## Caso de prueba #3: Caso extremo

| Email               | Contraseña  | Intento | Resultado esperado                                |
|---------------------|------------|---------|--------------------------------------------------|
| `lucas@gmail.com`  | `wrong123`  | 1       | Credenciales incorrectas, intenta de nuevo      |
| `lucas@gmail.com`  | `wrong123`  | 9       | Credenciales incorrectas, intenta de nuevo      |
| `lucas@gmail.com`  | `wrong123`  | 10      | Demasiados intentos fallidos. Cuenta bloqueada  |
| `lucas@gmail.com`  | `Lucas1234` | 11      | Acceso denegado, intente mas tarde        |





### Casos de error

## Caso de prueba #1: Caso de prueba de error

Email | Contraseña | Resultado esperado |
----------------------|--------------|----------------------|
luciana@gmail.com      |            | Error: La contraseñsa es obligatoria|


## Caso de prueba #2: Caso de prueba de error

Email | Contraseña | Resultado esperado |
----------------------|--------------|----------------------|
`soypepito@gmail.com` | `pepito123` | Error: Este correo no existe|

## Caso de prueba #3: Caso de prueba de error

Email | Contraseña | Resultado esperado |
----------------------|--------------|----------------------|
      |   hola1234         | Error: El Email es obligatorio|



### CASOS DE PRUEBA REGISTRAR SESION

### Casos normales



## Caso de prueba #1: Caso normal

| Nombre        | Email                     | Contraseña       | Resultado esperado                    |
|--------------|--------------------------|----------------|----------------------------------|
| Juan  | juan@example.com         | Segura123      | Usuario registrado correctamente |

## Caso de prueba #2: Caso normal

| Nombre      | Email                        | Contraseña  | Resultado esperado                    |
|------------|----------------------------|------------|----------------------------------|
| Ana | ANA.LOPEZ@EXAMPLE.COM       | Clave1234  | Usuario registrado correctamente |

## Caso de prueba #3: Caso normal

| Nombre         | Email                    | Contraseña         | Resultado esperado                    |
|--------------|------------------------|----------------|----------------------------------|
| Carlos | carlos@example.com   | Carlos123456789 | Usuario registrado correctamente |

### Casos extremos

## Caso de prueba #1: Caso extremo

| Nombre         | Email                    | Contraseña         | Resultado esperado                    |
|--------------|------------------------|----------------|----------------------------------|
| Pepe | pepe@example.com   | pepe4 | Error: Contraseña muy debil (minimo: 6 caracteres) |


## Caso de prueba #2: Caso extremo

| Nombre         | Email                    | Contraseña         | Resultado esperado                    |
|--------------|------------------------|----------------|----------------------------------|
| Julian | julian@example.com   | pepeX7#vM9qLp2@tZfW8kB3sRjYD5Nc6gHTA!d4CmVu | Error: Contraseña demasiado larga (maximo: 50 caracteres) |

## Caso de prueba #3: Caso extremo

| Nombre         | Email                    | Contraseña         | Resultado esperado                    |
|--------------|------------------------|----------------|----------------------------------|
| Matias | Matias_X9yZ7mTqLp2@superlongemaildomain.com   | juli1234 | Error: Email demasiado largo (maximo: 50 caracteres) |


### Casos de error

## Caso de prueba #1: Caso de prueba de error


| Nombre         | Email                    | Contraseña         | Resultado esperado                    |
|--------------|------------------------|----------------|----------------------------------|
| María | maria@example.com   | maria456 | Error: Este email ya esta registrado |

## Caso de prueba #2: Caso de prueba de error


| Nombre         | Email                    | Contraseña         | Resultado esperado                    |
|--------------|------------------------|----------------|----------------------------------|
| Sofía | sofia@example.com   |  | Error: Debes llenar el campo de contraseña |


## Caso de prueba #3: Caso de prueba de error

| Nombre         | Email                    | Contraseña         | Resultado esperado                    |
|--------------|------------------------|----------------|----------------------------------|
| Roberto | roberto.example.com   | Roberto123 | Error: El email no tiene un formato valido |



### CASOS DE PRUEBA REGISTRAR ACTIVIDAD

### Casos normales

## Caso de prueba #1: Caso normal

| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2025-03-07 10:00 | Supervisor1 | Inspección de seguridad | Sí | Responsable1 | Soleado, 25°C | La actividad se registra exitosamente en `actividades` de `Bitácora`. |  


## Caso de prueba #2: Caso normal

| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2025-03-07 14:30 | Supervisor2 | Mantenimiento preventivo | Sí | Responsable2 | Nublado, 20°C | La actividad se registra exitosamente en `actividades` de `Bitácora`|  


## Caso de prueba #3: Caso normal

| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2025-03-08 08:00 | Supervisor3 | Revisión de equipos | Sí | Responsable3 | Lluvioso, 18°C | La actividad se registra exitosamente en `actividades` de `Bitácora`. |  


### Casos extremos

## Caso de prueba #1: Caso extremo

| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2075-01-01 12:00 | Supervisor1 | Inspección de emergencia | Sí | Responsable4 | Desconocido | Error: No se puede establecer una fecha futura, solo hasta el dia de hoy. |  


## Caso de prueba #2: Caso extremo

| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2025-03-07 11:00 | Supervisor2 | *(Texto de 3,001 caracteres)* | Sí | Responsable5 | Soleado, 27°C | Error: Debes modificar la descripcion de esta actividad, caracteres maximos(3,000) |  


## Caso de prueba #3: Caso extremo


| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2075-01-01 12:00 | Supervisor3 | Compra de materiales | Sí | Responsable7 | Desconocido | Error: No se puede establecer una fecha pasada. Solo pasada 1 semana. |  


### Casos de error

## Caso de prueba #1: Caso de error

| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2025-03-07 09:30 |  | Revisión de equipos | Sí | Responsable7 | Soleado, 22°C | Error: No se puede crear una activididad, porque no existe un supervisor. |  


## Caso de prueba #2: Caso de error

| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2025-03-07 13:45 | Supervisor1 |  | Sí | Responsable8 | Lluvioso, 19°C | Error: No se puede crear una actividad sin descripcion |  


## Caso de prueba #3: Caso de error

| **Fecha y Hora** | **Supervisor** | **Descripción** | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado** |  
|-----------------|--------------|----------------|-----------|--------------|----------------------|------------------|  
| 2025-03-07 15:00 | Supervisor3 | Verificación de protocolos | Sí |  | Soleado, 24°C | Error: No se puede crear una actividad sin responsable |


### CASOS DE PRUEBA CONSULTAR ACTIVIDAD

### Casos normales

## Caso de prueba #1: Caso normal

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-01       | 2025-03-07       |  Se listan todas las actividades registradas entre el 1 y el 7 de marzo de 2025. |  


## Caso de prueba #2: Caso normal

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-05 | 2025-03-05 | Se muestra la lista de actividades del 5 de marzo de 2025. | 


## Caso de prueba #3: Caso normal

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-01       | 2025-03-02       |  Se listan todas las actividades registradas entre el 1 y el 2 de marzo de 2025. |  


### Casos extremos

## Caso de prueba #1: Caso extremo

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-01       | 2025-03-9       |  Error: No se pueden listar actividades más alla de una semana |  


## Caso de prueba #2: Caso extremo

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-14       | 2025-03-11       |  Error: No se pueden listar actividades porque hay un error entre el rango de fechas |


## Caso de prueba #3: Caso extremo

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-02       | 2025-03-11       |  Error: No se pueden listar actividades que hayan pasado mas de 1 semana |





### Casos de error

## Caso de prueba #1: Caso de error

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-01 |  |  Error: Debes indicar una fecha de fin |


## Caso de prueba #2: Caso de error

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
|  | 2025-03-07 |  Error: Debes indicar una fecha de inicio |



## Caso de prueba #3: Caso de error

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
|  |  |  Error: Debes indicar una fecha de inicio y una fecha de fin |


### CASOS DE PRUEBA GENERAR REPORTE

### Casos normales

## Caso de prueba #1: Caso normal

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-01 | 2025-03-07 | Se genera un reporte en **PDF** con todas las actividades registradas en ese período. | 


## Caso de prueba #2: Caso normal

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-05 | 2025-03-05 | Se genera un reporte en **PDF** con todas las actividades registradas en ese dia. |


## Caso de prueba #3: Caso normal

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-08 | 2025-03-08 | Se genera un reporte en **PDF** con todas las actividades registradas en ese dia. |


### Casos extremos

## Caso de prueba #1: Caso extremo

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-01       | 2025-03-9       |  Error: No se puede generar reporte de actividades más alla de una semana |

## Caso de prueba #2: Caso extremo

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-14       | 2025-03-11       |  Error: No se puede generar reporte de actividades porque hay un error entre el rango de fechas |


## Caso de prueba #3: Caso extremo


| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-02       | 2025-03-11       |  Error: No se puede generar reporte de actividades que hayan pasado mas de 1 semana |



### Casos de error

## Caso de prueba #1: Caso de error

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
|  | 2025-03-08 | Error: Debes indicar una fecha de inicio. |

## Caso de prueba #2: Caso de error

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
| 2025-03-08 |  | Error: Debes indicar una fecha de fin. |

## Caso de prueba #3: Caso de error

| **Fecha de inicio** | **Fecha de fin** | **Resultado esperado** |  
|------------------|------------------|------------------|  
|  |  | Error: Campos de fecha de inicio y fecha fin son obligatorios. |




### CASOS DE PRUEBA CAMBIAR CONTRASEÑA

### Casos normales

## Caso de prueba #1: Caso normal

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| lucas@gmail.com | ClaveActual!123      |  NuevaClave123 | Contraseña cambiada con exito |



## Caso de prueba #2: Caso normal

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| blandon@gmail.com | blandon123 |  Blandon456* | Contraseña cambiada con exito |

## Caso de prueba #3: Caso normal

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| maria@gmail.com | maria123 |  Maria90456* | Contraseña cambiada con exito |


### Casos extremos

## Caso de prueba #1: Caso extremo

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| pepe@gmail.com | pepe1 | pepe4 | Error: Contraseña muy debil (minimo: 6 caracteres) |


## Caso de prueba #2: Caso extremo

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| julian@gmail.com | juli121 | juliaX7#vM9qLp2@tZfW8kB3sRjYD5Nc6gHTA!d4CmVu | Error: Contraseña demasiado larga (maximo: 50 caracteres) |




## Caso de prueba #3: Caso extremo  

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| luna@gmail.com | luna1 | luna1 | Error: La nueva contraseña es la misma que la contraseña actual |






### Casos de error

## Caso de prueba #1: Caso de error

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| lucas@gmail.com | ClaveActual!123      |           | Error: Campo de nueva contraseña vacia |

## Caso de prueba #2: Caso de error

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| matias@gmail.com | ClaveActual9090      |  ClaveNueva123         | Error: La contraseña actual es incorrecta |

## Caso de prueba #3: Caso de error

| **Email**  | **Contraseña actual** | **Nueva contraseña**  | **Resultado esperado**  |  
|-------------|----------------------|----------------------|----------------------|  
| lucho@gmail.com | ClaveActual230     | luchoX7#vM9qLp2@tZfW8kB3sRjYD5Nc6gHTA!d4CmVu | Error: Contraseña demasiado larga (maximo: 50 caracteres) |



### CASO DE PRUEBA MOSTRAR RESUMEN

Este caso de prueba es unico ya que no se necesitan validar entradas por parte del usuario. Esto es lo que deberia devolver el sistema por si mismo

| **Fecha y Hora**     | **Supervisor**      | **Descripción**        | **Anexos** | **Responsable** | **Condiciones Climáticas** | **Resultado esperado**  |  
|----------------------|--------------------|------------------------|------------|----------------|---------------------------|-------------------------|  
| 2025-03-08 10:00 AM | Luis Pérez         | Inspección de equipo   | 2 imágenes | Juan Gómez     | Soleado                   | Resumen mostrado con detalles completos |  




