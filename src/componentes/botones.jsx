

export default function Boton(props) {

{/*Dependiendo de lo que retorne la función
flecha, se le asignará a boton contendor una clase
u otra. Si retorna true, se le asigna la clase operador,
si retorna false, se le asignan comillas vacías. */}
{/*El componente boton, es una función que nos retorna
un div, y este div, dependiedo de su contenido, tendrá
una o dos clases asignadas.*/}
    const esOperador = valor => {
        return isNaN(valor) && (valor !== ".") && (valor !== "=")
    }
return (
    <div 
    className={`boton-contenedor ${esOperador(props.children) ? "operador" : ""}`.trimEnd()}
    onClick={() => props.evento(props.children)}>
        {/*Aquí se utiliza una función flecha para llamar 
        otra función. */}
        {props.children}
    </div>
);
}


