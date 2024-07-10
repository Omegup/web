import './head.css';
import { useState } from 'react';

interface Objective {
  name: string;
  isshowed: boolean;
}

let initialeobjectives: Objective[] = [
  { name: 'our mission', isshowed: false },
  { name: 'our ambition', isshowed: false },
  { name: 'our vibe', isshowed: false },
  { name: 'our vision', isshowed: true }
];

function Head() {
  const [objectives, setObjectives] = useState(initialeobjectives);

  function handleClick(i: number) {
    let updatedObjectives = objectives.map((obj, index) => ({
      ...obj,
      isshowed: index === i ? obj.isshowed===true? true :true:false// Toggle the clicked objective and collapse others
    }));
    setObjectives(updatedObjectives);
  }
  const styles:React.CSSProperties={
    backgroundImage: 'url(./image.png)'
  }
  return (
    <>
      <div className='container' >
        <p id='text2'>What shapes our identity!</p>
        <h4 id='titrebis'>Our objectives have remained unwavering</h4>
        <p id='texte3'>
          Imagine, explore, delve into particulars, chase the next wild adventure, forever <br />
          absorb wisdom, and leave an indelible mark on the world!
        </p>
      </div>
      <div className='objectives'>
        {objectives.map((obj, i) => (
          <div 
            key={i} 
            className={`objective objective${i} ${obj.isshowed ? 'expanded' : ''}`} 
            onClick={() => handleClick(i)}
          >
       
            
            <div className={`title${obj.isshowed}`}>{obj.name}</div>
            <div className={`expandedContent`}>
              {i === 0 && obj.isshowed && (
                <>
                  🚀 Unleashing Digital Dreams 🌟
                </>
              )}
              {i === 1 && obj.isshowed && (
                <>
                  🌐 Pioneering the Digital Frontier 🚀<br />
                  A world where ambition knows no bounds
                  <p>
                    Our vision is to lead the charge in redefining the digital landscape. We envision a world where innovation knows no bounds,
                    where every pixel tells a story, and where your online presence is nothing short of legendary.
                  </p>
                </>
              )}
              {i === 2 && obj.isshowed && (
                
                <>
                  🎨 Where Creativity Meets Code 🤝<br />
                  A world where ambition knows no bounds.
                  <p>
                  
                    Our vibe is a fusion of artistry and technology.
                    We're a creative powerhouse where collaboration fuels innovation, where every idea has the potential to reshape the digital universe.
                  </p>
                </>
              )}
              {i === 3 && obj.isshowed && (
                <>
                  🌟 Elevate, Innovate, Impact 🚀 <br />
                  Pioneer excellence. Set benchmarks
                  <p>
                    Our ambition knows no limits. We aspire to elevate your brand, 
                    innovate without compromise, and leave a lasting impact on the digital world. Together, we'll conquer the impossible.
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Head;
