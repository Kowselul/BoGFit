module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/products-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allProducts",
    ()=>allProducts
]);
const allProducts = [
    {
        id: 1,
        name: 'Whey Protein Premium',
        category: 'Proteine',
        price: 249.99,
        oldPrice: 299.99,
        rating: 4.8,
        reviews: 124,
        image: '/whey-protein-container.png',
        badge: 'Bestseller',
        description: 'Proteină din zer de înaltă calitate cu 24g proteină per porție'
    },
    {
        id: 2,
        name: 'Creatina Monohidrat 300g',
        category: 'Creatină',
        price: 89.99,
        rating: 4.9,
        reviews: 87,
        image: '/creatine-monohydrate.png',
        description: 'Creatină monohidrat pură, micronizată pentru absorbție maximă'
    },
    {
        id: 3,
        name: 'Pre-Workout Extreme',
        category: 'Pre-Workout',
        price: 139.99,
        oldPrice: 169.99,
        rating: 4.7,
        reviews: 156,
        image: '/pre-workout-supplement-powder.jpg',
        badge: 'Ofertă',
        description: 'Energie și focus maxim pentru antrenamente intense'
    },
    {
        id: 4,
        name: 'Bandaje Genunchi Pro',
        category: 'Echipament',
        price: 119.99,
        rating: 4.6,
        reviews: 93,
        image: '/knee-wraps-powerlifting.jpg',
        description: 'Suport profesional pentru genunchi la antrenamente grele'
    },
    {
        id: 5,
        name: 'Curea Spate Lifting',
        category: 'Echipament',
        price: 179.99,
        oldPrice: 219.99,
        rating: 4.9,
        reviews: 201,
        image: '/weightlifting-belt-leather.jpg',
        badge: 'Nou',
        description: 'Curea din piele premium pentru suport lombar maxim'
    },
    {
        id: 6,
        name: 'Bandaje Încheieturi',
        category: 'Echipament',
        price: 69.99,
        rating: 4.5,
        reviews: 67,
        image: '/wrist-wraps-weightlifting.jpg',
        description: 'Protecție și stabilitate pentru încheieturile mâinilor'
    },
    {
        id: 7,
        name: 'BCAA 2:1:1 - 500g',
        category: 'Amino Acizi',
        price: 119.99,
        rating: 4.7,
        reviews: 145,
        image: '/bcaa-powder-supplement.jpg',
        description: 'Aminoacizi esențiali pentru recuperare musculară rapidă'
    },
    {
        id: 8,
        name: 'Mass Gainer 3kg',
        category: 'Gainere',
        price: 179.99,
        rating: 4.6,
        reviews: 98,
        image: '/mass-gainer-protein-powder.jpg',
        badge: 'Popular',
        description: 'Formula pentru creștere în masă cu 50g proteină per porție'
    },
    {
        id: 9,
        name: 'Fat Burner Thermogenic',
        category: 'Slăbire',
        price: 149.99,
        oldPrice: 189.99,
        rating: 4.4,
        reviews: 112,
        image: '/fat-burner-pills-supplement.jpg',
        description: 'Accelerează metabolismul și arderea grăsimilor'
    },
    {
        id: 10,
        name: 'Shaker Premium 700ml',
        category: 'Accesorii',
        price: 39.99,
        rating: 4.8,
        reviews: 234,
        image: '/protein-shaker-bottle.jpg',
        description: 'Shaker profesional cu sită din oțel inoxidabil'
    },
    {
        id: 11,
        name: 'Mănuși Fitness Pro',
        category: 'Echipament',
        price: 79.99,
        rating: 4.5,
        reviews: 176,
        image: '/gym-workout-gloves.jpg',
        description: 'Mănuși cu padding pentru protecție și grip superior'
    },
    {
        id: 12,
        name: 'Omega-3 Fish Oil 1000mg',
        category: 'Vitamine',
        price: 69.99,
        rating: 4.7,
        reviews: 167,
        image: '/omega-3-capsules.png',
        description: 'Acizi grași esențiali pentru sănătate cardiovasculară'
    },
    {
        id: 13,
        name: 'Bandaje Coate',
        category: 'Echipament',
        price: 89.99,
        rating: 4.6,
        reviews: 89,
        image: '/elbow-wraps-support.jpg',
        description: 'Suport elastic pentru coate la antrenamente de forță'
    },
    {
        id: 14,
        name: 'Glutamină 500g',
        category: 'Amino Acizi',
        price: 99.99,
        rating: 4.5,
        reviews: 78,
        image: '/glutamine-powder-supplement.jpg',
        description: 'Recuperare musculară și sistem imunitar fortificat'
    },
    {
        id: 15,
        name: 'ZMA Complex',
        category: 'Vitamine',
        price: 79.99,
        rating: 4.6,
        reviews: 134,
        image: '/zma-supplement-capsules.jpg',
        badge: 'Recomandat',
        description: 'Zinc, Magneziu și Vitamina B6 pentru somn și recuperare'
    },
    {
        id: 16,
        name: 'Beta Alanină 300g',
        category: 'Performanță',
        price: 94.99,
        rating: 4.7,
        reviews: 92,
        image: '/beta-alanine-powder.jpg',
        description: 'Crește rezistența și performanța la antrenamente'
    },
    {
        id: 17,
        name: 'Proteină Vegană 1kg',
        category: 'Proteine',
        price: 189.99,
        rating: 4.5,
        reviews: 156,
        image: '/vegan-plant-protein-powder.jpg',
        badge: 'Vegan',
        description: 'Proteină din mazăre și orez pentru vegetarieni'
    },
    {
        id: 18,
        name: 'Prosop Microfibră Gym',
        category: 'Accesorii',
        price: 49.99,
        rating: 4.4,
        reviews: 203,
        image: '/gym-microfiber-towel.jpg',
        description: 'Prosop rapid-absorbant pentru antrenamente'
    },
    {
        id: 19,
        name: 'BCAA Pudră Aromată 400g',
        category: 'Amino Acizi',
        price: 129.99,
        rating: 4.8,
        reviews: 167,
        image: '/bcaa-flavored-powder-supplement-container.jpg',
        badge: 'Nou',
        description: 'BCAA cu aromă de lămâie pentru hidratare și recuperare'
    },
    {
        id: 20,
        name: 'Multivitamine Daily Plus',
        category: 'Vitamine',
        price: 89.99,
        rating: 4.6,
        reviews: 223,
        image: '/multivitamin-supplement-bottle.jpg',
        description: 'Complex complet de vitamine și minerale pentru sportivi'
    },
    {
        id: 21,
        name: 'Vitamina D3 + K2',
        category: 'Vitamine',
        price: 74.99,
        rating: 4.7,
        reviews: 189,
        image: '/vitamin-d3-k2-bottle.png',
        description: 'Suport pentru oase și sistem imunitar puternic'
    },
    {
        id: 22,
        name: 'Vitamina C 1000mg',
        category: 'Vitamine',
        price: 54.99,
        rating: 4.5,
        reviews: 312,
        image: '/vitamin-c-supplement-tablets.jpg',
        description: 'Antioxidant puternic pentru protecție celulară'
    },
    {
        id: 23,
        name: 'EAA - Aminoacizi Esențiali',
        category: 'Amino Acizi',
        price: 139.99,
        rating: 4.8,
        reviews: 145,
        image: '/eaa-essential-amino-acids-powder.jpg',
        badge: 'Popular',
        description: 'Toți aminoacizii esențiali pentru creștere musculară'
    },
    {
        id: 24,
        name: 'L-Carnitina Lichidă 500ml',
        category: 'Amino Acizi',
        price: 109.99,
        rating: 4.6,
        reviews: 198,
        image: '/l-carnitine-liquid-supplement-bottle.jpg',
        description: 'Ajută la transformarea grăsimilor în energie'
    },
    {
        id: 25,
        name: 'Pre-Workout Pump Extreme',
        category: 'Pre-Workout',
        price: 159.99,
        rating: 4.9,
        reviews: 276,
        image: '/pre-workout-pump-supplement-powder.jpg',
        badge: 'Bestseller',
        description: 'Formula avansată cu citrulină și beta-alanină pentru pump maxim'
    },
    {
        id: 26,
        name: 'Pre-Workout Natural Energy',
        category: 'Pre-Workout',
        price: 124.99,
        rating: 4.5,
        reviews: 143,
        image: '/natural-pre-workout-supplement.jpg',
        description: 'Pre-workout cu ingrediente naturale, fără coloranți'
    },
    {
        id: 27,
        name: 'Creatina HCL 180 capsule',
        category: 'Creatină',
        price: 119.99,
        rating: 4.7,
        reviews: 167,
        image: '/creatine-hcl-capsules-bottle.jpg',
        description: 'Creatină HCL pentru absorbție superioară fără retenție de apă'
    },
    {
        id: 28,
        name: 'Creatina + Taurină Mix',
        category: 'Creatină',
        price: 134.99,
        rating: 4.8,
        reviews: 134,
        image: '/creatine-taurine-powder-mix.jpg',
        badge: 'Nou',
        description: 'Combinație perfectă pentru energie și forță explozivă'
    },
    {
        id: 29,
        name: 'Saltea Yoga Premium 6mm',
        category: 'Echipament',
        price: 149.99,
        rating: 4.7,
        reviews: 289,
        image: '/premium-yoga-mat-rolled.jpg',
        description: 'Saltea yoga eco-friendly cu grip superior și cushioning'
    },
    {
        id: 30,
        name: 'Saltea Yoga Travel 3mm',
        category: 'Echipament',
        price: 99.99,
        rating: 4.5,
        reviews: 178,
        image: '/travel-yoga-mat-thin-folded.jpg',
        description: 'Saltea yoga ultra-portabilă pentru călătorii'
    },
    {
        id: 31,
        name: 'Bandă Elastică Set 5 Rezistențe',
        category: 'Echipament',
        price: 79.99,
        rating: 4.8,
        reviews: 456,
        image: '/resistance-bands-set-colorful.jpg',
        badge: 'Bestseller',
        description: 'Set complet de benzi elastice pentru antrenament full-body'
    },
    {
        id: 32,
        name: 'Bandă Elastică Premium Heavy',
        category: 'Echipament',
        price: 59.99,
        rating: 4.6,
        reviews: 234,
        image: '/heavy-resistance-band-loop.jpg',
        description: 'Bandă elastică rezistență mare pentru sportivi avansați'
    },
    {
        id: 33,
        name: 'Bandă Mobilitate și Stretching',
        category: 'Echipament',
        price: 44.99,
        rating: 4.7,
        reviews: 198,
        image: '/stretching-mobility-band.jpg',
        description: 'Bandă lungă pentru stretching și îmbunătățirea mobilității'
    },
    {
        id: 34,
        name: 'Bottle Sport 1L cu Infuzor',
        category: 'Accesorii',
        price: 54.99,
        rating: 4.6,
        reviews: 267,
        image: '/sport-water-bottle-with-fruit-infuser.jpg',
        description: 'Sticlă sport cu infuzor pentru apă cu aromă naturală'
    },
    {
        id: 35,
        name: 'Geantă Sport Waterproof',
        category: 'Accesorii',
        price: 129.99,
        rating: 4.8,
        reviews: 345,
        image: '/waterproof-gym-duffel-bag.jpg',
        description: 'Geantă gym impermeabilă cu compartimente multiple'
    },
    {
        id: 36,
        name: 'Rucsac Fitness Pro 30L',
        category: 'Accesorii',
        price: 179.99,
        rating: 4.7,
        reviews: 223,
        image: '/fitness-backpack-compartments.jpg',
        description: 'Rucsac ergonomic cu compartiment laptop și shaker'
    },
    {
        id: 37,
        name: 'Foam Roller Masaj 33cm',
        category: 'Echipament',
        price: 89.99,
        rating: 4.8,
        reviews: 412,
        image: '/foam-roller-massage-recovery.jpg',
        badge: 'Popular',
        description: 'Roller pentru auto-masaj și recuperare musculară'
    },
    {
        id: 38,
        name: 'Coardă Sărituri Speed',
        category: 'Echipament',
        price: 49.99,
        rating: 4.5,
        reviews: 289,
        image: '/speed-jump-rope-fitness.jpg',
        description: 'Coardă profesională pentru cardio și condiționare'
    },
    {
        id: 39,
        name: 'Căști Sport Bluetooth',
        category: 'Accesorii',
        price: 199.99,
        rating: 4.9,
        reviews: 567,
        image: '/bluetooth-sport-earbuds-wireless.jpg',
        badge: 'Premium',
        description: 'Căști wireless waterproof cu sunet HD pentru antrenamente'
    },
    {
        id: 40,
        name: 'Banderolă Telefon Braț',
        category: 'Accesorii',
        price: 34.99,
        rating: 4.4,
        reviews: 198,
        image: '/phone-armband-running-holder.jpg',
        description: 'Suport telefon pentru braț, ideal pentru alergare'
    }
];
}),
"[project]/components/product-details.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ProductDetails",
    ()=>ProductDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductDetails() from the server but ProductDetails is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/product-details.tsx <module evaluation>", "ProductDetails");
}),
"[project]/components/product-details.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "ProductDetails",
    ()=>ProductDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductDetails() from the server but ProductDetails is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/product-details.tsx", "ProductDetails");
}),
"[project]/components/product-details.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$details$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/product-details.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$details$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/product-details.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$details$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/produse/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/products-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$details$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/product-details.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function ProductPage({ params }) {
    const { id } = await params;
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProducts"].find((p)=>p.id === parseInt(id));
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$product$2d$details$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductDetails"], {
        product: product
    }, void 0, false, {
        fileName: "[project]/app/produse/[id]/page.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$products$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["allProducts"].map((product)=>({
            id: product.id.toString()
        }));
}
}),
"[project]/app/produse/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/produse/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce90c7a6._.js.map