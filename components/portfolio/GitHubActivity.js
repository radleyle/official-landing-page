"use client";

import { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";

const LEVELS = [
  "bg-white/[0.04] border border-border",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
];

function formatContributionDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getDateRange(contributions) {
  if (!contributions?.length) return null;
  const first = contributions[0].date;
  const last = contributions[contributions.length - 1].date;
  return `${formatContributionDate(first)} – ${formatContributionDate(last)}`;
}

function buildWeeks(contributions) {
  if (!contributions?.length) return [];

  const weeks = [];
  let week = [];

  const firstDay = new Date(contributions[0].date).getDay();
  for (let i = 0; i < firstDay; i++) week.push(null);

  for (const day of contributions) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }

  if (week.length) weeks.push(week);
  return weeks;
}

export default function GitHubActivity() {
  const [contributions, setContributions] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        if (data.contributions) {
          setContributions(data.contributions);
          setTotal(
            data.contributions.reduce((sum, day) => sum + day.count, 0)
          );
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const weeks = buildWeeks(contributions);
  const dateRange = getDateRange(contributions);

  return (
    <section id="activity" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="section-label">Open source</p>
            <h2 className="section-title">GitHub Activity</h2>
          </div>
          <a
            href="https://github.com/radleyle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
          >
            <FiGithub size={16} />
            @radleyle
          </a>
        </div>

        <div className="card p-6 md:p-8">
          {loading ? (
            <div className="h-28 flex items-center justify-center text-sm text-muted">
              Loading activity…
            </div>
          ) : weeks.length === 0 ? (
            <div className="text-sm text-muted">
              Couldn&apos;t load GitHub activity.{" "}
              <a
                href="https://github.com/radleyle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                View profile
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-muted">
                  <span className="font-mono text-foreground">{total}</span> contributions
                  in the last year
                </p>
                {dateRange && (
                  <p className="text-xs font-mono text-muted">{dateRange}</p>
                )}
              </div>

              <div className="overflow-x-auto pb-2">
                <div className="flex gap-[3px] min-w-max">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {week.map((day, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          title={
                            day
                              ? `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${day.date}`
                              : undefined
                          }
                          className={`w-[11px] h-[11px] rounded-sm ${
                            day ? LEVELS[day.level] : "bg-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted">
                <span>Less</span>
                {LEVELS.map((level, i) => (
                  <div key={i} className={`w-[11px] h-[11px] rounded-sm ${level}`} />
                ))}
                <span>More</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
