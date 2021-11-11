import '../App.css'
import { useNavigate } from 'react-router-dom';
import gold from "../image/gold.PNG"
import App from '../App';
function Masks() {

  const navigate = useNavigate();

  function goTOItems(x){
    console.log(x);
    return navigate("/Items/"+ x);
  }
  return (
    <div className="masks">
        <div>
            <img width="800px" height="500px" src="https://test.easacc.com/noura/wp-content/uploads/2021/01/image.jpg"/>
        </div>
        <div className="masks-div-note">
            <h1>المسكات</h1>
            <p>مسكات العروس جزء من إطلالة الفتاة بحفل الزفاف وهو ما يجعل اختياره يستحق بعض الوقت</p>
                 <p>منكِ،لإطلالة مثالية، ولهذا إليكِ أجمل مسكات عرايس فخمة</p>
                 <br/>
            <a className="a-class" onClick={() =>goTOItems("masks")} >
					
					
					المـزيـد				</a>
        </div>
        <br/>
    </div>
  );
}

export default Masks;
