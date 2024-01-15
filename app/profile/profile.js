"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

function Profile() {
  const { data: session } = useSession();
  return <Profile name={session?.user.name} />;
}

export default Profile;
