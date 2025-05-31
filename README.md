# Gestión de Bitácora para Supervisores de Obra

Este proyecto es una aplicación web/escritorio diseñada para permitir a los supervisores de obra registrar, consultar y gestionar la bitácora diaria de una construcción, garantizando la trazabilidad de todas las actividades realizadas.

## ✨ Funcionalidades principales

- 📌 **Registrar actividades** con fecha, hora, descripción, condiciones climáticas, responsables y anexos (imágenes o documentos).
- 📅 **Consultar actividades** en un rango específico de fechas.
- 🧾 **Generar reportes en PDF** sobre las actividades realizadas.
- 👤 **Crear cuentas de supervisores**.
- 🔐 **Iniciar sesión y gestionar contraseñas**.
- 🌐 **Visualización de actividades de todos los supervisores**, sin importar quién las creó.

## 🚀 Cómo ejecutar el proyecto


1. Clona este repositorio o descarga los archivos.
2. Tener Node.JS instalado en tu PC.
3. Asegúrate de que las dependencias necesarias estén incluidas.

## 🧑‍💻 Uso básico

### 1. Ejecutar en la consola (CLI)

- Ve al archivo interfaz.js.
- Asegurate de tener instalado NodeJS en tu PC.  
- Ejecuta el comando node interfaz.js
- Y te saldrá un menú que te ira guiando para probar todas las funcionalidades.


### 2. Ejecutar en la interfaz gráfica de escritorio (GUI)

- Abre la carpeta `GUI`.  
- Ve a `loginWindow` y abre el archivo `gestor-sesion.html` con la extensión de VS Code **"Open with Live Server"**.  
- Asegúrate de tener instalado **Electron** para que la aplicación funcione correctamente.  
- Crea una cuenta, después inicia sesión.
- Utiliza la interfaz para crear, consultar y generar reportes con botones y formularios amigables.


### 3. Ejecutar en la web

- Abre la carpeta WebGUI.
- Ve a `loginWindow` y abre el archivo `gestor-sesion.html` con la extensión de VS Code **"Open with Live Server"**. 
- Crea una cuenta, después inicia sesión.
- Utiliza la interfaz para crear, consultar y generar reportes con botones y formularios amigables.



## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Librerías/Frameworks JS como -> (Vitest "Para el tema de las pruebas unitarias", electron JS "Para la creacion de la aplicación de escritorio", sequelize "Para interactuar con la base de datos -> PostgreSQL", pdfkit "Para poder crear los documentos PDF".)


## 👤 Autor

Proyecto de Aula desarrollado por Mi como parte de la asignatura CÓDIGO LIMPIO del 3er semestre de Ingeniería de Sistemas - Universidad de Medellín.

