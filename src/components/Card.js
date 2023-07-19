import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, content, manufacturers, packagingDesign, medicine_id }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <Link to={`/dashboard/${medicine_id}`} className="text-xl font-bold mb-2">{name}</Link>
      <p className="text-blue-700 mb-4">{content}</p>
      <div className="flex justify-between mb-4">
        <p className="text-gray-600">Manufacturers: {manufacturers}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sky-400">Packaging Design: {packagingDesign}</p>
      </div>
    </div>
  );
};

export default Card;
