"use client";
import { useRouter } from "next/navigation";

import useOrganizationMembership from "../hooks/useOrganizationMembership";
import useOrganizationRole from "../hooks/useOrganizationRole";
import { checkUserPermission } from "@/sessionUtils";
import { useSession } from "@clerk/nextjs";
function AdminDashboardPage() {
  // const router = useRouter()
  // useOrganizationMembership('Marketplace-Customer-Support', router);

  // Example usage
  const {isSignedIn, session} = useSession();
  if (!isSignedIn) return null;
  const userHasPermission = checkUserPermission(
    session,
    "Marketplace-Customer-Support",
    "org:sys_profile:manage"
  );
  console.log("User has permission: org:sys_profile:manage=", userHasPermission);
  return (
    <div>
      <h1>Welcome to the Admin Dashboard!</h1>
    </div>
  );
}

export default AdminDashboardPage;
