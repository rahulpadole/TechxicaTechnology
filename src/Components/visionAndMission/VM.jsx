// VM.jsx
import React from 'react';
import './VM.css';

const VM = () => {
  return (
    <div className="vm-container">
      <div className="vm-cards-container">
        <div className="vm-card vision-card">
          <div className="vm-card-label">VISION</div>
          <div className="vm-card-content">
            <p>
              We dismantle outdated tech education
              by immersing students in real software
              warfare: building production-grade apps,
              optimizing AWS architectures, and
              training ML models that solve actual
              business problems. Our programs don’t
              just teach—they simulate Silicon Valley
              pressure cookers, turning coders into
              full-stack strategists who can ship,
              debug, and disrupt.

            </p>
            <div className="vm-card-icon" role="img" aria-label="rocket">🚀</div>
          </div>
        </div>

        <div className="vm-card mission-card">
          <div className="vm-card-label">MISSION</div>
          <div className="vm-card-content">
            <p>
              To forge the architects of the digital
              future—where every developer we train
              doesn’t just write code, but engineers
              ecosystems. We envision a tech
              landscape dominated by our graduates:
              thinkers who speak in algorithms, scale
              with the cloud, and deploy AI as their
              second language.
            </p>
            <div className="vm-card-icon" role="img" aria-label="target">🎯</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VM;