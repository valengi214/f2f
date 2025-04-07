function FilterBar({ sido, setSido, sigungu, setSigungu, service, setService, pros }) {
   // 모든 시도 수집 (중복 제거)
   const sidos = [...new Set(
    pros.flatMap(p => Array.isArray(p.regions) ? p.regions.map(r => r.sido) : [])
  )];
  

   // 선택된 시도에 해당하는 시군구 목록
   const sigungus = [...new Set(
    pros
      .filter(p => Array.isArray(p.regions) && p.regions.some(r => r.sido === sido))
      .flatMap(p =>
        p.regions
          .filter(r => r.sido === sido)
          .map(r => r.sigungu)
      )
  )];

  // 모든 서비스 (중복 제거)
  const services = [...new Set(
    pros.flatMap(p => p.services || [])
  )];
  
    return (
        <div className="filter-bar p-3 bg-light rounded mb-4 d-flex flex-wrap gap-3">
          <select className="form-select w-auto" value={sido} onChange={(e) => setSido(e.target.value)}>
            <option value="">시/도 선택</option>
            {sidos.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
    
          <select className="form-select w-auto" value={sigungu} onChange={(e) => setSigungu(e.target.value)}>
            <option value="">시군구 선택</option>
            {sigungus.map(sg => (
              <option key={sg} value={sg}>{sg}</option>
            ))}
          </select>
    
          <select className="form-select w-auto" value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">서비스 선택</option>
            {services.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      );
  }
  
  export default FilterBar;
  