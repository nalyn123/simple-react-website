import styles from "./update-profile.module.scss";

import { useUpdateProfile } from "./update-profile-model";
import { Input } from "@components/index";

const UpdateProfile = () => {
  const { inputs, handleSubmit, onSubmit } = useUpdateProfile();

  return (
    <div className="container container--py">
      <div className={styles["update-profile"]}>
        <h1>Update Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...inputs?.input} />
          <Input {...inputs?.submit} />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
