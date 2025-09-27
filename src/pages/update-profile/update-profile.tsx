import "./update-profile.scss";

import { useUpdateProfile } from "./update-profile-model";
import { Input } from "@components/index";

const UpdateProfile = () => {
  const { inputs, handleSubmit, onSubmit } = useUpdateProfile();

  return (
    <div className="container container--py">
      <div className="update-profile">
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
