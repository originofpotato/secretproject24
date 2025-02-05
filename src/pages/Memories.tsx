import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Memories() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
      <h2 className="text-2xl font-semibold text-pink-600 mb-4 text-center">Memories with You</h2>
      <div className="grid grid-cols-2 gap-4">
        <motion.img src="/memory1.jpg" alt="Memory 1" className="rounded-xl shadow-md" whileHover={{ scale: 1.1 }} />
        <motion.img src="/memory2.jpg" alt="Memory 2" className="rounded-xl shadow-md" whileHover={{ scale: 1.1 }} />
        <motion.img src="/memory3.jpg" alt="Memory 3" className="rounded-xl shadow-md" whileHover={{ scale: 1.1 }} />
        <motion.img src="/memory4.jpg" alt="Memory 4" className="rounded-xl shadow-md" whileHover={{ scale: 1.1 }} />
      </div>
      <Link to="/" className="mt-6 text-blue-500 underline">Back to Home</Link>
    </div>
  );
}

export default Memories;