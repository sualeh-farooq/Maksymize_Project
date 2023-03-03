import Link from "next/link";
export default function Contact_Btn() {
  return (
    <>
    <Link href="/contact" >
      <button className="contact-btn rounded-full h-12 border-2 font-semibold px-8 text-sm  text-xl border-green-700 hover:bg-green-700 duration-500 hover:text-white">
        Contact
      </button>
      </Link>
    </>
  );
}
