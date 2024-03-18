# Hackathon-BHP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Reto Cambio de Turno**

## Introducción
Este repositorio contiene el proyecto desarrollado para el Hackathon BHP, una plataforma interactiva para la gestión y visualización de datos para realizar el cambio de turno. El proyecto está construido utilizando React junto con varias bibliotecas complementarias para mejorar la experiencia de usuario y facilitar el desarrollo.

## Despliegue del Proyecto
Para facilitar la visualización y la interacción con nuestra plataforma, hemos desplegado el proyecto en Vercel. Esto permite acceder a una versión en vivo de la aplicación, donde se pueden explorar todas sus funcionalidades sin necesidad de realizar la instalación localmente. A continuación, encontrará el enlace directo al sitio del proyecto:

**Accede a la plataforma:** [Plataforma de Gestión de Cambio de Turno - Hackathon BHP](https://hackathon-bhp-vite-two.vercel.app/)

## Requisitos previos
Antes de comenzar con la instalación y configuración de este proyecto, es necesario tener instalado:

- Node.js (Versión recomendada: 16.x o superior)
- NPM (Node Package Manager, viene con Node.js)

## Instalación
Para instalar y configurar este proyecto en su entorno local, siga los pasos a continuación:

### 1. Clonación del repositorio
   Ejecute el siguiente comando para clonar el repositorio:
  ```bash
   git clone https://github.com/tuusuario/hackathon-bhp.git
   cd hackathon-bhp
  ```

### 2. Instalación de dependencias
  Ejecute el siguiente comando para instalar las dependencias del proyecto:
  ```bash
    npm install
  ```

## Configuración
Para correr la aplicación correctamente, puede ser necesario configurar variables de entorno específicas o realizar ajustes adicionales según el entorno de desarrollo o producción. Por el momento, este proyecto no requiere configuraciones especiales más allá de las dependencias instaladas.

## Acceso a las vistas

Una vez que la aplicación esté en ejecución, podrá acceder a diversas vistas que forman parte de la funcionalidad integral del sistema. A continuación, se describen las rutas y su propósito:

### Login
- **Ruta:** `http://localhost:3000/login`
- **Descripción:** Esta vista simula el proceso de inicio de sesión en la plataforma. Aquí, los usuarios pueden introducir sus credenciales para acceder a las distintas funcionalidades que ofrece la aplicación.

### Subida de Archivos
- **Ruta:** `http://localhost:3000/subirArchivo`
- **Descripción:** Permite a los usuarios cargar archivos al sistema para su procesamiento o visualización. Esta página facilita una forma eficiente de introducir datos y proporciona una vista previa para verificar la exactitud del contenido cargado.

### Vista de Administrador
- **Ruta:** `http://localhost:3000/vistaAdministrador`
- **Descripción:** En esta vista, puede realizar revisiones, filtros y publicar archivos como si fuera el administrador.

### Vista de Operadores
- **Ruta:** `http://localhost:3000/vistaOperarios`
- **Descripción:** Diseñada para ser visualizada en monitores de salas de control, esta vista muestra información relevante para los operarios en tiempo real.

## Funcionalidades de Filtro
La plataforma ofrece varias opciones de filtro para mejorar la experiencia de usuario del administrador y facilitar la búsqueda y gestión de datos. Los filtros disponibles permiten refinar los resultados basados en:

**Operario:** Filtra los datos mostrando solo aquellos que corresponden a un operario específico.

**Bus:** Permite visualizar los datos relacionados con un bus en particular.

**Ubicación:** Filtra la información para mostrar únicamente los datos asociados a una ubicación específica.

**Asignación:** Facilita la visualización de datos basados en la asignación operarios y buses.

### Uso de Filtros
Para utilizar los filtros, navegue a la vista de administrador (http://localhost:3000/vistaAdministrador)  e ingrese los criterios de filtrado específicos en el campos proporcionado. La aplicación actualizará automáticamente los resultados mostrados para reflejar solo aquellos que cumplan con los criterios seleccionados.

### Ejemplos de Aplicación de Filtros
Para ver la información correspondiente a un operario específico, ingrese su nombre o apellido en el campo de búsqueda.<br>
Para obtener información asociada a un bus particular, ingrese el código completo del bus o su número en el campo de búsqueda.<br>
Para filtrar los datos por ubicación, introduzca el código de la ubicación deseada en el campo de búsqueda.<br>
Para filtrar los datos por asignación, ingrese «Sí» o «No» en el campo de búsqueda. 

Estas herramientas de filtrado están diseñadas para ayudar a los usuarios a navegar y administrar grandes volúmenes de datos de manera más eficiente, lo que mejora la usabilidad de la plataforma.

## Ejecución de pruebas
Para realizar pruebas utilizando datos de ejemplo, descargue y utilice el archivo `ejemplo-con-nombres.txt` ubicado en la carpeta `src/assets/data`.

### Uso de datos de prueba
1. Asegúrese de tener el archivo `ejemplo-con-nombres.txt` en la ubicación correcta.
2. Siga las instrucciones específicas de la aplicación para cargar o utilizar este archivo durante las pruebas.

## Ejecución
Para iniciar la aplicación en modo de desarrollo, ejecute:
  ```bash
    npm start
  ```
  
Para construir la aplicación para producción, ejecute:
  ```bash
    npm run build
  ```

## Simulación de Vista de Operadores para Pruebas
En una pestaña, realice los cambios o actualizaciones como si fuera el administrador.<br>
En la otra pestaña, navegue a la vista de operadores para observar cómo se reflejan los cambios en tiempo real. Esta pestaña actuará como la pantalla que se mostrará en el monitor de la sala.

**Nota:** Esta forma de probar es útil para el desarrollo y las pruebas preliminares, especialmente cuando no se tiene acceso a los monitores de sala reales. Asegúrese de tener ambas pestañas abiertas simultáneamente para simular y observar los cambios en la vista de operadores. 

## Soporte
Si tiene alguna duda o necesita asistencia con la implementación o el funcionamiento del sistema, no dude en abrir un issue en este repositorio o contactar al equipo de desarrollo a través de los correos [alexandraronvera@gmail.com](mailto:alexandraronvera@gmail.com), [carmenarayarodriguez@gmail.com](mailto:carmenarayarodriguez@gmail.com), [fdafilgueira@gmail.com](mailto:fdafilgueira@gmail.com) o [naylimar27@gmail.com](mailto:naylimar27@gmail.com).
