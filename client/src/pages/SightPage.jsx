// LandmarkPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../images/admin-login.jpg'
const SightPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    return navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-6">Landmark Name</h1>

        {/* Landmark Image */}
        <img
          src={image} // Замените на путь к изображению достопримечательности
          alt="Landmark"
          className="w-full h-96 object-cover mb-6 rounded-md"
        />

        {/* Landmark Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <p className="text-gray-700">
            City, Country
          </p>
        </div>

        {/* Add more information as needed */}

        {/* Landmark Actions */}
        <div className="flex items-center justify-between mt-8">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
            onClick={handleGoBack}
          >
            Вернуться назад
          </button>
          {/* Add more actions as needed */}
        </div>
      </div>
    </div>
  );
};

export default SightPage;
