# notas-backend

Este repositorio contiene la solución a la prueba técnica que describe el backend del siguiente problema:

> Realizar aplicación que permita el ingreso del nombre de un estudiante, las 3 notas parciales, calcule la nota promedio y almacene el resultado en base de datos.

>La pantalla inicial muestra una tabla con los resultados registrados, al lado de cada registro el botón para eliminar el registro correspondiente, encima de la tabla el botón para realizar un nuevo registro.

> El formulario debe solicitar el nombre y las 3 notas parciales del estudiante, debe mostrar el resultado del cálculo del promedio debajo del formulario.
> Restricciones:
> a) El nombre del estudiante debe ser alfabético, no debe permitir números o caracteres especiales diferentes a acentuaciones.
> b) Las notas parciales deben ser mínimo 1.0 y máximo 5.0.
> c) Todos los datos son obligatorios.
> Script de base de datos del Punto 23 MER.




## Descripción
El presesente servidor está desarrollado en Node.js que consume una base de datos alojada en SQL Server

## Requisitos
- Node.js
- SQL Server

### Librerías
- "cors": "^2.8.5",
- "dotenv": "^16.0.1",
- "express": "^4.18.1",
-  "mssql": "^8.1.1"
