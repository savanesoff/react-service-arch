import React from "react";

// Simple SVG-based dependency map for visual clarity
export const ServiceDependencyMap: React.FC = () => (
  <div className="flex flex-col items-center mt-4 mb-4">
    <h3 className="text-lg font-semibold mb-2 text-fuchsia-700">
      Service Dependency Map
    </h3>
    <div
      className="bg-white rounded-lg shadow-md px-6 py-4 flex flex-col items-center"
      style={{ minWidth: 340 }}
    >
      <svg
        width="320"
        height="180"
        viewBox="0 0 320 180"
        style={{ display: "block", margin: "0 auto" }}
      >
        {/* Nodes */}
        <g fontFamily="monospace" fontSize="12">
          <rect
            x="10"
            y="10"
            width="70"
            height="28"
            rx="8"
            fill="#f3e8ff"
            stroke="#a21caf"
            strokeWidth="2"
          />
          <text x="45" y="28" textAnchor="middle" fill="#a21caf">
            Env
          </text>

          <rect
            x="110"
            y="10"
            width="70"
            height="28"
            rx="8"
            fill="#e0e7ff"
            stroke="#2563eb"
            strokeWidth="2"
          />
          <text x="145" y="28" textAnchor="middle" fill="#2563eb">
            Standby
          </text>

          <rect
            x="210"
            y="10"
            width="70"
            height="28"
            rx="8"
            fill="#fee2e2"
            stroke="#dc2626"
            strokeWidth="2"
          />
          <text x="245" y="28" textAnchor="middle" fill="#dc2626">
            Auth
          </text>

          <rect
            x="10"
            y="70"
            width="70"
            height="28"
            rx="8"
            fill="#d1fae5"
            stroke="#059669"
            strokeWidth="2"
          />
          <text x="45" y="88" textAnchor="middle" fill="#059669">
            Config
          </text>

          <rect
            x="110"
            y="70"
            width="70"
            height="28"
            rx="8"
            fill="#fef9c3"
            stroke="#eab308"
            strokeWidth="2"
          />
          <text x="145" y="88" textAnchor="middle" fill="#eab308">
            Account
          </text>

          <rect
            x="210"
            y="70"
            width="70"
            height="28"
            rx="8"
            fill="#cffafe"
            stroke="#06b6d4"
            strokeWidth="2"
          />
          <text x="245" y="88" textAnchor="middle" fill="#06b6d4">
            VOD
          </text>
        </g>
        {/* Arrows (dependencies) */}
        <g stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)">
          {/* Env -> Auth */}
          <line x1="80" y1="24" x2="210" y2="24" />
          {/* Standby -> Auth (make it more visible) */}
          <line x1="180" y1="24" x2="210" y2="24" strokeDasharray="4 2" />
          {/* Auth -> VOD */}
          <line x1="245" y1="38" x2="245" y2="70" />
          {/* Auth -> Account */}
          <line x1="245" y1="38" x2="145" y2="70" />
          {/* Config -> Env */}
          <line x1="45" y1="38" x2="45" y2="70" />
          {/* Config -> Account */}
          <line x1="80" y1="84" x2="110" y2="84" />
          {/* Config -> VOD */}
          <line x1="80" y1="84" x2="210" y2="84" />
        </g>
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#6366f1" />
          </marker>
        </defs>
      </svg>
      <div className="text-xs text-gray-500 mt-3 text-center w-full flex flex-col items-center">
        <span>Arrows show dependency direction.</span>
        <span className="font-bold text-blue-600">Dashed arrow</span>
        <span>= Standby triggers Auth logout.</span>
      </div>
    </div>
  </div>
);
