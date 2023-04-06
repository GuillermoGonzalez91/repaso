




export function User(props) {

  console.log(props.numero)

    return (
      <div>
        <h1>{props.texto}</h1>
        <h2>{props.numero}</h2>
        <h3>{props.cadena}</h3>
      </div>
    );
  }