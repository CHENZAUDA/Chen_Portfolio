import { useEffect, useState } from 'react';
import './SkillBar.css'

const SkillBar = (props) => {

  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    setLineWidth(props.skillLevel);
  }, []);

  return (
    <div className="skill-container">
      <div className="skill-parent">
        <div className="skill-name">{props.skillName}</div>
        <div><b>{props.skillLevel}%</b></div>
      </div>
      <div className="skill-line">
        <div style={{ width: `${lineWidth}%`, height: '100%', background: '#ff5823', borderRadius: '16px', transition: '3s all' }}></div>
      </div>
    </div>
  );
}

export default SkillBar;