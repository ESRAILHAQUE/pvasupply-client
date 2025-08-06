
import About from "@/components/sections/about";
import AllProducts from "@/components/sections/allProducts";
import BusinessPlan from "@/components/sections/businessPlan";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Purchase from "@/components/sections/purchase";
import RealDocuments from "@/components/sections/realDocuments";
import Services from "@/components/sections/services";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        
  
        <Hero />
        <RealDocuments />
        <Services />
        <AllProducts />
        <About />
        <Purchase />
        <BusinessPlan />
        <Contact />
        
      </div>

     
  
    </div>
  );
}
