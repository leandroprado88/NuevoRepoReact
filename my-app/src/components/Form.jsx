import Boton from './NavBar/Boton';


function Form ({ title, children, boton}){
    
    return (
        <>
            
            <h2>{title}</h2>
            {children}
            <input type="text" placeholder="soy input" /><br/>
            { <Boton /> }
            {/* {props.children} */}
            { boton( { buttonText:'boton', nombre: 'fede' } )   }
        </>
    )
}
export default Form
