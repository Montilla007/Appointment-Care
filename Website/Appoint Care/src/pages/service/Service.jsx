import React from 'react';
import FindDoctor from '../../components/reusecomponent/FindDoctor';
import ServiceProvider from '../../components/reusecomponent/ServiceProvider'
import '../../css/Service.css';
import { NavLink } from 'react-router-dom';

const Service = () => {
  return (
    <div>
      <section className='service'>
        <div className='text-center mt-2 mx-5'>
          <div className="container align-items-center justify-content-center">
            <div className="row align-items-center justify-content-center">
              <div className="col-1"></div>
              <div className="col-5 service-description position-relative">
                <h2>
                  Meet the Best Hospital
                </h2>
                <p className='lead'>We know how large objects will act, but things on a small scale.</p>
                <div className='container mt-5 align-items-center'>
                  <div className='row align-items-center justify-content-center'>
                    <div className='col-5'>
                      <button id="booknow">Get Quote Now</button>
                    </div>
                    <div className='col-5'>
                      <button id="learnmore">Learn More</button>
                    </div>
                    <div className="col-2"></div>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <div className='form-appointment'>
                  <h2>Book Appointment</h2>
                  <label htmlFor="fullName">Full Name *</label>
                  <input type="text" placeholder='Full Name' id="fullName" />
                  <label htmlFor="email">Email address *</label>
                  <input type="email" placeholder='Email address' id="email" />
                  <label htmlFor="location">Location *</label>
                  <select id="location">
                    <option value="">Select Location</option>
                    <option value="SanFabian">San Fabian</option>
                    <option value="Dagupan">Dagupan</option>
                    <option value="Calasiao">Calasiao</option>
                    <option value="SanCarlos">San Carlos</option>
                  </select>
                  <label htmlFor="time">Time *</label>
                  <select id="time">
                    <option value="">Select Time</option>
                  </select>
                  <button>Book Appointment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceProvider />
      {/* <section>
        <div className='container flex-column justify-content-center align-items-center text-center mt-5 mb-5'>
          <div className="Top-Doctors">
            <h2>Top Doctors</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. As ma voluptatum natus odit quisquam accusantium!</p>
          </div>
        </div>
        <div className="profile-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="cards">
                  <div className="img1"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/415048119_7028047027289890_6153064038050563027_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE2MEqRfBPpAqvZTns_P1WRCLlgum8Z4ugIuWC6bxni6Fc1M8AWLj0_Inee-OE3KyDa7bpYKB9Fj_d6P6kS3nlu&_nc_ohc=E8pvDw1lX2IAX8N0xvp&_nc_ht=scontent.fbag1-2.fna&oh=03_AdQ9Br2Y9DHm4mKUqwONxjk1sPeuxYCNKAc9GaWuEhXU7Q&oe=65CE2F15" alt="" /></div>
                  <div className="img2"><img src="https://i.pinimg.com/1200x/37/4d/35/374d35674b81a4fc01f08436e29be877.jpg" alt="Doctor Eye Specialist" /></div>
                  <div className="card-body card-body2">
                    <h2>Sarlito Tayag</h2>
                    <h4>Heart Specialist</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam? Doloribus dolorum, amet voluptatum iste ex minima placeat tempore quia similique alias minus non. Voluptatibus neque rerum sed aliquam molestiae!</p>
                    <NavLink className="mx-auto d-block see-more" to='/DoctorInformation'>See more details...</NavLink>
                  </div>
                  <div className="socials">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-google-plus"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cards">
                  <div className="img1"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/415048119_7028047027289890_6153064038050563027_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE2MEqRfBPpAqvZTns_P1WRCLlgum8Z4ugIuWC6bxni6Fc1M8AWLj0_Inee-OE3KyDa7bpYKB9Fj_d6P6kS3nlu&_nc_ohc=E8pvDw1lX2IAX8N0xvp&_nc_ht=scontent.fbag1-2.fna&oh=03_AdQ9Br2Y9DHm4mKUqwONxjk1sPeuxYCNKAc9GaWuEhXU7Q&oe=65CE2F15" alt="" /></div>
                  <div className="img2"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/418410897_900393581686555_3785317912082608498_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFr8OF0eqXbANywbp1VRL_bLEf-3qiagN4sR_7eqJqA3vwgIV9-2Jj9iklqZahK97CTJIsUMXDBETes71d4lHA6&_nc_ohc=gxyLhrBDXAAAX8nl6PC&_nc_ht=scontent.fbag1-2.fna&oh=03_AdSpW8L9er6-BRVEUjfQNPo9_24zHwEZsrjrS23ATgsHpg&oe=65CE3B39" alt="Doctor Eye Specialist" /></div>
                  <div className="card-body card-body2">
                    <h2>Soophie Moore</h2>
                    <h4>Eye Specialist</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam? Doloribus dolorum, amet voluptatum iste ex minima placeat tempore quia similique alias minus non. Voluptatibus neque rerum sed aliquam molestiae!</p>
                    <NavLink className="mx-auto d-block see-more">See more details...</NavLink>
                  </div>
                  <div className="socials">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-google-plus"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cards">
                  <div className="img1"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/415048119_7028047027289890_6153064038050563027_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE2MEqRfBPpAqvZTns_P1WRCLlgum8Z4ugIuWC6bxni6Fc1M8AWLj0_Inee-OE3KyDa7bpYKB9Fj_d6P6kS3nlu&_nc_ohc=E8pvDw1lX2IAX8N0xvp&_nc_ht=scontent.fbag1-2.fna&oh=03_AdQ9Br2Y9DHm4mKUqwONxjk1sPeuxYCNKAc9GaWuEhXU7Q&oe=65CE2F15" alt="" /></div>
                  <div className="img2"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/414208807_756967762572579_143985876841119456_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFj3NY0q2zCTwSdpGpWkb_hpCHJaEHTxNikIcloQdPE2BgHMFSao16DEi_96VaKlP6Dy_CExh_h4t4CxMnlcHW1&_nc_ohc=0NLapgVXxckAX_N5yCX&_nc_ht=scontent.fbag1-2.fna&oh=03_AdTsXvO6V6W0H9DDJ7vEW5_utvjNsal1OM2Bh0Y1UZVBoQ&oe=65CE3AF2" alt="Doctor Eye Specialist" /></div>
                  <div className="card-body card-body2">
                    <h2>Patrick Myer</h2>
                    <h4>Eye Specialist</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam? Doloribus dolorum, amet voluptatum iste ex minima placeat tempore quia similique alias minus non. Voluptatibus neque rerum sed aliquam molestiae!</p>
                    <NavLink className="mx-auto d-block see-more">See more details...</NavLink>
                  </div>
                  <div className="socials">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-google-plus"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cards">
                  <div className="img1"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/415048119_7028047027289890_6153064038050563027_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE2MEqRfBPpAqvZTns_P1WRCLlgum8Z4ugIuWC6bxni6Fc1M8AWLj0_Inee-OE3KyDa7bpYKB9Fj_d6P6kS3nlu&_nc_ohc=E8pvDw1lX2IAX8N0xvp&_nc_ht=scontent.fbag1-2.fna&oh=03_AdQ9Br2Y9DHm4mKUqwONxjk1sPeuxYCNKAc9GaWuEhXU7Q&oe=65CE2F15" alt="" /></div>
                  <div className="img2"><img src="https://i.pinimg.com/1200x/37/4d/35/374d35674b81a4fc01f08436e29be877.jpg" alt="Doctor Eye Specialist" /></div>
                  <div className="card-body card-body2">
                    <h2>Sarlito Tayag</h2>
                    <h4>Heart Specialist</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam? Doloribus dolorum, amet voluptatum iste ex minima placeat tempore quia similique alias minus non. Voluptatibus neque rerum sed aliquam molestiae!</p>
                    <NavLink className="mx-auto d-block see-more">See more details...</NavLink>
                  </div>
                  <div className="socials">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-google-plus"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cards">
                  <div className="img1"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/415048119_7028047027289890_6153064038050563027_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE2MEqRfBPpAqvZTns_P1WRCLlgum8Z4ugIuWC6bxni6Fc1M8AWLj0_Inee-OE3KyDa7bpYKB9Fj_d6P6kS3nlu&_nc_ohc=E8pvDw1lX2IAX8N0xvp&_nc_ht=scontent.fbag1-2.fna&oh=03_AdQ9Br2Y9DHm4mKUqwONxjk1sPeuxYCNKAc9GaWuEhXU7Q&oe=65CE2F15" alt="" /></div>
                  <div className="img2"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/418410897_900393581686555_3785317912082608498_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFr8OF0eqXbANywbp1VRL_bLEf-3qiagN4sR_7eqJqA3vwgIV9-2Jj9iklqZahK97CTJIsUMXDBETes71d4lHA6&_nc_ohc=gxyLhrBDXAAAX8nl6PC&_nc_ht=scontent.fbag1-2.fna&oh=03_AdSpW8L9er6-BRVEUjfQNPo9_24zHwEZsrjrS23ATgsHpg&oe=65CE3B39" alt="Doctor Eye Specialist" /></div>
                  <div className="card-body card-body2">
                    <h2>Soophie Moore</h2>
                    <h4>Eye Specialist</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam? Doloribus dolorum, amet voluptatum iste ex minima placeat tempore quia similique alias minus non. Voluptatibus neque rerum sed aliquam molestiae!</p>
                    <NavLink className="mx-auto d-block see-more">See more details...</NavLink>
                  </div>
                  <div className="socials">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-google-plus"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="cards">
                  <div className="img1"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/415048119_7028047027289890_6153064038050563027_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE2MEqRfBPpAqvZTns_P1WRCLlgum8Z4ugIuWC6bxni6Fc1M8AWLj0_Inee-OE3KyDa7bpYKB9Fj_d6P6kS3nlu&_nc_ohc=E8pvDw1lX2IAX8N0xvp&_nc_ht=scontent.fbag1-2.fna&oh=03_AdQ9Br2Y9DHm4mKUqwONxjk1sPeuxYCNKAc9GaWuEhXU7Q&oe=65CE2F15" alt="" /></div>
                  <div className="img2"><img src="https://scontent.fbag1-2.fna.fbcdn.net/v/t1.15752-9/414208807_756967762572579_143985876841119456_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFj3NY0q2zCTwSdpGpWkb_hpCHJaEHTxNikIcloQdPE2BgHMFSao16DEi_96VaKlP6Dy_CExh_h4t4CxMnlcHW1&_nc_ohc=0NLapgVXxckAX_N5yCX&_nc_ht=scontent.fbag1-2.fna&oh=03_AdTsXvO6V6W0H9DDJ7vEW5_utvjNsal1OM2Bh0Y1UZVBoQ&oe=65CE3AF2" alt="Doctor Eye Specialist" /></div>
                  <div className="card-body card-body2">
                    <h2>Patrick Myer</h2>
                    <h4>Eye Specialist</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, totam? Doloribus dolorum, amet voluptatum iste ex minima placeat tempore quia similique alias minus non. Voluptatibus neque rerum sed aliquam molestiae!</p>
                    <NavLink className="mx-auto d-block see-more">See more details...</NavLink>
                  </div>
                  <div className="socials">
                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-google-plus"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Service;
