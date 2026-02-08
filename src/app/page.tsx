import Link from "next/link";
import Image from "next/image";
export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Top Tabs */}
      <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <Link href="/" className="text-sm font-semibold tracking-tight" >Road Bump Detection</Link>
          <nav className="flex items-center gap-2">
            <a href="/poster.pdf" target="_blank" rel="noopener noreferrer"
              className="rounded-lg border border-neutral-800 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900"
            >
              Poster
            </a>
            <Link href="/demo" className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-neutral-950 hover:opacity-90" >Demo</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pt-8 pb-8">
        <p className="text-xs tracking-[0.25em] text-neutral-400">
          BACHELOR FINAL YEAR PROJECT • COMPUTER VISION • DEEP LEARNING
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Road Bump Detection{" "}
          <span className="text-neutral-400">for Improved Driver Safety</span>
          {" "}Using Deep Learning
        </h1>
        <p className="mt-5 text-neutral-300 text-justify">
          Road anomalies such as speed bumps are critical for regulating traffic and ensuring safety. However,
          undetected or poorly marked bumps can result in vehicle damage or discomfort. This project proposes a
          deep learning-based detection system focusing on object detection models YOLOv11, Faster R-CNN, and SSD.
          Using a curated dataset and systematic model evaluation, the system demonstrates the potential for
          integration into intelligent driver-assistance systems (ADAS), enhancing both safety and comfort. The
          final prototype includes a web-based interface for model testing and visualization.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Stat label="Models" value="3" sub="YOLOv11 • SSD • Faster R-CNN" />
          <Stat label="Use Case" value="Driver Safety" sub="Speed bump detection (object detection)" />
          <Stat label="Outcome" value="Best: YOLOv11" sub="Top overall performance + real-time" />
        </div>
      </section>

      {/* PROBLEM + OBJECTIVES */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Problem Statement">
            <ul className="space-y-2 text-neutral-300">
              <li>• Hard to detect in low visibility (night, rain, poor lighting).</li>
              <li>• Generalization issues across environments and bump designs.</li>
              <li>• Real-time deployment constrained by compute efficiency.</li>
            </ul>
          </Card>

          <Card title="Objectives">
            <ul className="space-y-2 text-neutral-300">
              <li>• Investigate current machine learning techniques.</li>
              <li>• Develop deep learning models for speed bump detection.</li>
              <li>• Evaluate performance using detection metrics.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="text-2xl font-semibold">Method</h2>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Standard object detection pipeline: data collection → preprocessing/annotation → model development → evaluation.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-4">
          <Card title="1) Data Collection">
            <p className="text-neutral-300">
              Curated dataset collected from multiple open-access sources focusing on road bumps.
            </p>
          </Card>

          <Card title="2) Data Preprocessing">
            <p className="text-neutral-300">
              Cleaned data, manually annotated bounding boxes using Roboflow, then split into train/val/test.
            </p>
          </Card>

          <Card title="3) Model Development">
            <p className="text-neutral-300">
              Implemented YOLOv11, SSD, and Faster R-CNN.
            </p>
          </Card>
          <Card title="3) Model Evaluation">
            <p className="text-neutral-300">
              Model were evaluated with mAP@0.5, precision, recall, and F1-score.
            </p>
          </Card>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="mx-auto max-w-5xl px-6 pb-8">
        <h2 className="text-2xl font-semibold">Results</h2>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Final evaluation metrics:
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-neutral-900/70 text-neutral-200">
              <tr>
                <th className="px-5 py-4">Model</th>
                <th className="px-5 py-4">mAP@0.5</th>
                <th className="px-5 py-4">Precision</th>
                <th className="px-5 py-4">Recall</th>
                <th className="px-5 py-4">F1-Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800 bg-neutral-950 text-neutral-200">
              <Row model="YOLOv11" map="0.9761" precision="0.9242" recall="0.9643" f1="0.9643" highlight />
              <Row model="SSD" map="0.7429" precision="0.7429" recall="0.5711" f1="0.6458" />
              <Row model="Faster R-CNN" map="0.8823" precision="0.8823" recall="0.5674" f1="0.6907" />
            </tbody>
          </table>
        </div>


        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <Card title="Key Takeaway">
            <p className="text-neutral-300">
              YOLOv11 achieved the strongest overall performance and is suitable for real-time use.
            </p>
          </Card>
          <Card title="Safety Note">
            <p className="text-neutral-300">
              Higher recall reduces missed detections, which is important for driver safety scenarios.
            </p>
          </Card>
          <Card title="Deployment">
            <p className="text-neutral-300">
              Integrated into a web-based interface for model testing and visualization.
            </p>
          </Card>
        </div>
      </section>

      {/* Showcase Images */}
      <section className="mx-auto max-w-5xl px-6">
        <h2 className="text-xl font-semibold">Prediction Image</h2>
        <p className="mt-2 text-neutral-400">
          Sample detections and system interface from the proposed speed bump detection system.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Image
            src="/showcase/unpainted.jpg"
            alt="YOLOv11 speed bump detection result"
            width={400}
            height={260}
            className="w-full h-[260px] object-cover rounded-xl border border-neutral-800"
          />

          <Image
            src="/showcase/night.jpeg"
            alt="Before and after speed bump detection"
            width={400}
            height={260}
            className="w-full h-[260px] object-cover rounded-xl border border-neutral-800"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-neutral-400">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} • Road Bump Detection</p>
          <div className="flex gap-4">
            <a className="hover:text-neutral-200" href="https://www.linkedin.com/in/zulhimifaiz/">
              LinkedIn
            </a>
            <a className="hover:text-neutral-200" href="https://zulhilmi-faiz.vercel.app/">
              My Website
            </a>
            {/*<a className="hover:text-neutral-200" href="https://github.com/faizjazz100">
              GitHub
            </a>
            */}
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-5">
      <p className="text-xs uppercase tracking-wider text-neutral-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-neutral-400">{sub}</p>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Row({
  model,
  map,
  precision,
  recall,
  f1,
  highlight,
}: {
  model: string;
  map: string;
  precision: string;
  recall: string;
  f1: string;
  highlight?: boolean;
}) {
  return (
    <tr className={highlight ? "bg-neutral-900/30" : ""}>
      <td className="px-5 py-4 font-medium">{model}</td>
      <td className="px-5 py-4 text-neutral-300">{map}</td>
      <td className="px-5 py-4 text-neutral-300">{precision}</td>
      <td className="px-5 py-4 text-neutral-300">{recall}</td>
      <td className="px-5 py-4 text-neutral-300">{f1}</td>
    </tr>
  );
}
