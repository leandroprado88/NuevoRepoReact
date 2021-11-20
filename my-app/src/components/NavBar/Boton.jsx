const Boton =( {buttonText = 'Soy Boton' , nombre}) =>{
    
    console.log('Boton');
    return (
        <>
            {nombre}
            <button >{buttonText}</button>
        </>
    )
}
export default Boton;
