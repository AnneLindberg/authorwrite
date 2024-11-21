import React, { useState, useRef, useEffect } from 'react';
import { Theme } from '../../types';

interface Node {
  id: string;
  x: number;
  y: number;
  text: string;
  type: 'character' | 'event' | 'location';
}

interface Connection {
  from: string;
  to: string;
  label: string;
}

interface MindMapProps {
  theme: Theme;
}

const MindMap: React.FC<MindMapProps> = ({ theme }) => {
  const [nodes, setNodes] = useState<Node[]>([
    { id: '1', x: 150, y: 100, text: 'Main Plot', type: 'event' },
    { id: '2', x: 300, y: 200, text: 'Protagonist', type: 'character' },
  ]);

  const [connections, setConnections] = useState<Connection[]>([
    { from: '1', to: '2', label: 'drives' },
  ]);

  const svgRef = useRef<SVGSVGElement>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (nodeId: string, e: React.MouseEvent) => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const node = nodes.find(n => n.id === nodeId);
      if (node) {
        setDragging(nodeId);
        setOffset({
          x: e.clientX - rect.left - node.x,
          y: e.clientY - rect.top - node.y,
        });
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left - offset.x;
      const newY = e.clientY - rect.top - offset.y;
      
      setNodes(nodes.map(node =>
        node.id === dragging
          ? { ...node, x: newX, y: newY }
          : node
      ));
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  return (
    <div className="p-4">
      <svg
        ref={svgRef}
        className={`w-full h-[500px] ${theme.isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg`}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {connections.map((conn, i) => {
          const from = nodes.find(n => n.id === conn.from);
          const to = nodes.find(n => n.id === conn.to);
          if (from && to) {
            return (
              <g key={i}>
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={theme.isDarkMode ? '#4B5563' : '#9CA3AF'}
                  strokeWidth="2"
                />
                <text
                  x={(from.x + to.x) / 2}
                  y={(from.y + to.y) / 2}
                  className={`text-xs ${theme.text}`}
                  textAnchor="middle"
                >
                  {conn.label}
                </text>
              </g>
            );
          }
          return null;
        })}
        
        {nodes.map((node) => (
          <g
            key={node.id}
            transform={`translate(${node.x},${node.y})`}
            onMouseDown={(e) => handleMouseDown(node.id, e)}
            className="cursor-move"
          >
            <circle
              r="30"
              className={`${
                theme.isDarkMode ? 'fill-gray-700' : 'fill-gray-100'
              } stroke-2 ${
                node.type === 'character' ? 'stroke-blue-500' :
                node.type === 'event' ? 'stroke-green-500' : 'stroke-purple-500'
              }`}
            />
            <text
              className={`text-xs ${theme.text} select-none`}
              textAnchor="middle"
              dy=".3em"
            >
              {node.text}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default MindMap;