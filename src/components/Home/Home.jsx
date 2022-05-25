import React, { useState } from 'react';
import './Home.css';
export default function Home() {
  let [avail, setAvail] = useState('');
  function checkUser(e) {
    if (e.target.value == '') {
      setAvail('');
    }
    setAvail(e.target.value);
  }
  return (
    <div className=" text-dark">
      <header className="d-flex py-2  text-dark justify-content-around">
        <h1 className="font-weight-bold">DevFolio</h1>
        <div className="w-25 d-flex justify-content-around align-items-center">
          <i className="fab fa-instagram fa-2x" />
          <i className="fab fa-twitter fa-2x" />
          <i className="fab fa-linkedin fa-2x" />
          <span>@ramgoel</span>
        </div>
      </header>

      <div className="d-flex justify-content-around align-items-center">
        <div className="container text-center col-6">
          <div className="form w-75 mx-auto text-center d-flex flex-column justify-content-center">
            <h1 className="display-1">
              <b>Hola, Coder!</b>
            </h1>
            <p>{avail}</p>
            <input
              type="text"
              className="userNameInput form-control rounded-3 border-0"
              placeholder="A UserName for You Coder!"
              onChange={(e) => checkUser(e)}
            />
            <button className="submitBtn btn btn-outline-dark my-2 px-3">
              Check Availiblity
            </button>
          </div>
        </div>

        <div className="image w-75 mx-auto d-flex justify-content-center">
          <img
            src="https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=85,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png"
            alt="Screenshot-2022-05-25-at-14-17-52-https-react-lswvvy-stackblitz-io"
            border="0"
            className="homeImage "
          />
        </div>
      </div>

      <div className="p-1 ">
        <div className="footer p-3 w-75 mx-auto d-flex justify-content-around">
          <h4 className="">#DevFolio</h4>
          <div className="w-25 d-flex justify-content-around align-items-center">
            <i className="fab fa-instagram fa-2x" />
            <i className="fab fa-twitter fa-2x" />
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </div>
      </div>
    </div>
  );
}
