import { liveblocks } from "../../../lib/liveblocks";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserColor } from "../../../lib/utils";

export async function POST(request: Request) {
  const clerkUser = await currentUser();
  console.log("live blocks auth....")
  if(!clerkUser) redirect('/sign-in')

  const { id, firstName, emailAddresses, imageUrl } = clerkUser;
  
  const user = {
    id,
    info: {
      id,
      name: `${firstName}`,
      email: emailAddresses[0].emailAddress,
      avatar: imageUrl,
      color: getUserColor(id)
    }
  }
  console.log(user)

  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.info.email,
      groupIds: [],
    },
    { userInfo: user.info },
  );

  return new Response(body, { status });
  
}