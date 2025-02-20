import { useEffect, useRef, useState } from "react";
import ApexTree from "apextree";

const ApexTreeCanva = ({ renderTreeData }) => {
  const treeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (treeRef.current && containerRef.current) {
      const options = {
        contentKey: "data",
        width: 500,
        height: 1000,
        nodeWidth: 800,
        nodeHeight: 350,
        fontColor: "#1d2b4e",
        childrenSpacing: 60,
        siblingSpacing: 40,
        direction: "top",
        enableExpandCollapse: true,
        enableToolbar: false,
        nodeStyle:
          "box-shadow: -3px -6px 8px -5px rgba(0, 0, 0, 0.31);display: flex;justify-content: center;width: 100%;height: 100%",
        nodeTemplate: (content) => {
          return `
           <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              <div class="panel panel-default">
                <div class="panel-body text-center">
                  <span class="h4">${content.name || "Sin nivel definido"}</span>
                  <br>
                  <span class="text-muted">${content.Level.name}</span>
                  <br>
                  <span class="text-muted">ID: ${content.id}</span>
                  <img class="img-circle img-thumbnail" src="${
                    content.Chief[0]?.url_photo ||
                    "https://blog-eeuu.com/wp-content/uploads/2018/08/breaking-bad-logo.jpeg"
                  }" alt="Imagen del jefe" style="width: 96px; height: 96px;">
                  <h5 class="h5">
                    ${
                      content?.Chief[0]
                        ? `${content.Chief[0]?.firstname} ${content.Chief[0]?.lastname}`
                        : "Sin Funcionario asignado"
                    }
                  </h5>
                  <a href="/organigrama/${content.name}/ver-departamento/${
            content.id
          }" class="btn btn-info btn-sm">Ver departamento</a>
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
      ref={containerRef}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
    >
      <div ref={treeRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export { ApexTreeCanva };
