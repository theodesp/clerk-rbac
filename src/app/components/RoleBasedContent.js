// components/RoleBasedContent.js
"use client"

import useOrganizationRole from "../hooks/useOrganizationRole";

const RoleBasedContent = ({ organizationName, requiredRole, children }) => {
  const hasRequiredRole = useOrganizationRole(organizationName, requiredRole);

  return hasRequiredRole ? children : null;
};

export default RoleBasedContent;
