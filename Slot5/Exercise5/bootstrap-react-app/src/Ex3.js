/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "./logo-fpt.png";
import banner from "./banner.png";
import student1 from "./student1.png";
import student2 from "./student2.png";
import student3 from "./student3.png";
import student4 from "./student4.png";

import {
  IconHome,
  IconFileDescription,
  IconIdBadge2,
  IconMenu2,
  IconPhone,
  IconDeviceLandlinePhone,
  IconMail,
  IconBrandGoogle,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

function Ex3() {
  return (
    <div className="container-fluid d-flex flex-column min-vh-100 bg-light align-items-center px-0">
      {/* HEADER */}
      <div
        className="text-center container-fluid text-dark d-flex align-items-center justify-content-space-between"
        style={{ fontSize: "20px", background: "#F0CCA9", height: "250px" }}
      >
        <div className="left container d-flex align-items-center">
          <img
            src={logo}
            alt="FPT Logo"
            className="img-fluid"
            style={{ height: "150px", objectFit: "contain" }}
          />
          <ul className="nav f-flex align-items-center" style={{ width: "1000px" }}>
            <li className="nav-item">
              <a className="nav-link active custom-link" href="/" style={{ color: "#F98900", fontWeight: "bold" }}>
                <IconHome size={24} /> Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" style={{ color: "#F98900", fontWeight: "bold" }}>
                <IconFileDescription size={24} /> Ngành học
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" style={{ color: "#F98900", fontWeight: "bold" }}>
                <IconIdBadge2 size={24} /> Tuyển Sinh
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/students" style={{ color: "#F98900", fontWeight: "bold" }}>
                <IconMenu2 size={24} /> Sinh Viên
              </a>
            </li>
          </ul>
        </div>

        <div className="right container d-flex justify-content-end">
          Search
          <input
            type="text"
            className="form-control ms-2"
            placeholder="Tìm kiếm..."
            style={{ width: "300px" }}
          />
        </div>
      </div>

      {/* BANNER */}
      <div className="banner container-fluid h-100 text-center flex-grow-1 p-5 m-0" style={{ background: "#FF8900" }}>
        <img src={banner} alt="FPT Banner" className="img-fluid" style={{ height: "100%", objectFit: "contain" }} />
      </div>

      {/* NAV LINK */}
      <div className="container w-80 h-50 bg-light">
        <div
          className="d-flex align-items-center justify-content-center text-dark p-3 bg-secondary gap-2"
          style={{ maxWidth: "200px", borderRadius: "4px" }}
        >
          <span style={{ color: "#F98900" }}>Home</span> / Students
        </div>
      </div>

      {/* STUDENT LIST */}
      <div className="students-list container-fluid text-center m-5 flex-grow-1">
        <h1>Students Details</h1>
        <div className="students d-flex flex-wrap justify-content-center">
          {[student1, student2, student3, student4].map((img, index) => (
            <div
              key={index}
              className="student-card p-5 border border-2 rounded-3 bg-white"
              style={{ width: "45%", margin: "10px" }}
            >
              <img src={img} alt={`Student ${index + 1}`} className="img-fluid" />
              <div className="student-info container d-flex flex-wrap justify-content-between align-items-center px-5">
                <p className="w-100">DE16018{index + 1}</p>
                <p>{["Nguyễn Hữu Quốc Khánh", "Chu Vĩnh Thiện", "Đỗ Nguyên Phúc", "Lê Hoàng Minh"][index]}</p>
                <p>{["Đà Nẵng", "Quảng Nam", "Quảng Nam", "Đà Nẵng"][index]}</p>
              </div>
              <div className="checkboxes d-flex flex-wrap justify-content-between align-items-center px-5">
                <div className="form-check d-flex gap-2">
                  <input type="radio" name={`status${index}`} value="absent" id={`absent${index}`} />
                  <label htmlFor={`absent${index}`}>Absent</label>
                </div>
                <div className="form-check d-flex gap-2">
                  <input type="radio" name={`status${index}`} value="present" id={`present${index}`} />
                  <label htmlFor={`present${index}`}>Present</label>
                </div>
              </div>
              <button className="btn mt-3 text-white border border-2" style={{ background: "#F98900" }}>
                Submit
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="footer container-fluid text-black d-flex flex-wrap justify-content-between align-items-center"
        style={{ background: "#F98900", padding: "10px 100px" }}
      >
        <div className="address">
          <h1>OUR ADDRESS</h1>
          <p>Khu đô thị FPT Đà Nẵng</p>
          <p>
            <IconPhone />: +84023111111
          </p>
          <p>
            <IconDeviceLandlinePhone />: +852 8765 4321
          </p>
          <p>
            <IconMail color="black" />: fptudn@fpt.edu.vn
          </p>
        </div>

        <div className="contact d-flex gap-3">
          <IconBrandGoogle size={30} />
          <IconBrandFacebook size={30} />
          <IconBrandLinkedin size={30} />
          <IconBrandTwitter size={30} />
          <IconBrandYoutube size={30} />
          <IconMail size={30} />
        </div>

        <div className="copyright text-center w-100 p-3">
          <p style={{ margin: 0 }}>© 2023 FPT University. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Ex3;
