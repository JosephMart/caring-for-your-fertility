import React from 'react';

export const Home = () => (
  <div>
    <section className="billboard">
      <div className="wrapper">
        <div className="caption">
          <p>Caring for your fertility</p>
          <p>Pat Martinsen</p>
        </div>
      </div>
    </section>
    <section className="features">
      <div className="wrapper">
        <div className="feature">
          <div className="ficon">
            <img src="img/icon1.png" alt="" />
          </div>
          <div className="details_exp">
            <h3>Excepteur sint.</h3>
            <p>Coccaecat cupidatat aliqu proident sunt in culpa qui officia deserunt mollit anim.</p>
            <a href="">more details<span>→</span></a>
          </div>
        </div>
        <div className="feature">
          <div className="ficon">
            <img src="img/icon2.png" alt="" />
          </div>
          <div className="details_exp">
            <h3>Excepteur sint.</h3>
            <p>Coccaecat cupidatat aliqu proident sunt in culpa qui officia deserunt mollit anim.</p>
            <a href="">more details<span>→</span></a>
          </div>
        </div>
        <div className="feature">
          <div className="ficon">
            <img src="img/icon3.png" alt="" />
          </div>
          <div className="details_exp">
            <h3>Excepteur sint.</h3>
            <p>Coccaecat cupidatat aliqu proident sunt in culpa qui officia deserunt mollit anim.</p>
            <a href="">more details<span>→</span></a>
          </div>
        </div>
        <div className="feature">
          <div className="ficon">
            <img src="img/icon4.png" alt="" />
          </div>
          <div className="details_exp">
            <h3>Excepteur sint.</h3>
            <p>Coccaecat cupidatat aliqu proident sunt in culpa qui officia deserunt mollit anim.</p>
            <a href="">more details<span>→</span></a>
          </div>
        </div>
        <div className="feature">
          <div className="ficon">
            <img src="img/icon5.png" alt="" />
          </div>
          <div className="details_exp">
            <h3>Excepteur sint.</h3>
            <p>Coccaecat cupidatat aliqu proident sunt in culpa qui officia deserunt mollit anim.</p>
            <a href="">more details<span>→</span></a>
          </div>
        </div>
        <div className="feature">
          <div className="ficon">
            <img src="img/icon6.png" alt="" />
          </div>
          <div className="details_exp">
            <h3>Excepteur sint.</h3>
            <p>Coccaecat cupidatat aliqu proident sunt in culpa qui officia deserunt mollit anim.</p>
            <a href="">more details<span>→</span></a>
          </div>
        </div>
      </div>
    </section>
    <section className="testimonials wrapper">

      <span className="sep_line sep_top">
      </span>

      <h2>Testimonials</h2>
      <div className="testi_slider" id="tslider">
        <div className="t">
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur.</p>
          <p className="author">John Doe - UX Designer</p>
        </div>
        <div className="t">
          <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur.</p>
          <p className="author">Jane Eva - SEO Expert</p>
        </div>
        <div className="t">
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur, Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="author">John David - Developer</p>
        </div>
      </div>
      <div id="t_navigation"></div>
      <span className="sep_line sep_bottom"></span>

    </section>
    <section className="info">

      <div className="info_pic">

      </div>
      <div className="info_details">
        <h3>sed do eiusmod tempor incididunt ut labore et dolore.</h3>
        <p>Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
        <a href="">More Details <span>→</span></a>
      </div>

    </section>

    <section className="cta">
      <h3>Take Action & buy your copy now!</h3>
      <p>excepteur sint occaecat cupidatat non proiden deserunt mollit anim laborum.</p>
      <a href="" className="cta_btn">Sign up now!</a>
      <span className="cta_sep"></span>
    </section>

    <footer>
      <img src="img/logo_footer.png" alt="Crafty" />
      <p className="rights">Copyright © crafty - All rights reserved, Find more free templates at <a href="http://pixelhint.com">Pixelhint.com</a></p>
    </footer>
  </div>
)
