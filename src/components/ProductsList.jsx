//import jewelsData from "../data/Jewels.json";

import ProductsCard from "./ProductCard";
import "./ProductsList.css";
import redRingImage from "../assets/Red-ring-main.png";
import braceletImage from "../assets/Bracelet-main.png";
import ringImage from "../assets/Ring-main.png";
import redRingProcess1 from "../assets/Red-ring-1.png";
import redRingProcess2 from "../assets/Red-ring-2.png";
import redRingProcess3 from "../assets/Red-ring-3.png";
import redRingProcess4 from "../assets/Red-ring-4.png";
import braceletProcess1 from "../assets/Green-bracelet-1.png";
import braceletProcess2 from "../assets/Green-bracelet-2.png";
import braceletProcess3 from "../assets/Green-bracelet-3.png";
import braceletProcess4 from "../assets/Green-bracelet-4.png";
import ringProcess1 from "../assets/Ring-1.png";
import ringProcess2 from "../assets/Ring-2.png";
import ringProcess3 from "../assets/Ring-3.png";
import ringProcess4 from "../assets/Ring-4.png";
import bracelet2 from "../assets/Bracelet-2.png";
import bracelet3 from "../assets/Bracelet-3.png";
import earing1 from "../assets/Earing-1.png";
import earing2 from "../assets/Earing-2.png";
import ring from "../assets/Ring-carousel.png";
import rings from "../assets/Rings.png";

const jewelsData = [
  {
    id: 1,
    name: "Anillo Flash",
    main_image: [redRingImage, ring, rings],
    price: 43,
    images: [
      redRingProcess1,
      redRingProcess2,
      redRingProcess3,
      redRingProcess4,
    ],
    description:
      "Este anillo de aro ancho en dorado mate es una pieza artesanal inspirada en la elegancia clásica y moderna. Cada detalle ha sido trabajado a mano para realzar el brillo sutil del acabado, complementado por un cristal de Swarovski que captura la luz de forma única. Es una joya auténtica, creada para quienes buscan estilo y significado en cada pieza.",
  },
  {
    id: 2,
    name: "Pulsera Knotted",
    main_image: [braceletImage, bracelet2, bracelet3],
    price: 12,
    images: [
      braceletProcess1,
      braceletProcess2,
      braceletProcess3,
      braceletProcess4,
    ],
    description:
      "Hecha a partir de cristales facetados translúcidos que reflejan la luz en cada movimiento. Los cristales están anudados uno a uno en un resistente cordón, formando una pieza versátil que mezcla lo artesanal con un diseño contemporáneo. Es una pulsera pensada para quienes aprecian los detalles únicos y la belleza en lo simple.",
  },
  {
    id: 3,
    name: "Pendiente Boton",
    main_image: [ringImage, earing1, earing2],
    price: 39,
    images: [ringProcess1, ringProcess2, ringProcess3, ringProcess4],
    description:
      "Diseñados para aportar un toque de brillo discreto y sofisticado. Cada circonita, cuidadosamente engastada a mano, captura la luz desde todos los ángulos, creando un destello elegante y sutil. El accesorio perfecto para quienes buscan una pieza versátil y atemporal.",
  },
]; // I see that you have also created a JSON file with the data. The problem was that the JSON file doesn't have the images, so I had to create them here, right?
// another approach could be to add in the json file the array of paths to the images, and add them inside the public folder, so we can access them directly from the json file.

function ProductsList({addChart, setAddChart, chartCount, setChartCount, bagIcon,
  setBagIcon, updateBagIcon}) {
  return (
    <>
      <div className="container-products">
        <h1>NUESTROS PRODUCTOS</h1>
        <section>
          {jewelsData.map((jewel) => (
            <article key={jewel.id}>
              <ProductsCard jewel={jewel} addChart={addChart} setAddChart={setAddChart} chartCount={chartCount} setChartCount={setChartCount} bagIcon={bagIcon} setBagIcon={setBagIcon} updateBagIcon={updateBagIcon}/>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}

export default ProductsList;
