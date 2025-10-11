import styles from "./update-profile.module.scss";

import { useUpdateProfile } from "./update-profile-model";
import { Input } from "@components/index";

const UpdateProfile = () => {
  const { inputs, handleSubmit } = useUpdateProfile();

  return (
    <div className="container container--py">
      <div className={styles["update-profile"]}>
        <h1>{inputs?.title}</h1>
        <form onSubmit={handleSubmit(inputs?.onSubmit)}>
          {inputs?.inputs.map((value, index) => (
            <Input key={index} {...value} />
          ))}
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
