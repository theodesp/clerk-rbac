export function isUserMemberOfOrganization(userSession, organizationName) {
  // Check if organizationMemberships exist
  if (
    userSession?.user?.organizationMemberships &&
    userSession?.user?.organizationMemberships.length > 0
  ) {
    // Check if the user is a member of the specified organization
    return userSession?.user?.organizationMemberships.some(
      (membership) => membership.organization.name === organizationName
    );
  }

  return false; // User is not a member of any organization
}

export const checkUserPermission = (userSession, organizationName, requiredPermission) => {
  // Retrieve organization memberships from user session
  const organizationMemberships = userSession.user.organizationMemberships;

  // Find the organization by name
  const organization = organizationMemberships.find(org => org.organization.name === organizationName);

  if (!organization) {
    console.error(`Organization '${organizationName}' not found for user.`);
    return false;
  }

  // Check if the user has the required permission
  const hasPermission = organization.permissions.includes(requiredPermission);

  return hasPermission;
};
