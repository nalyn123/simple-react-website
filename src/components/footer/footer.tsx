import "./footer.scss";
import { Logo, Twitter, Facebook, Youtube } from "@assets/images";
import { useFooter } from "./footer-model";

const Footer = () => {
  const { footerLists, onClick } = useFooter();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer__info col col-12 col-sm-12 col-lg-6">
            <img className="footer__info__logo" src={Logo} alt="" />

            <p className="footer__info__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              aliquam velit id gravida tempus. Integer quis ex magna. Etiam vel
              volutpat nunc, quis mollis nibh. Nulla dignissim, ipsum sit amet
              vulputate vehicula, turpis mauris malesuada lacus, nec pulvinar
              enim nisl sit amet ex. Cras eu sagittis ligula.
            </p>

            <ul className="footer__info__sm">
              <li>
                <a href="#">
                  <img src={Facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Twitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={Youtube} alt="Youtube" />
                </a>
              </li>
            </ul>
          </div>

          {footerLists.map((value, index) => (
            <div key={index} className="footer__links col col-12 col-sm-2">
              <p className="footer__links__header">{value?.label}</p>
              <ul className="footer__links__menu">
                {value?.children?.map((list, i) => (
                  <li key={i}>
                    <button type="button" onClick={() => onClick(list?.path)}>
                      {list?.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
