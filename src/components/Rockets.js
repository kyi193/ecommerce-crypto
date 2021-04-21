import React from "react";
import item1 from "../img/item1.jpg";
import item2 from "../img/item2.jpg";
import item3 from "../img/item3.jpg";
import qrcode from "../img/qrcode.png";

const Rockets = ({ invCount, setInvCount }) => {
  return (
    <section class="section-tours" id="section-tours">
      <div class="u-center-text u-margin-bottom-medium u-margin-top-small">
        <h2 class="heading-secondary">Fleet Warehouse</h2>
      </div>
      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <img class="card__picture card__picture--1" src={item1} />
              <h4 class="card__heading">
                <div class="u-margin-top-small">
                  <span class="card__heading-span card__heading-span--1">
                    The Space Cadet
                  </span>
                </div>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Class: Entry</li>
                  <li>Fits up to 20 people</li>
                  <li>Leather interior</li>
                  <li>Up to 40 light years per fuel</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-value">$110,000 (2 BTC)</p>
                  <img class="u-margin-top-small" src={qrcode} />
                  <p>Scan QR Code to purchase with Bitcoin</p>
                </div>
                <a
                  href="#popup"
                  class="btn btn--white"
                  onClick={() => setInvCount(invCount + 1)}
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <img class="card__picture card__picture--1" src={item2} />
              <h4 class="card__heading">
                <div class="u-margin-top-small">
                  <span class="card__heading-span card__heading-span--2">
                    The Cosmic Bull
                  </span>
                </div>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Class: Mid</li>
                  <li>Fits up to 45 people</li>
                  <li>Entertain room included</li>
                  <li>Up to 100 light years per fuel</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-value">$302,500 (5.5 BTC)</p>
                  <img class="u-margin-top-small" src={qrcode} />
                  <p>Scan QR Code to purchase with Bitcoin</p>
                </div>
                <a
                  href="#popup"
                  class="btn btn--white"
                  onClick={() => setInvCount(invCount + 1)}
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <img class="card__picture card__picture--1" src={item3} />
              <h4 class="card__heading">
                <div class="u-margin-top-small">
                  <span class="card__heading-span card__heading-span--3">
                    Galactic Voyager
                  </span>
                </div>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Class: Enterprise</li>
                  <li>Fits up to 200 people</li>
                  <li>Over 30 office spaces and top of the line experience</li>
                  <li>Up to 500 light years per fuel</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-value">$990,000 (18 BTC)</p>
                  <img class="u-margin-top-small" src={qrcode} />
                  <p>Scan QR Code to purchase with Bitcoin</p>
                </div>
                <a
                  href="#popup"
                  class="btn btn--white"
                  onClick={() => setInvCount(invCount + 1)}
                >
                  Add to Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rockets;
