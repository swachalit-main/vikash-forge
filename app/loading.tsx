export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-48 h-0.5 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full loading-bar" />
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          Loading
        </p>
      </div>
    </div>
  )
}
