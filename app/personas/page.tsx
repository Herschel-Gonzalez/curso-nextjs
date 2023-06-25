const cargarDatos=()=>{
    return fetch('https://randomuser.me/api/?results=8',{cache:'no-store'})
    .then(res=>res.json())
    .then(datos=>datos.results)
    
}
interface Persona {
    name: {
      first: string;
    };
    picture: {
      large: string;
    };
  }
export default async function page() {
    const datos = await cargarDatos();
    return (
        <>
        {datos.map((valor:Persona,inice:number)=>
        <div className="persona">
            <h3>{valor.name.first}</h3>
            <img src={valor.picture.large} alt="" />
        </div>
        )}
        </>
    )
}
