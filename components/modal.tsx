import { AnimatePresence, motion } from 'framer-motion';
import { useBodyOverflow } from './libs/useBodyOverflow';

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  useBodyOverflow(isOpen!);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%', opacity: 1 }}
          animate={{ y: 1, opacity: 1 }}
          exit={{ y: '100%', opacity: 1, transition: { duration: 0.3 } }}
          transition={{
            stiffness: 250,
            damping: 25,
          }}
          className="fixed p-6 bg-white dark:bg-black overflow-y-hidden inset-0 mt-20 dark:border-[#333333] border-[1.2px] border-slate-200 border-b-0 rounded-xl flex z-50"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
