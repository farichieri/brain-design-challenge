export default function BackgroundBlur() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-background to-primary/1" />

      {/* Main illuminating glow centered on hero middle */}
      <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/8 rounded-full blur-3xl opacity-50" />

      {/* Inner bright core */}
      <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-2xl opacity-60" />

      {/* Outer soft glow extending beyond hero */}
      <div className="absolute top-[50vh] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[800px] bg-primary/3 rounded-full blur-3xl opacity-30" />

      {/* Additional subtle glow for content sections */}
      <div className="absolute top-[120vh] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/4 rounded-full blur-3xl opacity-25" />
    </div>
  );
}
