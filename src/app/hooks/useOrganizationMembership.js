import { useSession } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const useOrganizationMembership = (
  organizationName,
  router,
  redirectTo = "/"
) => {
  const { isSignedIn, session } = useSession();
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    if (!isSignedIn) return; // Return early if session is not yet loaded

    // Simulated logic to check if the user is a member of the organization
    const checkMembership = () => {
      // Perform your logic to check if the user is a member of the organization
      // For example, you could check the user's organization memberships against the current organization slug
      // Replace this with your actual logic
      const userOrganizations = session?.user?.organizationMemberships.map(
        (membership) => membership.organization.name
      );
      if (userOrganizations) {
        setIsMember(userOrganizations.includes(organizationName));
      }
    };

    // Call the checkMembership function when the component mounts
    checkMembership();

    // Redirect to the homepage if the user is not a member of the organization
    if (!isMember) {
      router.push(redirectTo); // Redirect to the homepage with temporary redirect status
    }
  }, [organizationName, session, redirectTo, isMember, isSignedIn, router]); // Add any dependencies here

  return isSignedIn && isMember;
};

export default useOrganizationMembership;
