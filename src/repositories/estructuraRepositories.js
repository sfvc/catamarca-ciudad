import { api } from "../service/httpService";

const getIntendenciaData = async () => {
  try {
    const response = await api.get("/external/departamentos/1");
    return response.data;
  } catch (error) {
    console.error("Error al obtener la información de la intendencia", error);
    throw error;
  }
};

const getSecretarias = async () => {
  try {
    const response = await api.get("/external/departamentos/nivel/2");
    return response.data;
  } catch (error) {
    console.error("Error al obtener la información de las secretarías", error);
    throw error;
  }
};

const getTreeData = async ({ deptamentoId }) => {
  try {
    const response = await api.get(`/external/departamentos/tree/${deptamentoId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la información de las secretarías", error);
    throw error;
  }
};

export { getIntendenciaData, getSecretarias, getTreeData };

