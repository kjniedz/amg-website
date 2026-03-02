export function SectionSkeleton() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-6">
          <div className="h-3 w-24 rounded bg-primary/10" />
          <div className="h-8 w-72 rounded bg-muted/50" />
          <div className="h-4 w-96 max-w-full rounded bg-muted/50" />
        </div>
      </div>
    </section>
  );
}
