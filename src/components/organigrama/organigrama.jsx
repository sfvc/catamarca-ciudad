import { useState, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { AnimatePresence } from 'framer-motion';
import {
  ZoomIn,
  ZoomOut,
  Maximize2,
  Workflow,
  GitBranchPlus,
  PencilIcon
} from 'lucide-react';
import { OrgChart } from './OrgChart';
import { Checkmark } from './Checkmark';

const OrganigramaChart = () => {
  const [data, setData] = useState([]);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    fetch('/data/organigrama.json')
      .then((res) => res.json())
      .then((json) => {
        console.log('📥 JSON cargado:', json);
        setData(json);
      })
      .catch((error) => console.error('❌ Error cargando JSON:', error));
  }, []);

  useEffect(() => {
    console.log('📊 Estado data actualizado:', data);
  }, [data]);

  const handleDisabledTree = () => {
    const updated = disabledTree(data);
    setData(updated);
  };

  return (
    <div className="background-chart">
            <OrgChart data={data} setData={setData} create={create} setCreate={setCreate} />
    </div>
  );
};

export default OrganigramaChart;
