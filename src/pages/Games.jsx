import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pisang from "../assets/img/games/lesson_img/pisang.png"
import apel from "../assets/img/games/lesson_img/apel.png"
import soeharto from "../assets/img/games/lesson_img/soeharto.png"
import { useNavigate } from "react-router";
import "../assets/css/Games.css"
import { Modal, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  {
    src: pisang,
    question: "Apa Nama Makhluk Di Atas ?",
    correctAnswer: "Pisang",
    options: ["Pisang", "Apel", "Mangga", "Jeruk"],
  },
  {
    src: soeharto,
    question: "Siapa Nama Tokoh Di Atas? ?",
    correctAnswer: "Soeharto",
    options: ["Ir Soekarno", "Gus Dur", "Soeharto", "Jokowi"],
  },
  // Tambahkan gambar lainnya di sini
];

const modalVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } },
  exit: { scale: 0.5, opacity: 0, transition: { type: "spring", stiffness: 300 } },
};

const GuessImageGame = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const handleNextClick = () => {
    if (selectedOption === images[currentImageIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      
    } else {
      
      setShowModal(true)
    
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/');
  };

  return (
    <div id="bg-games" className="container-fluid d-flex justify-content-center align-items-center">
        <div className="col-md-6 ">
          <div id="game-card" className="card">
          <div className="row  d-flex flex-column justify-content-center align-items-center">

            <img
              src={images[currentImageIndex].src}
              className="card-img-top"
              alt="Guess the image" style={{ width:'150px', height:'100px' }}
            />
          </div>
            <div className="card-body">
              <h5 className="card-title">{images[currentImageIndex].question}</h5>
              <div className="list-group">
                {images[currentImageIndex].options.map((option, index) => (
                  <button
                    key={index}
                    className={`list-group-item list-group-item-action ${
                      isAnswered
                        ? option === selectedOption
                          ? "list-group-item-danger bg-secondary text-white"
                          : ""
                        : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {isAnswered && (
                <button
                id="btn-next"
                  className="btn text-black fw-bold"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
     
      <AnimatePresence >
        {showModal &&(
        <Modal show={showModal} onHide={handleCloseModal} centered>
        <motion.div 
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit" className="bg-white rounded"
        >

        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 className="text-center">Your score is: </h1>
          <h2 className="text-center text-primary fw-bold"> {score}</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
        </motion.div>
      </Modal>
        )}
      </AnimatePresence>
    </div>
    
    
  );
};

export default GuessImageGame;
