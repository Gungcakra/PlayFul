import "../assets/css/Materi.css"
import MateriIsi from "../components/MateriIsi"

function Materi(){
    return (

        <>
            <div id="bg-materi" className="container-fluid d-flex flex-column justify-content-center">
            <h1 className="text-center text-white">Materi</h1>
                <MateriIsi />
            
            </div>
        </>
    )
}
export default Materi