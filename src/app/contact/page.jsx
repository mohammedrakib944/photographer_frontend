import ClientLayout from "@/components/common/ClientLayout";
import React from "react";

const page = () => {
  return (
    <ClientLayout>
      <div>
        <h2 className="pt-10">Contact</h2>
        <p className="text-sm mt-5">
          For all pricing and booking inquiries mail me. Please include as much
          relevant information as possible, for example, the location of the
          project, amount of images needed, intended usage of the images, and
          timeframe for project completion. I look forward to hearing from you.
        </p>
        <br />
        <br />
        <h2>example@gmail.com</h2>
        <h2>Phone: +29290382</h2>
      </div>
    </ClientLayout>
  );
};

export default page;
