import Footer from "@/components/common/Footer";
import Hero from "./Hero";

export const metadata = {
  title: "iPhotography",
  description: "By Rakibuzzaman | Rakib",
};

export default function ClientLayout({ children }) {
  return (
    <div>
      <Hero />
      <div className="bg-white text-gray-900">
        <div className="max-w-[1200px] mx-auto z-10">
          <div className="px-4">{children}</div>
          <div className="border-t border-gray-600 mt-20 py-6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
