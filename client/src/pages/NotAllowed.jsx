import React from "react";
import { useEffect, useState } from "react";


const NotAllowed = () => {

  return (
    <div>
      <main className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
        <div className="text-center max-w-lg">
          <div className="mb-6">
            <div className="avatar placeholder">
              <div className="bg-error text-neutral-content rounded-full w-24">
                <span className="text-4xl">🚫</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-error mb-4">403</h1>
          <h2 className="text-3xl font-semibold mb-2">Not Allowed</h2>
          <p className="mb-8 text-base-content/70">
            คุณไม่มีสิทธิ์เข้าถึงหน้านี้ 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn btn-primary">
              กลับหน้าหลัก
            </a>
          </div>
        </div>
        <footer className="mt-12 text-sm text-base-content/60">
          Error code 403: Access is restricted.
        </footer>
      </main>
    </div>
  );
};

export default NotAllowed;
