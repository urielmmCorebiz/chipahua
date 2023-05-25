import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WhatsApp() {
  return (
    <FloatingWhatsApp
      phoneNumber="5215514128672"
      accountName="Chipahua"
      allowEsc
      allowClickAway
      notification
      notificationSound
      chatMessage="Hola, ¿En qué te puedo ayudar?"
      avatar="https://firebasestorage.googleapis.com/v0/b/cehf-mx.appspot.com/o/appCehf%2FLogoChipahua.png?alt=media&token=de727b44-7653-4c55-896c-679f7f178827"
      placeholder="Escribe un mensaje..."
      darkMode
      statusMessage="En línea"
    />
  );
}
