import "../estilos/botonClear.css";
const BotonClear = (props) =>(

    <div className="boton-clear" onClick={props.evento}>
        {props.children}
    </div>
     
);

{/*No se puede usar la palabra clave export 
junto con const en la misma declaración.
 La palabra clave export se utiliza para 
exportar elementos (como funciones, variables 
o componentes) para que estén disponibles fuera
 del módulo actual.*/}
{/* Si se trata de texto fijo,
directamente podemos escribir dicho 
texto dentro del componente*/}
 export default BotonClear;