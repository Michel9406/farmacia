import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <div className="flex justify-center bg-red-950 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            © 2024 Nossa Farmácia. Todos os direitos reservados.{" "}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogo size={32} weight="bold" />
            <InstagramLogo size={32} weight="bold" />
            <FacebookLogo size={32} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
