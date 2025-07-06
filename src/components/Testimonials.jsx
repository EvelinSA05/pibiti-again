// function Testimonials(props) {
//     const { h1, c1, c2, c3, d1, d2, d3, p1, p2, p3 } = props;
//     return (
//         <div className="text-center mt-13">
//             <h2 className="text-4xl font-bold text-red-900">{h1}</h2>
//             <div class="mt-12 border-y-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 <div class="flex items-center gap-4 text-slate-800">
//                     <img src={p1} alt="Tania Andrew" class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
//                     <div class="flex w-full flex-col">
//                         <div class="flex items-center justify-between">
//                             <h5 class="text-xl font-semibold text-slate-800">
//                                 {c1}
//                             </h5>
//                             <div class="flex items-center gap-0 5">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="mt-5">
//                     <p class="text-base text-slate-600 font-light leading-normal">
//                         &quot;{d1}&quot;
//                     </p>
//                 </div>
//                 <div class="flex items-center gap-4 text-slate-800">
//                     <img src={p2} alt="Tania Andrew" class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
//                     <div class="flex w-full flex-col">
//                         <div class="flex items-center justify-between">
//                             <h5 class="text-xl font-semibold text-slate-800">
//                                 {c2}
//                             </h5>
//                             <div class="flex items-center gap-0 5">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="-mt-5">
//                     <p class="text-base text-slate-600 font-light leading-normal">
//                         &quot;{d2}&quot;
//                     </p>
//                 </div>
//                 <div class="flex items-center gap-4 text-slate-800">
//                     <img src={p3} alt="Tania Andrew" class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
//                     <div class="flex w-full flex-col">
//                         <div class="flex items-center justify-between">
//                             <h5 class="text-xl font-semibold text-slate-800">
//                                 {c3}
//                             </h5>
//                             <div class="flex items-center gap-0 5">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-yellow-600">
//                                     <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path>
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="-mt-5">
//                     <p class="text-base text-slate-600 font-light leading-normal">
//                         &quot;{d3}&quot;
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Testimonials
import { useState } from 'react';

function Testimonials(props) {
    const { h1, testimonials } = props;
    const [startIndex, setStartIndex] = useState(0);

    // Fungsi untuk menggeser "jendela" testimoni ke kanan (berikutnya)
    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    // Fungsi untuk menggeser "jendela" testimoni ke kiri (sebelumnya)
    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    // Fungsi untuk mendapatkan 3 testimoni yang akan ditampilkan
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(startIndex + i) % testimonials.length]);
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <div className="text-center mt-12 py-12">
            <h2 className="text-4xl font-bold text-red-900">{h1}</h2>

            {/* Tampilan 3 Kolom yang sudah ada */}
            <div className="mt-8 border-y-4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {visibleTestimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="flex items-center gap-4 text-slate-800">
                            <img src={testimonial.picture} alt={testimonial.name} className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center" />
                            <div className="flex w-full flex-col text-left">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-xl font-semibold text-slate-800">
                                        {testimonial.name}
                                    </h5>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    {/* Bintang Rating */}
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-600">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-left">
                            <p className="text-base text-slate-600 font-light leading-normal">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Tombol Navigasi Carousel */}
            <div className="flex justify-center my-6 gap-4">
                <button onClick={handlePrev} className="px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600">
                    &#8592; Sebelumnya
                </button>
                <button onClick={handleNext} className="px-4 py-2 bg-pink-700 text-white rounded-lg hover:bg-pink-600">
                    Berikutnya &#8594;
                </button>
            </div>
        </div>
    );
}

export default Testimonials;