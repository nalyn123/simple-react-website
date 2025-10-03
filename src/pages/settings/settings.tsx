import { CommonUtils } from "@utils/common-utils";
import { useSettings } from "./settings-model";
import styles from "./settings.module.scss";
import { Logo } from "@assets/images";
import { FormInputProps } from "./settings.interface";

const Settings = () => {
  const { auth, onEdit, onLogout } = useSettings();

  return (
    <div className="container container--py">
      <div className={styles["settings"]}>
        <div className={styles["ettings__profile"]}>
          <img src={Logo} alt="profile" />
        </div>

        <FormInput name="firstname" label="Firstname" value={auth?.firstname} />
        <FormInput name="lastname" label="Lastname" value={auth?.lastname} />
        <FormInput
          name="email"
          label="Email"
          value={CommonUtils.maskEmail(auth?.email ?? "")}
        />

        <div>
          <button
            type="button"
            className={`${styles["btn"]} ${styles["input__input"]}`}
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ name, label, value }: FormInputProps) => {
  const { onEdit } = useSettings();

  return (
    <div className={styles["settings__info"]}>
      {label}: <span>{value}</span>
      <span className={styles["edit"]} onClick={() => onEdit(name)}>
        (edit)
      </span>
    </div>
  );
};

export default Settings;
