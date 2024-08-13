"use client";
import { useState } from 'react';
import Modal from 'react-modal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      alt: "Naveed Coursera Certificate",
      src: "/COURSERA/NAVEED. COURSERA CERTIFICATE.jpg",
    },
    {
      alt: "SOC Analyst by EC Council",
      src: "/COURSERA/SOC ANALYST BY EC COUNSIL (COURSERA).jpg",
    },
    {
      alt: "SOC Cisco by Coursera",
      src: "/COURSERA/1723539181918-9062ef39-ad40-4f03-a1b9-27e10fa952ba_1.jpg",
    },
    {
      alt: "Data Analysis with Python",
      src: "/COURSERA/DATA ANALYSIS WITH PYTHON.jpg",
    },
    {
      alt: "Cybersecurity Microsoft Certificate",
      src: "/COURSERA/cybersecurity microsoft certificate.jpg",
    },
    {
      alt: "IBM Cyber Security",
      src: "/COURSERA/IBM CYBER SECURITY.jpg",
    },
    {
      alt: "Data Analysis with Python",
      src: "/COURSERA/DATA ANALYSIS WITH PYTHON.jpg",
    },
    {
      alt: "ISC2 Cybersecurity",
      src: "/COURSERA/ISC2 CYBERSECURITY.jpg",
    },
    {
      alt: "Information Technology",
      src: "/cisco/HAFIZ NAVEED UDDNIZAMUDDIN-ITU-DTC-Dec23-IT-certificate_signed.jpg",
    },
    {
      alt: "Introduction to Python",
      src: "/cisco/INTRODUCTION PYTHON.jpg",
    },
    {
      alt: "IOT",
      src: "/cisco/IOT.jpg",
    },
    {
      alt: "PICUS",
      src: "/cisco/PICUS.jpg",
    },
    {
      alt: "SOC by Cisco",
      src: "/cisco/SOC BY CISCO.jpg",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Certification Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 hover:text-blue-500 transition duration-300 ease-in-out">
          CERTIFICATION BY COURSERA , MICROSOFT, PICUS ETC
        </h2>

        <div className="flex overflow-x-auto space-x-4">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:shadow-lg flex-shrink-0"
              style={{ width: '200px' }}
              onClick={() => openModal(certificate.src)}
            >
              <img
                alt={certificate.alt}
                className="object-cover w-full h-64"
                src={certificate.src}
              />
            </div>
          ))}
        </div>

        {/* Modal for Full Screen View */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Certificate Viewer"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
          >
            &times;
          </button>
          {selectedImage && (
            <img
              alt="Full Screen Certificate"
              src={selectedImage}
              className="object-contain max-w-full max-h-full"
            />
          )}
        </Modal>
      </div>
    </section>
  );
}
