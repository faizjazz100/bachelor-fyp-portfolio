"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SAMPLES = [
    { id: "1", label: "Sample 1", input: "/demo/1.jpg", output: "/demo/1_pred.jpg" },
    { id: "2", label: "Sample 2", input: "/demo/2.jpg", output: "/demo/2_pred.jpg" },
    { id: "3", label: "Sample 3", input: "/demo/3.jpg", output: "/demo/3_pred.jpg" },
    { id: "4", label: "Sample 4", input: "/demo/4.jpg", output: "/demo/4_pred.jpg" },
    { id: "5", label: "Sample 5", input: "/demo/5.jpg", output: "/demo/5_pred.jpeg" },
];

export default function DemoPage() {
    const [selected, setSelected] = useState(SAMPLES[0]);

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-50">
            <header className="border-b border-neutral-800">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <Link href="/" className="text-sm font-semibold">
                        ← Back
                    </Link>

                    <a
                        href="/poster.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-neutral-800 px-3 py-2 text-sm hover:bg-neutral-900"
                    >
                        Poster
                    </a>
                </div>
            </header>

            <section className="mx-auto max-w-5xl px-6 py-10">
                <h1 className="text-3xl font-semibold">Demo</h1>
                <p className="mt-2 max-w-2xl text-neutral-300">
                    Instant demo using pre-generated YOLOv11 predictions.
                    Select a sample to view the input image and the predicted result.
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {/* Controls */}
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
                        <label className="text-sm text-neutral-300">Choose a sample</label>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                            {SAMPLES.map((s) => (
                                <button
                                    key={s.id}
                                    type="button"
                                    onClick={() => setSelected(s)}
                                    className={`rounded-xl border px-3 py-2 text-left text-sm ${selected.id === s.id
                                        ? "border-neutral-200 bg-neutral-200 text-neutral-950"
                                        : "border-neutral-800 text-neutral-200 hover:bg-neutral-900"
                                        }`}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Output */}
                    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
                        <h2 className="text-lg font-semibold">Prediction</h2>

                        <div className="mt-4">
                            <p className="text-xs uppercase tracking-wider text-neutral-500">Input</p>
                            <Image
                                src={selected.input}
                                alt={`input ${selected.label}`}
                                width={1200}
                                height={900}
                                className="mt-2 w-full rounded-xl border border-neutral-800"
                            />
                        </div>

                        <div className="mt-6">
                            <p className="text-xs uppercase tracking-wider text-neutral-500">Output</p>
                            <Image
                                src={selected.output}
                                alt={`prediction ${selected.label}`}
                                width={1200}
                                height={900}
                                className="mt-2 w-full rounded-xl border border-neutral-800"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
