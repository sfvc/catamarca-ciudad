// OrgChart.jsx
import React from 'react';

export const OrgChart = ({ data }) => {
  const renderNode = (node) => (
    <div className="org-node" key={node.id}>
      <div className="org-node__content">
        <img src={node.data?.image} alt={node.data?.name} className="org-node__image" />
        <div className="org-node__text">
          <div className="org-node__name">{node.data?.name}</div>
          <div className="org-node__title">{node.data?.title}</div>
        </div>
      </div>
      {node.children && (
        <div className="org-node__children">
          {node.children.map(child => renderNode(child))}
        </div>
      )}
    </div>
  );

  return (
    <div className="org-chart">
      {data.map(node => renderNode(node))}
    </div>
  );
};
