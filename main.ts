import { MongoClient, ObjectId } from "npm:mongodb";


const mongoURL = Deno.env.get('mongoURL')

if (!mongoURL) {
  console.error('Url inválida');
  throw new Error('Url inválida');
}

const client = new MongoClient(mongoURL);
await client.connect();
const db = await client.db('Nombre Base de Datos');

//const xCollection = db.collection<>('nombreColeccion');kids

const apiNinjaKey = Deno.env.get('apiNinjaKey')

if (!apiNinjaKey) {
  console.error('Api key inválida');
}


const handler = async(req : Request):Promise<Response> =>{

  return new Response('Endpoint no encontrado', { status: 404 });
}



Deno.serve({ port: 8080 }, handler);