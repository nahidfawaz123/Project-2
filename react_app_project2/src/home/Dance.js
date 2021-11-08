// import '../styles.css'
import '../App.css'
import gold from "../image/gold.PNG"
function Dance() {
  return (
      <div>
          <div className="dance-header">
                <img height="70px" src={gold}/>
                <h2 className="h2-dance">فرق الرقص</h2>
                <img height="70px" src={gold}/>
          </div>
    <div className="dance">
    <div>
    <img height="330px" width="480px" src="https://test.easacc.com/noura/wp-content/uploads/2021/01/13f1bc1ac7469dfdf3ea0b2787510782.jpg"/>
    <h2 className="dance-h2">الاستعـراض</h2>
    </div>
    <div>
    <img height="330px" width="480px"  src="https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-6.png"/>
    <h2 className="dance-h2">الشـرقـي</h2>
    </div>
    <div>
    <img height="330px" width="480px" src="https://test.easacc.com/noura/wp-content/uploads/2021/01/New-Project-4.png"/>
    <h2 className="dance-h2">البــالية</h2>
    </div>
    </div>
    <div>
    </div>
    <img height="75px" src={gold}/>
    <h2 className="h2-dance">تقديمات العشاء </h2>
    <img height="75px" src={gold}/>
    </div>
  );
}

export default Dance;
