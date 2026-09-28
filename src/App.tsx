export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-6">
      <header className="max-w-4xl w-full text-center py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold tracking-wider text-indigo-400">
          ASCII & Dot Art Generator
        </h1>
        <p className="text-sm text-slate-400 mt-2">
          Convierte tus imágenes B/N en arte basado en caracteres en tiempo real.
        </p>
      </header>

      <main className="max-w-4xl w-full mt-8 flex flex-col gap-6">
        <div className="border-2 border-dashed border-slate-700 rounded-lg p-12 text-center text-slate-500">
          Zona de carga de imágenes (En construcción)
        </div>
      </main>
    </div>
  );
}