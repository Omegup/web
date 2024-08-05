import './App.css'
import Myinformation from './information';
import Myinformation2 from './information2';
import Myinformation3 from './information3';


function App() {

  return (
    <>
    <div className='showcase'></div>
     
     <div className='frame256'>
   <div className='case1'>
    <Myinformation/>
   </div>
   <div className='divpic1'>
   <img className='pic1' src="src/img/281f1595b1b53bb4f17de668b4c3176c.png" alt="" />
   </div>
   <div className='case2'>
    <Myinformation2/>
   </div>
   <div className='divpic2'>
   <img className='pic2' src="src/img/9e9def22063dd533bcf44c8deeb3adb8.png" alt="" />
   </div>
   <div className='case3'>
    <Myinformation3/>
   </div>
     <div className='divpic3'>
    <img className='pic3' src="src/img/f11c10a6635e5318df2e87b14497082e.png" alt="" />
    </div>
    </div> 
    </>

  );
}


export default App;


