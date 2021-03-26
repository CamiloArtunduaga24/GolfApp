
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