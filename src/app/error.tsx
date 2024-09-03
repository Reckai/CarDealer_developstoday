"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Something went wrong!
        </h2>
        <button
          onClick={() => reset()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Try again
        </button>
        <div>
          <Link
            href={"/"}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Get Back to main page
          </Link>
        </div>
      </div>
    </div>
  );
}
