import React from "react";
import GridPage from "../grid/gridPage";

const Miembros = ({ perfiles }) => {
  // Access the first gridGabinete object from the perfiles prop (assuming it exists)
  const gridData = perfiles.gridGabinete && perfiles.gridGabinete[0];

  if (!gridData) {
    return <br/>;
  }

  return (
    <div>
      {/* Pass the gridData as a prop to GridPage */}
      <GridPage grid={gridData} />
    </div>
  );
};

export default Miembros;
