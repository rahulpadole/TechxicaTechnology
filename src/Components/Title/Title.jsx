// Title.jsx
import './Title.css';

const Title = ({ subTitle, title }) => {
  return (
    <div id="Program">
      <section className="program-section">
        <div className='title'>
          {subTitle && <h1 className="gradient-heading">{subTitle}</h1>}
          {title && <h2 className="subtitle">{title}</h2>}
        </div>
      </section>
    </div>
  );
};

export default Title;