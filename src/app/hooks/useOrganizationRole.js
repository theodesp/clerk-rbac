import { useSession } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const useOrganizationRole = (organizationName, requiredRole) => {
  const { isSignedIn, session } = useSession();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (isSignedIn && session?.user?.organizationMemberships) {
      const organization = session?.user?.organizationMemberships.find(
        (org) => org.organization.name === organizationName
      );
      if (organization) {
        setUserRole(organization.role);
      }
    }
  }, [organizationName, session, isSignedIn, requiredRole]);

  const hasRequiredRole = userRole === requiredRole;

  return hasRequiredRole;
};

export default useOrganizationRole;
