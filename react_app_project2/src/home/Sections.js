// import '../styles.css';
// import '../styles.css'
import '../App.css'
import img1 from "../image/1.jpg"
import img3 from "../image/3.jpg"
import img4 from "../image/4.jpg"
import img6 from "../image/6.jpg"
import gold from "../image/gold.PNG"
function Sections() {
  return (
      <div>
          <div className="section-header">
                <img height="70px" src={gold}/>
                <h2 className="h2-section">المناسبات</h2>
                <img height="70px" src={gold}/>
          </div>
    <div className="sections">
      <div>
      <img height="90px" src={img3}/>
    <h3>استقبال المواليد</h3>
    </div>
    <div>
    <img height="90px" src={img6}/>
    <h3>أعياد الميلاد</h3>
    </div>
    <div>
    <img height="90px" src={img4}/>
    <h3>مناسبات التخرج</h3>
    </div>
    <div>
    <img height="90px" src={img1}/>
    <h3>تنسيق زواجات</h3>
    </div>
    </div>
    <div>
    </div>
    <img height="100px" src={gold}/>
    <img height="100px" src={gold}/>
    </div>
  );
}

export default Sections;
