import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarked,
  FaInstagram,
} from "react-icons/fa";

import AnimatedLogo from "./logo";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A]">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-gray-300 sm:justify-start">
              {/* Logo */}
              <AnimatedLogo className="gap-4" />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Na Viajacom, você aluga um carro por algumas horas, dias ou por
              quanto tempo precisar. E o melhor: sem filas e sem papelada, tudo
              direto pelo app.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary transition hover:text-blue-700/75"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="size-6" />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/evandromsantana"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary transition hover:text-blue-700/75"
                >
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="size-6" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/evandro-m-santana/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-primary transition hover:text-blue-700/75"
                >
                  <span className="sr-only">Linkendin</span>
                  <FaLinkedin className="size-6" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-300">Sobre</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Company History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Meet the Team
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Employee Handbook
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-300">
                Nossos Serviços
              </p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    Web Development
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Web Design{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Marketing{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Google Ads{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-300">Links úteis</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    FAQs{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-700/75"
                    href="#"
                  >
                    {" "}
                    Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <span className="text-gray-500 transition group-hover:text-gray-700/75">
                      Live Chat
                    </span>

                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-300">Contato</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <FaEnvelope className="size-5 shrink-0 text-gray-500" />
                    <span className="flex-1 text-gray-500">
                      atendimento@viajacom.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                    href="#"
                  >
                    <FaPhone className="size-5 shrink-0 text-gray-500" />
                    <span className="flex-1 text-gray-500">+55 0000.0000</span>
                  </a>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <FaMapMarked className="size-5 shrink-0 text-gray-500" />
                  <address className="-mt-0.5 flex-1 not-italic text-gray-500">
                    Teresina, Brasil.
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-gray-500 underline transition hover:text-blue-600/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="text-gray-500 inline-block underline transition hover:text-blue-600/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              Copyright &copy; {year}{" "}
              <a
                className="hover:text-primary gap-4"
                href="http://www.evandrosantana.com/"
                target="_blank"
                rel="noreferrer"
              >
                Evandro M. Santana
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
