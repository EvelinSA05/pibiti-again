// // function Card(props) {
// //     const { h1, title1, title2, title3, description1, description2, description3, tag1, tag2, tag3, picture1, picture2, picture3 } = props;
// //     return (
// //         <div>
// //             <h2 className="mt-20 text-4xl font-bold text-red-900">{h1}</h2>
// //             <div className="mt-12 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// //                 <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800">
// //                     <img className="w-full" src={picture1} alt="Sunset in the mountains" />
// //                     <div className="px-6 py-4">
// //                         <div className="font-bold text-xl mb-2 text-gray-100">{title1}</div>
// //                         <p className="text-gray-100 text-base">
// //                             {description1}
// //                         </p>
// //                     </div>
// //                     <div className="px-6 pt-4 pb-2">
// //                         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag1}</span>
// //                     </div>
// //                 </div>
// //                 <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800">
// //                     <img className="w-full" src={picture2} alt="Sunset in the mountains" />
// //                     <div className="px-6 py-4">
// //                         <div className="font-bold text-xl mb-2 text-gray-100 ">{title2}</div>
// //                         <p className="text-gray-100 text-base">
// //                             {description2}
// //                         </p>
// //                     </div>
// //                     <div className="px-6 pt-4 pb-2">
// //                         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag2}</span>
// //                     </div>
// //                 </div>
// //                 <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800">
// //                     <img className="w-full" src={picture3} alt="Sunset in the mountains" />
// //                     <div className="px-6 py-4">
// //                         <div className="font-bold text-xl mb-2 text-gray-100">{title3}</div>
// //                         <p className="text-gray-100 text-base">
// //                             {description3}
// //                         </p>
// //                     </div>
// //                     <div className="px-6 pt-4 pb-2">
// //                         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag3}</span>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Card;

// // src/components/Card.jsx

// // Fungsi ini menerima 'props' yang dikirim dari App.jsx
// function Card(props) {
//   // Kita ambil setiap data dari props
//   const { title, description, tag, picture } = props;

//   return (
//     // Lalu kita tampilkan di dalam JSX
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800">
//       <img className="w-full h-48 object-cover" src={picture} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2 text-gray-100">{title}</div>
//         <p className="text-gray-100 text-base">
//           {description}
//         </p>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
//       </div>
//     </div>
//   );
// }

// export default Card;
// src/components/Card.jsx

// import { useState } from 'react';

// function Card(props) {
//   // Komponen ini menerima props untuk SATU kartu
//   const { title, description, tag, picture } = props;

//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   // Cek dulu apakah description ada sebelum memanggil substring
//   const descriptionExists = description && description.length > 100;
//   const displayedDescription = isExpanded ? description : (description ? `${description.substring(0, 100)}...` : '');

//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800 flex flex-col">
//       <img className="w-full h-48 object-cover" src={picture} alt={title} />
      
//       <div className="px-6 py-4 flex-grow">
//         <div className="font-bold text-xl mb-2 text-gray-100">{title}</div>
//         <p className="text-gray-100 text-base text-left">
//           {displayedDescription}
//         </p>

//         {descriptionExists && (
//           <button onClick={toggleExpand} className="text-pink-300 hover:text-pink-200 font-bold mt-2">
//             {isExpanded ? 'Sembunyikan' : 'Selengkapnya...'}
//           </button>
//         )}
//       </div>
      
//       <div className="px-6 pt-4 pb-2">
//         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
//       </div>
//     </div>
//   );
// }

// export default Card;

// src/components/Card.jsx

function Card(props) {
  // Komponen ini sekarang hanya membuat sebuah 'bingkai' kartu
  // dan menampilkan apa pun yang diletakkan di dalamnya (props.children).
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-800 flex flex-col">
      {props.children}
    </div>
  );
}

export default Card;