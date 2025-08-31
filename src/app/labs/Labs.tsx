import '@/app/about/about.css';

export default function ExitLabsPage() {
  return (
    <main className="relative min-h-screen bg-black text-[#BCBCBC] font-mono px-6 py-24 overflow-hidden">
      {/* same as about bg */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full particles-bg z-0" />
      <div className="absolute top-0 left-0 w-full h-full noise-bg z-0" />

      <div className="relative z-10 space-y-16 max-w-4xl mx-auto">
        <section>
          <h2 className="text-4xl font-bold mb-4">$EXIT Labs: Applied Privacy Intelligence</h2>
          <p className="text-lg">
            In an age where predictive algorithms script behavior and data markets commodify identity,
            the emergence of truly sovereign digital systems is no longer an option, it’s a necessity.
            $EXIT Labs operates at this intersection: a think tank, R&D unit, and decentralized protocol
            engineering arm committed to building tools for digital liberation.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-2">Mission</h3>
          <blockquote className="border-l-4 border-[#777] pl-4 text-lg italic">
            To develop and deploy cryptographic systems, AI architectures, and anonymous infrastructures
            that weaponize privacy, decentralize control, and dismantle digital coercion.
          </blockquote>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Our Framework</h3>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold">1. Cryptographic Sovereignty</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Implementation of <strong>zk-SNARKs</strong> and <strong>zk-STARKs</strong> for verifiable anonymity.</li>
                <li>Development of <strong>zero-trust execution environments</strong> (ZTEE) for modular applications.</li>
                <li>Research into <strong>MPC (Multi-Party Computation)</strong> to decentralize secrets without sacrificing speed.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold">2. Synthetic Intelligence, Real Privacy</h4>
              <ul className="list-disc list-inside ml-4">
                <li>Custom-built AI stack (codename: <em>PhantomNet v1.2</em>) optimized for:</li>
                <ul className="ml-6">
                  <li>Real-time pattern anomaly detection</li>
                  <li>Federated learning for decentralized evolution</li>
                  <li>NLP for autonomous contract parsing & threat flagging.</li>
                </ul>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold">3. Network Obfuscation & Routing Security</h4>
              <ul className="list-disc list-inside ml-4">
                <li><strong>$EXIT Mesh™</strong>: Onion + garlic hybrid P2P encrypted overlay.</li>
                <li>NAT & DPI-resistant relay systems using adaptive packet morphing.</li>
                <li>Quantum-safe routing under lattice-based encryption protocols.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Key Innovations</h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-[#333] text-sm">
              <thead>
                <tr className="bg-[#1a1a1a] text-left">
                  <th className="p-2">Feature</th>
                  <th className="p-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#333]">
                  <td className="p-2"><strong>Self-Evolving Smart Contracts</strong></td>
                  <td className="p-2">LLM agents trained to audit live for consensus-breaking exploits.</td>
                </tr>
                <tr className="border-t border-[#333]">
                  <td className="p-2"><strong>Cross-Chain Cloaking Layer</strong></td>
                  <td className="p-2">Chain-agnostic masking across ETH, Solana, and Substrate.</td>
                </tr>
                <tr className="border-t border-[#333]">
                  <td className="p-2"><strong>User-Controlled Obfuscation</strong></td>
                  <td className="p-2">Dynamic threat sliders for adjustable anonymity modes.</td>
                </tr>
                <tr className="border-t border-[#333]">
                  <td className="p-2"><strong>Post-Quantum Readiness</strong></td>
                  <td className="p-2">Kyber, NTRUEncrypt, Falcon testing underway.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Published Research & Collaborations</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><em>Private AI in Permissionless Environments</em> — PrivacyTech.org (2024)</li>
            <li><em>ZK-L2 Rollups for Ephemeral Identities</em> — arXiv preprint (2025 Q1)</li>
            <li>Partnered with LibreRouter for hardware in censorship regions.</li>
            <li>Funded by DarkFi Foundation and Interchain Privacy Alliance.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">In the Pipeline</h3>
          <table className="w-full border border-[#333] text-sm">
            <thead>
              <tr className="bg-[#1a1a1a] text-left">
                <th className="p-2">Stage</th>
                <th className="p-2">Initiative</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[#333]">
                <td className="p-2">Prototype</td>
                <td className="p-2">zkMail™ — encrypted messaging with ephemeral logic.</td>
              </tr>
              <tr className="border-t border-[#333]">
                <td className="p-2">Alpha</td>
                <td className="p-2">WhisperNet — AI-augmented threat radar for DAOs.</td>
              </tr>
              <tr className="border-t border-[#333]">
                <td className="p-2">Beta</td>
                <td className="p-2">$EXIT Nodes-as-a-Service — lightweight deployments.</td>
              </tr>
              <tr className="border-t border-[#333]">
                <td className="p-2">Research</td>
                <td className="p-2">DarkMesh — offline-to-online sync via LoRaWAN bursts.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Conclusion</h3>
          <p>
            $EXIT Labs is not building tools for the mainstream. We build for the edge—where ideas are dangerous,
            anonymity is critical, and disappearance is sometimes the only way to be free.
          </p>
          <p className="mt-2 italic">
            If the centralized web is their panopticon, $EXIT is your blind spot.
          </p>
        </section>
      </div>
    </main>
  );
}
