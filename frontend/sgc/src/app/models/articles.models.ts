export interface Rubro {
    id: number;
    descripcion: string;
}

export interface Marca {
    id: number;
    descripcion: string;
}

export interface Proveedor {
    id: number;
    razon_social: string;
    activo: boolean;
    contacto?: any;
}

export interface Article {
    id: number;
    nombre: string;
    codigo: string;
    descripcion: string;
    rubro: Rubro;
    marca: Marca;
    precio_venta: string;
    precio_compra: string;
    imagen: string;
    proveedor: Proveedor;
}

export interface articleList {
    count: number;
    next?: any;
    previous?: any;
    results: Article[];
}
