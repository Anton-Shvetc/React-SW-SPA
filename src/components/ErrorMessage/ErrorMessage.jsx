import style from './ErrorMessage.module.css'


function ErrorMessage() {
    return ( 
        <>
      
        <p className= {style.text}>Ошибка, данные не загрузились</p>
        </>
     );
}

export default ErrorMessage;