import { useEffect, useRef, useState } from "react";
import ApexTree from "apextree";

const ApexTreeCanva = ({ renderTreeData }) => {
  const treeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (treeRef.current && containerRef.current) {
      const options = {
        contentKey: "data",
        width: 1000,
        width: 2000,
        height: 1000,
        nodeWidth: 800,
        nodeHeight: 500,
        fontColor: "#1d2b4e",
        childrenSpacing: 60,
        siblingSpacing: 40,
        direction: "top",
        enableExpandCollapse: false,
        enableToolbar: true,
        nodeStyle:
          "display:flex; align-items:center; justify-content:center; width:100%;",
        nodeTemplate: (content) => {
          return `
           <div class="apex-card" style="padding:10px 0px; text-aling:center;">
              <div class="apex-card">
                <div class="apex-card">
                  <img class="img-circle img-thumbnail" src="${
                    content.Chief[0]?.url_photo ||
                    "https://blog-eeuu.com/wp-content/uploads/2018/08/breaking-bad-logo.jpeg"
                  }" alt="Imagen del jefe" style="width: 96px; height: 96px;">
                  <span class="apex-card__h4">${content.name || "Sin nivel definido"}</span>
                  <h5 class="h5">
                    ${
                      content?.Chief[0]
                        ? `${content.Chief[0]?.firstname} ${content.Chief[0]?.lastname}`
                        : "Sin Funcionario asignado"
                    }
                  </h5>
                  <a href="/organigrama/${content.name}/ver-departamento/${
            content.id
          }" class="apex-card__btn">Ver departamento</a>
                </div>
              </div>
            </div>`;;
        },
      };

      const tree = new ApexTree(treeRef.current, options);
      tree.render(renderTreeData);

      // Cleanup cuando el componente se desmonte
      return () => {
        // tree.destroy();
      };
    }
  }, [renderTreeData]);

  return (
    <div
      className="container"
      ref={containerRef}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <div 
        ref={treeRef} 
        style={{ width: "100%", height: "100%" }} 
      ></div>
    </div>
  );
};

export { ApexTreeCanva };
