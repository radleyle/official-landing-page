import { highlights } from "../../lib/highlights";

export default function HighlightsSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="section-container">
        <div className="mb-8">
          <p className="section-label">At a glance</p>
          <h2 className="section-title">Highlights</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="card p-5">
              <h3 className="text-sm font-medium mb-1.5">{item.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
