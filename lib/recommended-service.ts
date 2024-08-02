import { getSelf } from "@/lib/auth-service";
import { db } from "@/lib/db";

export const getRecommended = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  let userID;

  try {
    const self = await getSelf();
    userID = self.id;
  } catch {
    userID = null;
  }
  let users = [];

  if (userID) {
    users = await db.user.findMany({
      where: {
        NOT: {
          id: userID,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return users;
};
