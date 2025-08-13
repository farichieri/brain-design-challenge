export default function Footer() {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs md:text-sm text-muted-foreground">
              © 2025 OUAF Assistant
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
            <span>Oracle Utilities</span>
            <span className="hidden sm:inline">•</span>
            <span>AWS Bedrock</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
