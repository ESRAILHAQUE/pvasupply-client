import AllProducts from "@/components/sections/allProducts";
import Hero from "@/components/sections/hero";
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
      </div>

     
  
    </div>
  );
}
