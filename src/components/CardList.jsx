// import { useState, useEffect } from 'react';
// import Card from './Card';

// function CardList(props) {
//   const { title, items } = props;
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredItems, setFilteredItems] = useState(items);

//   useEffect(() => {
//     const results = items.filter(item =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredItems(results);
//   }, [searchTerm, items]);

//   return (
//     <div className="text-center py-16">
//       <h2 className="text-4xl font-bold text-red-900">{title}</h2>

//       <div className="mt-8 mb-12 max-w-md mx-auto">
//         <input
//           type="text"
//           placeholder={`Cari di ${title}...`}
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item, index) => (
//             <Card
//               key={index}
//               title={item.title}
//               description={item.description}
//               tag={item.tag}
//               picture={item.picture}
//             />
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-3 text-xl">Data tidak ditemukan.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CardList;

import { useState, useEffect } from 'react';
import Card from './Card';
import Modal from './Modal'; // <-- 1. Import komponen Modal

function CardList(props) {
  const { title, items } = props;

  // --- State untuk Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // Untuk menyimpan data item yang diklik

  // --- State untuk Filter (tidak berubah) ---
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    // ... (logika filter tidak berubah) ...
    const results = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm, items]);


  // --- Fungsi untuk Mengelola Modal ---
  const handleOpenModal = (item) => {
    setSelectedItem(item); // Simpan data item yang diklik
    setIsModalOpen(true);  // Buka modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null); // Kosongkan data saat modal ditutup
  };


  return (
    <>
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-red-900">{title}</h2>
        <div className="mt-8 mb-12 max-w-md mx-auto">
          {/* ... (input pencarian tidak berubah) ... */}
          <input
            type="text"
            placeholder={`Cari di ${title}...`}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                tag={item.tag}
                picture={item.picture}
                // Kirim fungsi untuk membuka modal ke setiap card
                onRegisterClick={() => handleOpenModal(item)}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-3 text-xl">Data tidak ditemukan.</p>
          )}
        </div>
      </div>

      {/* --- Render Modal di sini --- */}
      {/* Modal hanya akan render jika selectedItem tidak null */}
      {selectedItem && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {/* Ini adalah 'children' untuk modal, menampilkan detail dari item yang dipilih */}
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedItem.title}</h2>
          <img className="w-full h-48 object-cover rounded-md my-4" src={selectedItem.picture} alt={selectedItem.title} />
          <p className="mb-6 text-gray-600 dark:text-gray-300">{selectedItem.description}</p>
          <button 
            type="button" 
            className="text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
          >
            Konfirmasi Pendaftaran
          </button>
        </Modal>
      )}
    </>
  );
}

export default CardList;