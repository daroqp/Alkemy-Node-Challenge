<center><h1> Challenge de Alkemy</h1></center>

![Image text](/src/storage/presentation/alkemyLogo.png)

***
&nbsp;
## **Backend Nodejs**

API Rest para explorar el mundo de Disney, la cual permitirá conocer y modificar los personajes que lo componen y entender en qué películas estos participaron.

&nbsp;
***

&nbsp;
## **Pasos a seguir 😀**
1. [Información general](#información-general)
2. [Tecnologias usadas](#tecnologías-usadas)
3. [Requerimientos](#requerimientos-📋)
4. [Instalación](#instalación-🚀)
5. [Como usar](#como-usar)

&nbsp;
## **Tabla de contenidos 🤓**
&nbsp;
### **Información general**
***
Aplicación por la cual vamos a poder crear, modificar y eliminar  personajes o películas/series, también se podrá ver información detallada de uno o buscar y filtrar por diferentes parámetros a través de los endpoints proporcionados por esta app.

Además de los endpoints para estas tareas, existen otros por los cuales debemos iniciar sesión o en su defecto crearnos una cuenta para poder obtener los permisos necesarios a la hora de utilizar algunas rutas debido a que la mayoría se encuentran protegidas.

Todos estos datos son persistentes mediante el uso de una base de datos relacional como MySQL donde cada entidad será guardada en su respectiva tabla.

### Diagrama entidad-relación:
![Image text](/src/storage/presentation/dbDiagram.png)

&nbsp;

## **Tecnologías usadas**
***
Lista de las tecnologías usadas en el proyecto:

* [Express](https://www.npmjs.com/package/express): Version 4.17.2
* [Bcryptjs](https://www.npmjs.com/package/bcryptjs): Version 2.4.3
* [Cors](https://www.npmjs.com/package/cors): Version 2.8.5
* [DotEnv](https://www.npmjs.com/package/dotenv): Version 14.3.2
* [Express-validator](https://www.npmjs.com/package/express-validator): Version 6.14.0
* [JWT](https://www.npmjs.com/package/jsonwebtoken): Version 8.5.1
* [Multer](https://www.npmjs.com/package/multer): Version 1.4.4
* [Mysql](https://www.npmjs.com/package/mysql2): Version 2.3.3
* [Sequelize](https://www.npmjs.com/package/sequelize): Version 6.15.0
* [Uuid](https://www.npmjs.com/package/uuid): Version 8.3.2
* [Swagger](https://www.npmjs.com/package/swagger-ui-express): Version 4.3.0

&nbsp;

## **Requerimientos 📋**
***
Para poder utilizar esta API de manera local es necesario tener instalado los siguientes programas dentro de nuestro sistema operativo.
 
 > NodeJS: Necesario para poder correr el servidor de manera local.

 >MySql: Necesario para poder persistir nuestros datos.

![Img text](https://img.shields.io/badge/node-16.15.0-green)
![Img text](https://img.shields.io/badge/mysql-latest-blue)

&nbsp;

## **Instalación 🚀**
***
Para poder usar la app es necesario descargarla de la siguiente manera:
```javascript
$ git clone https://github.com/daroqp/Alkemy-Node-Challenge.git
$ cd ./Alkemy-Node-Challenge
$ npm install
```

Muy bien 😄!!

Ahora con el proyecto descargado es hora de settear nuestras variables de entorno que son necesarias para el funcionamiento de nuestra App.

Debemos renombrar el archivo ```.example.env``` a ```.env```, dentro de este hay algunas variables a las cuales debemos asignarles los valores requeridos:
```javascript
PORT=3000                   //Puerto en donde se levanta el servicio por ejemplo 3000
DB_USER=root                //Nombre de usario de la base de datos, por defecto es root 
DB_PASSWORD=exmaple123      //Contrase;a del usuario de la base de datos ingresado
DB_NAME=example_db          //Nombre del schema en la cual vamos a guardar los datos, si no creaste una no hay problema por que se creara con el nombre que pusiste en esta variable de entorno
SECRET=secretExample        //Clave secreta para el uso de authentication en las rutas protegidas
SENDGRID_API_KEY=           //No es necesaria para la prueba de manera local
```
💾 Una vez setteadas las variables de entorno es hora de la creacion/configuracion de la base de datos 💾

Creación del schema en la base de datos:

```javascript
npx sequelize db:create
```

Ejecutamos las migraciones disponibles para la creación de las tablas que usaremos en esta aplicación:

```javascript
npx sequelize db:migrate
```

Una vez creadas las tablas es momento de instalar los registros que vienen por defecto

```javascript
npx sequelize db:seed:all
```

El comando de anterior nos crea algunos registros necesario para el uso de la app, uno de estos sería la cuenta de administrador que es la siguiente:

```javascript
    email: admin@test.com
    password: admin123
```

Con todas las variables inicializadas y la base de datos  ya configurada es hora de poner en funcionamiento de manera local nuestra aplicación.

&nbsp;

# 🏴‍☠  🏴‍☠️  🏴‍☠    ️🏴‍☠️  🏴‍☠️
```javascript
$ npm run dev
```
![Image text](/src/storage/presentation/doc-0.png)
# 🏴‍☠  🏴‍☠️  🏴‍☠    ️🏴‍☠️  🏴‍☠️

&nbsp;

## **Como usar**

***

Si todo salió bien deberíamos ir a [localhost:3000/docs](http://localhost:3000/docs) <"3000" es el puerto que está por defecto>, donde se veria algo así:

&nbsp;

![Image text](/src/storage/presentation/doc-1.png)

&nbsp;

Una vez en esta página debes iniciar sesión con el usuario John Doe que tiene permisos de administrador, con esos permisos tenemos la posibilidad de entrar a algunos endpoints en donde podemos crear, modificar o eliminar personajes o películas/series.

Muy bien, vamos a iniciar session para hacerlo debemos ingresar al login haciendo click en el siguiente endpoint(1) donde se despliega un menú mostrándonos más información con respecto al endpoint, como por ejemplo los parámetros o la información necesaria dentro del cuerpo de la petición(2) para ser procesadas por el servidor.

&nbsp;

Más abajo se encuentran todas las respuestas posibles que el servidor nos puede brindar junto con su código http y descripción de la respuesta(3).

![Image text](/src/storage/presentation/doc-2.png)

&nbsp;

* Para poder testar el endpoint debemos clickear la opción Try it out.
* Completar la información pedida para el cuerpo de la petición.
* Finalizando con clickear en Execute.

&nbsp;

![Image text](/src/storage/presentation/doc-3.png)

&nbsp;

Cuando nos devuelve la respuesta del servidor nos trae con él nuestro token de autorización que debemos usar para ingresar a los endpoints protegidos, se debe copiar e ingresarlo en la opción Autohorize que tiene el candadito que se encuentra en la parte superior derecha de la página.

&nbsp;

![Image text](/src/storage/presentation/doc-4.png)

![Image text](/src/storage/presentation/doc-5.png)

&nbsp;

Autorizamos y cerramos la ventana emergente, con todo esto listo estamos en condiciones de poder explorar el resto de la API REST. 