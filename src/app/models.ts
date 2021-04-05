
export interface Noticia {
    nombre: string,
    descripcion: string,
    imagen: string,
    id: string,
    fecha: Date,
}

export interface Cliente {
    uid: string,
    email: string,
    nombre: string,
    password: string,
    celular: string,
    imagen: string,
    referencia: string,
    ubicacion: any;
}

// export interface InfoReglamento {
    
// }

 export interface InfoReglamento {
   titulo?: string;
   regla?: string;
   puntos?: string;
   img?: string;
 }

// interface Puntos {
//   '1': string;
//   '2': string;
//   '3': string;
// }

export interface Tarjeta {
    tid: string,
    marca: string,
    handicap: string,
    fecha: Date,
}




