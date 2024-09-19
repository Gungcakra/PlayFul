import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Home(){
    return(
       <>

           <div className="container-fluid bg-primary" style={{ height:'100vh' }}>
            <motion.h1>Test</motion.h1>
            <h1 className="text-center">Home</h1>
            <p className="text-center">Mesari Creative</p>
            </div>
       </>
       
    )
}

export default Home