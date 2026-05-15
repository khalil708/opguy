// Placeholder. The post-build step (scripts/build-pages.mjs) overwrites
// out/index.html with the landing.html content so the polished page is
// served at /. This component only runs if that step is skipped.
export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: 'system-ui, sans-serif' }}>
      <p>
        Loading… if you see this, open{' '}
        <a href='./landing.html'>./landing.html</a>.
      </p>
    </main>
  );
}
