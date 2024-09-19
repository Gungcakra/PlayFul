import { Carousel } from "react-bootstrap"
import "../assets/css/MateriIsi.css"
import { motion } from "framer-motion"
function MateriIsi(){
    return (

        <>
           

        
            <Carousel>
                
               
        
                <Carousel.Item>
            <motion.div
                initial={{scale:0.8}}
                animate={{ scale:1, transition: { type: "spring", stiffness: 200 }  }}
            >
                   <div className="container bg-white rounded" style={{ height:'100px' }}>
                        <h1 className="text-center"> Isi Materi</h1>
                   </div>
            </motion.div>
                </Carousel.Item>
        
                <Carousel.Item>
                   <div className="container bg-primary rounded" style={{ height:'100px' }}>
                   <h1 className="text-center"> Isi Materi</h1>

                   </div>
                </Carousel.Item>
              
            </Carousel>
           
        </>
    )
}
export default MateriIsi