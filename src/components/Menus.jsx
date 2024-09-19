import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import "../assets/css/Menus.css"
import { Link } from "react-router-dom"
import { motion, transform } from "framer-motion"
import React from "react"
function Menus(){
    return(
        <>

    <motion.div 
    initial={{ scale:1, opacity:0, y:100}}
    animate={{ opacity:1, y:0, transition:{duration:0.2} }}
    whileHover={{ scale:1.1, transition: {duration: 0.1}}}
    style={{ width:'max-content' }}
    > 
      <Card
      id="card-menu" className="">
          <Link to="/belajar" className="text-decoration-none">
            <h1 className="text-center text-white pt-4" ><FontAwesomeIcon icon={faBook}  /></h1>
            <Card.Body>
              <Card.Title className="text-center text-white">Belajar </Card.Title>        
            </Card.Body>
        
              </Link>
      </Card>
         
    </motion.div>

    <motion.div 
    initial={{ scale:1, opacity:0, y:100}}
    animate={{ opacity:1, y:0, transition:{duration:0.3} }}
    whileHover={{ scale:1.1, transition: {duration: 0.1}}}
    style={{ width:'max-content' }}
    > 
      <Card
      id="card-menu" className="">
          <Link to="/materi" className="text-decoration-none">
            <h1 className="text-center text-white pt-4" ><FontAwesomeIcon icon={faNoteSticky}  /></h1>
            <Card.Body>
              <Card.Title className="text-center text-white">Materi </Card.Title>        
            </Card.Body>
        
              </Link>
      </Card>
         
    </motion.div>
    <motion.div 
    initial={{ scale:1, opacity:0, y:100}}
    animate={{ opacity:1, y:0, transition:{duration:0.4} }}
    whileHover={{ scale:1.1, transition: {duration: 0.1}}}
    style={{ width:'max-content' }}
    > 
      <Card
      id="card-menu" className="">
          <Link to="/puzle" className="text-decoration-none">
            <h1 className="text-center text-white pt-4" ><FontAwesomeIcon icon={faNewspaper}  /></h1>
            <Card.Body>
              <Card.Title className="text-center text-white">Puzzle </Card.Title>        
            </Card.Body>
        
              </Link>
      </Card>
         
    </motion.div>
    <motion.div 
    initial={{ scale:1, opacity:0, y:100}}
    animate={{ opacity:1, y:0, transition:{duration:0.6} }}
    whileHover={{ scale:1.1, transition: {duration: 0.1}}}
    style={{ width:'max-content' }}
    > 
      <Card
      id="card-menu" className="">
          <Link to="/belajar" className="text-decoration-none">
            <h1 className="text-center text-white pt-4"><FontAwesomeIcon icon={faInfoCircle}  /></h1>
            <Card.Body>
              <Card.Title className="text-center text-white">Tentang? </Card.Title>        
            </Card.Body>
        
              </Link>
      </Card>
         
    </motion.div>
      
        </>
    )
}

export default Menus