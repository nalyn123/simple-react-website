import { CommonUtils } from "@utils/common-utils";
import { useSettings } from "./settings-model";
import "./settings.scss";
import { Logo } from "@assets/images";

const Settings = () => {
  const { auth, onEdit, onLogout } = useSettings();

  return (
    <div className="container container--py">
      <div className="settings">
        <div className="settings__profile">
          <img src={Logo} alt="profile" />
        </div>

        <div className="settings__info">
          Firstname: <span>{auth?.firstname}</span>
          <span className="edit" onClick={() => onEdit("firstname")}>
            (edit)
          </span>
        </div>
        <div className="settings__info">
          Lastname: <span>{auth?.lastname}</span>
          <span className="edit" onClick={() => onEdit("lastname")}>
            (edit)
          </span>
        </div>
        <div className="settings__info">
          Email: <span>{CommonUtils.maskEmail(auth?.email ?? "")}</span>
          <span className="edit" onClick={() => onEdit("email")}>
            (edit)
          </span>
        </div>

        <div>
          <button type="button" className="btn input__input" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
