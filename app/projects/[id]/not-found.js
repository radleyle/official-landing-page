import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Project Not Found</h2>
        <p className="text-foreground/70 mb-8">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/#projects"
          className="inline-block px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}