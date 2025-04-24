import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Page404() {
  return (
    <div><div className="flex items-center justify-center h-screen bg-gradient-to-br from-white">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center bg-white shadow-lg p-10 rounded-2xl border border-gray-300 max-w-md"
    >
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl font-semibold mb-2 text-gray-700">Page Not Found</p>
      <p className="text-gray-500 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </motion.div>
  </div></div>
  )
}
