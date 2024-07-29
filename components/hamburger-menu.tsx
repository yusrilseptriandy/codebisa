'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './modal';
import NavbarRoutes from './navbar-routes';

const HamburgerMenu = () => {
  const [isCrossed, setIsCrossed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const animateProps = {
    rotate: isCrossed ? 45 : 0,
    transition: { duration: 0.2 },
  };

  const animatePropsSecondDiv = {
    rotate: isCrossed ? 135 : 0,
    transition: { duration: 0.2 },
  };

  const handleHamburgerClick = () => {
    setIsCrossed(!isCrossed);
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    const time = setTimeout(() => {
      setIsCrossed(false);
      setIsModalOpen(false);
    }, 300);

    return () => clearTimeout(time);
  };

  return (
    <div>
      <div
        className={`flex flex-col gap-y-2 justify-center items-center ${
          isCrossed ? 'mb-3' : ''
        }`}
        onClick={handleHamburgerClick}
      >
        <motion.div
          className={`w-7 h-0.5 dark:bg-white bg-black rounded-full ${
            isCrossed ? 'relative top-2.5' : ''
          }`}
          animate={animateProps}
        ></motion.div>
        <motion.div
          className="w-7 h-0.5 dark:bg-white bg-black rounded-full"
          animate={animatePropsSecondDiv}
        ></motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <NavbarRoutes onClick={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default HamburgerMenu;
