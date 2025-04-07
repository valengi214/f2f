import { useState, useEffect } from "react";
import ProCard from "./components/ProCard";
import FilterBar from "./components/FilterBar";
import proData from "./data/pro.json";
import Footer from './components/Footer';

import './App.css';

function App() {

  const [pros, setPros] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [sido, setSido] = useState("");
  const [sigungu, setSigungu] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {
    setPros(proData);
    setFiltered(proData);
  }, []); 

  useEffect(() => {
    const result = pros.filter((pro) => {
      const matchesRegion = pro.regions.some((region) => {
        const matchSido = sido ? region.sido === sido : true;
        const matchSigungu = sigungu
          ? region.sigungu === sigungu || region.sigungu === "전체"
          : true;
        return matchSido && matchSigungu;
      });

      const matchesService = service
        ? pro.services.some((s) => s.includes(service))
        : true;

      return matchesRegion && matchesService;
    });

    setFiltered(result);
  }, [sido, sigungu, service, pros]);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 title-font" >맘 편한 서비스</h1>
      <FilterBar
        sido={sido}
        setSido={setSido}
        sigungu={sigungu}
        setSigungu={setSigungu}
        service={service}
        setService={setService}
        pros={pros}
      />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {filtered.map((pro, idx) => (
          <ProCard key={idx} pro={pro} />
        ))}
      </div>
    
        <Footer />

    </div>
  );
}

export default App;
