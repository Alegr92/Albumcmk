import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 sm:px-8 mt-12 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Mensajes */}
        <p className="text-center text-sm sm:text-base">
          Pagina creada para la comunidad CMK, espero la disfruten!. Faltan varias cartas pero me falto info para hacerlas.
        </p>
        <p className="text-center text-sm sm:text-base">
          Una mencion a la pagina de la banda de donde saque mucho contenido. Cualquier consulta/feedback me mandan un mensajito a discord.
        </p>

        {/* Botón de Discord centrado */}
        <a
          href="https://discord.com/users/Soliduss#6735" // reemplaza con tu enlace real
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-2 px-4 rounded-lg shadow-md mt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.212.375-.448.864-.614 1.25-1.844-.276-3.68-.276-5.486 0a12.873 12.873 0 0 0-.626-1.25.077.077 0 0 0-.078-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C2.918 9.046 1.992 13.59 2.38 18.09a.082.082 0 0 0 .031.056 19.882 19.882 0 0 0 5.993 3.048.077.077 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.99a.076.076 0 0 0-.041-.106 13.286 13.286 0 0 1-1.88-.9.076.076 0 0 1-.007-.127c.126-.094.252-.192.375-.288a.074.074 0 0 1 .077-.01c3.927 1.797 8.18 1.797 12.061 0a.074.074 0 0 1 .079.009c.123.096.25.194.376.288a.077.077 0 0 1-.006.127 12.143 12.143 0 0 1-1.881.9.076.076 0 0 0-.04.106c.36.695.772 1.36 1.225 1.99a.077.077 0 0 0 .084.027 19.736 19.736 0 0 0 5.994-3.048.077.077 0 0 0 .03-.056c.5-6.177-.838-10.655-3.549-13.693a.061.061 0 0 0-.03-.026zM8.02 15.331c-1.182 0-2.148-1.085-2.148-2.419 0-1.333.955-2.418 2.148-2.418 1.21 0 2.175 1.095 2.148 2.418 0 1.334-.955 2.419-2.148 2.419zm7.974 0c-1.182 0-2.148-1.085-2.148-2.419 0-1.333.955-2.418 2.148-2.418 1.21 0 2.174 1.095 2.148 2.418 0 1.334-.938 2.419-2.148 2.419z" />
          </svg>
          Discord
        </a>
      </div>

      {/* Línea inferior */}
      <div className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Alejandro Ruiz. Todos los derechos reservados.
      </div>
    </footer>
  );
}

