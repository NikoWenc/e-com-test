import React from "react";

function UnderRepairPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <p>Currently under repair. Please check back later.</p>
      <p>
        <b className="text-3xl">Reason:</b> FakeStoreAPI is down - Currently
        migrating to another free Products API
      </p>
    </div>
  );
}

export default UnderRepairPage;
