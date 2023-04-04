import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv'

//* Configuration the .env file
dotenv.config()

//* Create Express app
const app: Express = express()
const port: string | number = process.env.PORT || 8000

//* Define the first route app
// Planteamos la raíz/ruta del proyecto, como parámetro recibimos una request y un response
// la función anónima se ejecutar cuando reciba una petición en la ruta indica.
app.get('/', (req: Request, res: Response) => {
  // Send hello world
  res.send('Welcome to API Restfull Express + Nodemon + Jest + TS + Swagger + Mongoose') // Respuesta que enviaremos al ejecutarse el get
})

app.get('/hello',(req: Request, res: Response) => {
  res.send('Welcome to GET Route: HELLO')
} )


//* Execute app and listen request to port
// Recibe el puerto e indicamos si debe ejecutar algo o no.
app.listen(port, () => {
  console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
  // Mensaje que mostrara por consola y me mostrara la ruta donde se ejecuta el server.
})