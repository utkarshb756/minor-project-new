import React, { useEffect } from 'react'
import "./Home.css"
import logo from "../../images/logo2.png";
import profile from "../../images/profile.jpg";





function Home() {
  


    useEffect(() => {
        const lordiconScript = document.createElement('script');
        lordiconScript.src = "https://cdn.lordicon.com/ritcuqlt.js";
        document.body.appendChild(lordiconScript);
    
        const fontawesomeScript = document.createElement('script');
        fontawesomeScript.src = "https://kit.fontawesome.com/3e0ba4391f.js";
        fontawesomeScript.crossOrigin = "anonymous";
        document.body.appendChild(fontawesomeScript);
    
        return () => {
          document.body.removeChild(lordiconScript);
          document.body.removeChild(fontawesomeScript);
        };
      }, []);


  return (
  
        <div>
          <div className="sidebar close">
            <div className="logo-details">
              <img src={logo} width="50px" style={{marginLeft: '15px'}} height="50px" alt="" />
              <span className="logo_name">SkoolForce</span>
            </div>
            <ul className="nav-links">
              <li>
                <a href="home.html">
                  <i><lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="hover" colors="primary:#ffffff" state="hover-1" style={{width: '20px', height: '20px'}}>
                    </lord-icon></i>
                  <span className="link_name">Dashboard</span>
                </a>
                <ul className="sub-menu blank">
                  <li><a className="link_name" href="home.html">Dashboard</a></li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                  <a href="#">
                    <i><lord-icon src="https://cdn.lordicon.com/zqxjldws.json" trigger="morph" colors="primary:#ffffff" state="morph-cash-card-1" style={{width: '20px', height: '20px'}}>
                      </lord-icon></i>
                    <span className="link_name">Finance</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow" />
                </div>
                <ul className="sub-menu">
                  <li><a className="link_name" href="#">Finance</a></li>
                  <li><a href="#">Pending Payment</a></li>
                  <li><a href="#">Previous Payments</a></li>
                </ul>
              </li>
              <li>
                <div className="iocn-link">
                  <a href="#">
                    <i><lord-icon src="https://cdn.lordicon.com/kipaqhoz.json" trigger="morph" colors="primary:#ffffff" style={{width: '20px', height: '20px'}}>
                      </lord-icon></i>
                    <span className="link_name">Academics</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow" />
                </div>
                <ul className="sub-menu">
                  <li><a className="link_name" href="#">Academics</a></li>
                  <li><a href="attendance.html">Attendance</a></li>
                  <li><a href="#">Syllabus</a></li>
                  <li><a href="#">Class Time Table</a></li>
                  <li><a href="#">Study Material</a></li>
                </ul>
              </li>
              <li>
              </li><li>
                <div className="iocn-link">
                  <a href="#">
                    <i><lord-icon src="https://cdn.lordicon.com/kulwmpzs.json" trigger="morph" colors="primary:#ffffff" style={{width: '20px', height: '20px'}}>
                      </lord-icon></i>
                    <span className="link_name">Exams</span>
                  </a>
                  <i className="bx bxs-chevron-down arrow" />
                </div>
                <ul className="sub-menu">
                  <li><a className="link_name" href="#">Exams</a></li>
                  <li><a href="#">Grades</a></li>
                  <li><a href="#">Schedule</a></li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i><lord-icon src="https://cdn.lordicon.com/qjuahhae.json" trigger="morph" colors="primary:#ffffff" state="morph" style={{width: '20px', height: '20px'}}>
                    </lord-icon></i>
                  <span className="link_name">Calendar</span>
                </a>
                <ul className="sub-menu blank">
                  <li><a className="link_name" href="#">Calendar</a></li>
                </ul>
              </li>
              <li>
                <div className="profile-details">
                  <div className="profile-content">
                    <i className="bx bx-user
         " />
                  </div>
                  <i className="bx bx-log-out" />
                </div>
              </li>
            </ul>
          </div>
          <section className="home-section">
            <div className="home-content">
              <i className="bx bx-menu" />
            </div>
            {/*profile */}
            <div className="main">
              <div className="logo">
                <div className="ig">
                  <img src={profile} id="navbar" alt="" />
                </div>
                <div className="float" id="flow">
                  <div className="profile">
                    <img src="./images/profile.jpg" alt="" />
                    <h4>UserName</h4>
                  </div>
                  <hr />
                  <div className="ic">
                    <lord-icon src="https://cdn.lordicon.com/osuxyevn.json" trigger="hover" state="hover-1" style={{width: '32px', height: '32px'}}>
                    </lord-icon>
                    <a href="home.html"> <p>Dashboard</p></a>
                  </div>
                  <div className="ic">
                    <lord-icon src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="boomerang" style={{width: '32px', height: '32px'}}>
                    </lord-icon>
                    <a href> <p>Edit Profile</p></a>
                  </div>
                  <div className="ic">
                    <lord-icon src="https://cdn.lordicon.com/hwuyodym.json" trigger="hover" style={{width: '32px', height: '32px'}}>
                    </lord-icon>
                    <a href>  <p>Privacy Settings</p></a>
                  </div>
                  <div className="ic">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA00lEQVR4nO2Wuw3CMBBAXwGUsAEdS/BZg4IJGIOOMAKruEUMAMwQGgYAGowsOZITxUG5JCckeNI1lnPPtuzLQZ4BsAOugBVGCiQ+V5SkgcAWwuWKkvpJU+TMg51FyVbTFPspz1/kWAMT8py6OLoncANmwdgQMG2LrI87sAzG+12JLPACNnU+KnKs+Vj3QE8iklQGA4w0RBa4AGMN0VlDZCRHd9C6DGrX+yse7EOrBK20imoZP/jjS/0E12BIWfgclc1Jm+3Wtkrkmj4ny3YmidIG8g1EWe/xhnGWaAAAAABJRU5ErkJggg==" />
                    <a href="login.html"><p>Logout</p></a>
                  </div>
                </div>
              </div>
            </div>
            {/*calendar on home page*/}
            <div className="home-data">
              <section className="light">
                <div className="calendar">
                  <div className="calendar-header">
                    <span className="month-picker" id="month-picker">February</span>
                    <div className="year-picker">
                      <span className="year-change" id="prev-year">
                        <pre>&lt;</pre>
                      </span>
                      <span id="year">2021</span>
                      <span className="year-change" id="next-year">
                        <pre>&gt;</pre>
                      </span>
                    </div>
                  </div>
                  <div className="calendar-body">
                    <div className="calendar-week-day">
                      <div>Sun</div>
                      <div>Mon</div>
                      <div>Tue</div>
                      <div>Wed</div>
                      <div>Thu</div>
                      <div>Fri</div>
                      <div>Sat</div>
                    </div>
                    <div className="calendar-days" />
                  </div>
                  <div className="calendar-footer">
                  </div>
                  <div className="month-list" />
                </div>
              </section>
              {/*events section*/}
              <div>
                <h1 className="events">Upcoming Events:-</h1>
                <div className="notice-board">
                  <marquee behavior direction="up" scrollamount={5}>
                    <div className="notices">
                      <div className="center">
                        <div><p className="no">1</p></div>
                        <div className="notice-para"> <p>COURSE </p></div>
                        <div> <p>REGISTRATION</p></div>
                      </div>
                    </div>
                    <div className="notices">
                      <div className="center">
                        <div><p className="no">2</p></div>
                        <div className="notice-para"> <p>COURSE </p></div>
                        <div> <p>APPROVAL</p></div>
                      </div>
                    </div>
                    <div className="notices">
                      <div className="center">
                        <div><p className="no">3</p></div>
                        <div className="notice-para"> <p>CULTURAL</p></div>
                        <div> <p>FEST</p></div>
                      </div>
                    </div>
                    <div className="notices">
                      <div className="center">
                        <div><p className="no">4</p></div>
                        <div className="notice-para"> <p>EXAMINATION </p></div>
                      </div></div></marquee>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  

export default Home
