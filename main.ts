import { MongoClient, ObjectId } from "npm:mongodb";

/*

const mongoUrl = Deno.env.get('mongoUrl')

if (!mongoUrl) {
  console.error('Url inválida');
}

const apiNinjaKey = Deno.env.get('apiNinjaKey')

if (!apiNinjaKey) {
  console.error('Api key inválida');
}

const client = new MongoClient(mongoUrl);
await client.connect();
const db = await client.db('Nombre Base de Datos');

//const xCollection = db.collection<>('nombreColeccion');kids

 */

const handler = async(req : Request):Promise<Response> =>{

  return new Response('Endpoint no encontrado', { status: 404 });
}



Deno.serve({ port: 8080 }, handler);