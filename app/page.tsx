import Image from "next/image"
import imagen from "../public/images/2.png"
export default function Home() {
  return (
    <>
    <div>Hola desde la pagina principal</div>
    <div className="caja">
    <Image src="/images/1.png" width={426} height={240} alt="miniatura"/>
    </div>
    <div className="caja">
      <Image src={imagen} alt="imagen2"/>
    </div>
    </>
  )
}
