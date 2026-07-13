import { publications } from "../../lib/publications";
import { FiExternalLink } from "react-icons/fi";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Research</p>
          <h2 className="section-title">Publications</h2>
        </div>

        <div className="space-y-4">
          {publications.map((pub) => (
            <a
              key={pub.url}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group block p-6 md:p-8"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="tag">{pub.venue}</span>
                  <span className="text-xs font-mono text-muted">{pub.year}</span>
                </div>
                <h3 className="text-lg font-medium leading-snug group-hover:text-accent transition-colors">
                  {pub.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{pub.description}</p>
                <span className="inline-flex items-center gap-2 text-sm text-accent">
                  Read paper
                  <FiExternalLink size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
