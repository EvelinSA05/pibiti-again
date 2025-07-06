import { useState, useEffect } from 'react';
import Card from './Card'; // Kita akan menggunakan komponen Card di sini

function CardList(props) {
  const { title, items } = props;

  // State untuk filter, sekarang berada di dalam komponen ini
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  // useEffect untuk memfilter data setiap kali searchTerm atau 'items' berubah
  useEffect(() => {
    const results = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  }, [searchTerm, items]);

  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-bold text-red-900">{title}</h2>

      {/* Kolom Pencarian */}
      <div className="mt-8 mb-12 max-w-md mx-auto">
        <input
          type="text"
          placeholder={`Cari di ${title}...`}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Menampilkan Card yang sudah difilter */}
      <div className="mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              tag={item.tag}
              picture={item.picture}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-3 text-xl">Data tidak ditemukan.</p>
        )}
      </div>
    </div>
  );
}

export default CardList;