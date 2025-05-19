export interface ServiceModuleProps {
  title: string;
  children: React.ReactNode;
}

export default function ServiceModule({ title, children }: ServiceModuleProps) {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
