import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();
  if (!self || !self.username) {
    throw new Error("User not found");
  }
  const users = await db.user.findUnique({
    where: { externalUserId: self.id },
  });
  if (!users) {
    throw new Error("Not found");
  }
  return users;
};
