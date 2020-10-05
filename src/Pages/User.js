import React from "react";
import { Title } from "../Components/Head/Title";
import { UserProfileForm } from "../Components/User/UserProfileForm";

export const User = () => {
  return (
    <div>
      <Title desc="유저프로필"></Title>
      <UserProfileForm />
    </div>
  );
};
