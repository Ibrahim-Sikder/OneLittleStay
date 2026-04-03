import Image from "next/image";
import StillHaveQuestions from "../../ui/home/StillHaveQuestions";
import Container from "../../container";
import logo from "@/assets/images/logo/logo.png";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "./socialIcon";
import { footerLinks } from "./contstant";

export default function FooterSection() {
  return (
    <div className="w-full bg-white">
      <StillHaveQuestions />
      <div className="border-t border-gray-200" />
      <Container>
        <footer className=" px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="mb-4">
                <Image src={logo} alt="Logo" />
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
                sodales in volutpat ullamcorper amet adipiscing fermentum.
              </p>
              <div className="flex items-center gap-4 text-gray-500">
                <a href="#" className="hover:text-[#1a1a1a] transition-colors">
                  <TwitterIcon />
                </a>
                <a href="#" className="hover:text-[#1a1a1a] transition-colors">
                  <FacebookIcon />
                </a>
                <a href="#" className="hover:text-[#1a1a1a] transition-colors">
                  <InstagramIcon />
                </a>
                <a href="#" className="hover:text-[#1a1a1a] transition-colors">
                  <GithubIcon />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([col, links]) => (
              <div key={col}>
                <h4 className="font-bold text-[#1a1a1a] mb-5">{col}</h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-500 text-sm hover:text-[#e91e63] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      </Container>
      <div className="bg-[#1a1035] py-4  text-center">
        <p className="text-gray-400 text-sm">
          © Copyright 2024, All Rights Reserved by XYz
        </p>
      </div>
    </div>
  );
}
