import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {wrap} from "popmotion";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const imgCat = [
    "/cat/cat-1.jpg",
    "/cat/cat-2.jpg",
    "/cat/cat-3.jpg",
];

const Slider = () => {
    const [[page, direction], setPage] = useState([0, 0])

    const imageIndex = wrap(0, imgCat.length, page)

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
      };
    return (
        <div className="w-full select-none relative">
            <div className="aspect-w-16 aspect-h-9">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img 
                        key={page}
                        src={imgCat[imageIndex]}
                        custom={direction}
                        initial={{ y: 0, opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{ y: 0, opacity: 0}}
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 300 },
                          opacity: { duration: 1 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                    />
                </AnimatePresence>
                
                <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
                <motion.button
                    whileHover={{ scale: 1.2, tranition: { duration: 0.5 }}}
                    whileTap={{ scale: 0.9 }}
                    className="next bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={() => paginate(1)}
                >
                    <AiOutlineVerticalRight size={30} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.2, tranition: { duration: 0.5 }}}
                    whileTap={{ scale: 0.9 }}
                    className="prev bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
                    onClick={() => paginate(-1)}
                >
                    <AiOutlineVerticalLeft size={30} />
                </motion.button>
                </div>
                
            </div>
        </div>
    )
}

export default Slider