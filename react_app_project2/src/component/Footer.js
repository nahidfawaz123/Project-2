import Logo from "../image/Logo.png";

function Footer() {
  return (
    <div class="footer">
      <div class="footer-box">
        <div class="footer-box-L">
          <div class="footer-box-c">
            <h3>
              <img className="img-footer" src={Logo} />
            </h3>
            <ul>
              <li>
                {" "}
                متخصصون بتخطيط وتنسيق المناسبات العائلية والاجتماعية بالاضافة
                لتنسيق المعارض والمؤتمرات بجود عالية على مستوى الرياض{" "}
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-box-c">
          <h3>روابط سريعة</h3>
          <ul>
            <li>المناسبات</li>
            <li>فرق الرقص </li>
            <li>خةمات العشاء</li>
          </ul>
        </div>
        <div class="footer-box-c">
          <h3>معلومات عنا</h3>
          <ul>
            <li>حسابي</li>
            <li>طرق الدفع </li>
            <li>من نحن </li>
          </ul>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default Footer;
