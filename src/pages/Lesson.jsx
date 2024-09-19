import "../assets/css/Lesson.css"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Transition } from "react-transition-group"
import materi1 from "../assets/img/materi/icon/materi1.png"
import materi2 from "../assets/img/materi/icon/materi2.png"
import materi3 from "../assets/img/materi/icon/materi3.png"
function Lesson(){
    return(
        <>
            <div id="bg-lesson" className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <motion.div 
                    initial={{ opacity:0, y:-100 }}
                    animate={{ opacity:1, y:0 }}
                >
                    <h1 className="text-center text-white">Silahkan Pilih Materi</h1>
                </motion.div>
                <motion.div
                    initial={{ scale:1, opacity:0, x:100}}
                    animate={{ opacity:1, x:0, transition:{duration:0.3} }}
                    whileHover={{ scale:1.1, transition: {duration: 0.1}}}
                    style={{ width:'max-content' }}
                >
                <Link to="/materi1" className="text-decoration-none text-dark" >

                    <div className="col p-2 m-2 rounded" id="materi-card">
                    <div className="row">
                        <div className="col col-lg-2 col-md-2 col-sm-2">
                            <img src={materi1} alt="" id="materi-icon"/>
                        </div>
                        <div className="col col-lg-10 col-md-10 col-sm-10">

                        <h1 className="text-center">Judul Materi 1</h1>
                        </div>
                    </div>
                    </div>
                </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity:0, x:-100 }}
                    animate={{ opacity:1, x:0, transition:{duration:0.3} }}
                    whileHover={{ scale:1.1, transition: {duration: 0.1}}}
                    style={{ width:'max-content' }}
                >
                      <div className="col p-2 m-2 rounded" id="materi-card">
                    <div className="row">
                        <div className="col col-lg-2 col-md-2 col-sm-2">
                            <img src={materi2} alt="" id="materi-icon"/>
                        </div>
                        <div className="col col-lg-10 col-md-10 col-sm-10">

                        <h1 className="text-center">Judul Materi 2</h1>
                        </div>
                    </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity:0, x:100 }}
                    animate={{ opacity:1, x:0, transition:{duration:0.3} }}
                    whileHover={{ scale:1.1, transition: {duration: 0.1}}}
                    style={{ width:'max-content' }}
                >
                      <div className="col p-2 m-2 rounded" id="materi-card">
                    <div className="row">
                        <div className="col col-lg-2 col-md-2 col-sm-2">
                            <img src={materi3} alt="" id="materi-icon"/>
                        </div>
                        <div className="col col-lg-10 col-md-10 col-sm-10">

                        <h1 className="text-center">Judul Materi 3</h1>
                        </div>
                    </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Lesson