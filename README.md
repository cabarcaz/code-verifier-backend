# Proyecto backend 
Practica con Node + TS + Express + Swagger

- Dependencias de producción
  * express -> Usada para crear la app de Backend
  * dotenv -> Usada para crear variables de entorno privadas.
- Dependencias de desarrollo
  * nodemon -> Permite que los cambios se actualicen de manera automática.
  * typescript -> Dependencia de TS para poder transpilar() a código js.
  * concurrently -> Permite ejecutar comandos de manera concurrente.
  * eslint -> Formateador de código.
  * jest -> Herramienta para los test.
  * supertest -> 
  * serve -> 

- Scripts
~~~
    "start:dev":"node index.js" -> Ejecuta el archivo index.js en el entorno de node  
	"start:local": "npx nodemon index.js" -> Inicia el servidor con nodemon para que se reflejen los cambios de manera automática.
	"build": "npx tsc" -> Me transpila el código ts a js
	"start": "node dist/index.js", Ejecuta el código transpilado generado por el script build
	"dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"", Ejecuta de forma concurrente, asi puede estar actualizandose automaticamente.  
~~~

- Variables de entorno
  - PORT=8000


### Ejercicio 1

1. Creación de rutas (endpoints del servidor):
  Ruta tipo GET que devuelva una Response 200 con un JSON con la siguiente estructura:

~~~
“data”: {“message”: “Goodbye, world”}
~~~
Crear ruta "saludar" que reciba un parámetro query (?name=”Nombre”) y devuelva una Response 200 con un JSON con la siguiente estructura:
~~~
“data”: {
“message”: “Hola, {nombre pasado por parámetro o “anónimo” en caso de que no exista el parámetro}”
}
~~~