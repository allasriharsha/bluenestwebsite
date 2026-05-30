
export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-5xl font-bold text-blue-700">BlueNest</h1>
      <p className="mt-4 text-xl">Building Your Digital Nest</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div><h2>Namespace as a Service</h2><p>Managed Kubernetes namespaces.</p></div>
        <div><h2>Websites</h2><p>Professional business websites.</p></div>
        <div><h2>E-Commerce</h2><p>Online stores with payments.</p></div>
        <div><h2>Email Services</h2><p>Business email hosting.</p></div>
      </div>
    </main>
  );
}
