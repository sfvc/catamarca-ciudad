import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Info, Pointer, Trash } from 'lucide-react';

export const NodeTemplate = ({
  node,
  handleMove,
  handleDelete,
  data,
  setData,
  nodesSelected,
  setNodesSelected,
  dialogMerge
}) => {

  const selectMergeNodes = (node) => {
    if (nodesSelected.length >= 2) return;

    const updatedSelection = [...nodesSelected, node];
    setNodesSelected(updatedSelection);

    const updatedTree = activeNodes(data, node);
    setData(updatedTree);

    if (updatedSelection.length === 2) {
      dialogMerge();
    }
  };

  if (node.type === 'placeholder') {
    return <div style={{ height: '40px', backgroundColor: 'transparent' }}></div>;
  }

  return (
    <div className="node-template">
      <div className="node-template__container">
        <div className="node-template__header" onClick={() => selectMergeNodes(node)}>
          <img
            alt={node?.data?.name}
            src={node?.data?.image}
            className="node-template__image"
          />
          <div className="node-template__info">
            <span className="node-template__name">{node?.data?.name}</span>
            <span className="node-template__title">{node?.data?.title}</span>
          </div>
        </div>

        <Divider className="node-template__divider" />

        <div className="node-template__actions">
          <Button className="node-template__button" severity="secondary" text size="small">
            <Info className="node-template__icon" />
          </Button>
          <Button
            className="node-template__button"
            severity="secondary"
            text
            size="small"
            onClick={() => handleMove(node)}
          >
            <Pointer className="node-template__icon" />
          </Button>
          <Button
            className="node-template__button"
            severity="secondary"
            text
            size="small"
            onClick={() => handleDelete(node)}
          >
            <Trash className="node-template__icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};
