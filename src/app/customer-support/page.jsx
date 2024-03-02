"use client";
import RoleBasedContent from "../components/RoleBasedContent";

function CustomerSupportPage() {
  return (
    <div>
      <h1>Welcome to the Customer Support Page!</h1>
      <RoleBasedContent organizationName="Marketplace-Customer-Support" requiredRole="org:admin">
        <div>
          <h2>Admin Content</h2>
        </div>
      </RoleBasedContent>
      <RoleBasedContent organizationName="Marketplace-Customer-Support" requiredRole="org:member">
        <div>
          <h2>Member Content</h2>
        </div>
      </RoleBasedContent>
    </div>
  );
}

export default CustomerSupportPage;
