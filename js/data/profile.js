// Update: when you update LinkedIn or GitHub, keep this in sync (headline, now, building, previously, chapters, elsewhere).
window.PROFILE = {
  headline: "Building at the intersection of silicon and systems.",
  now: "I'm at UC San Diego (MS ECE), in SEELAB. VLSI and ML accelerators, systolic arrays, attention, near-memory crypto. Before that, three years at Micron: RTL, PCIe Gen5, NVMe 2.0, 3D NAND. Three US patents in the pipeline. I care about smarter silicon and startups.",
  elsewhere: {
    linkedin: "https://linkedin.com/in/sankalpa-hota-86937517a/",
    github: "https://github.com/Sankalpa-Hota",
    instagram: "https://instagram.com/sankalpa_hota_",
    email: "sankalpahota503@gmail.com"
  },
  building: [
    { title: "Systolic array for CNN inference", oneLine: "Reconfigurable 2D array on FPGA. 69% lower latency, 82% memory savings.", link: null, type: "research" },
    { title: "Dual-core ML accelerator for attention", oneLine: "Vector processor, pipelined attention weights, RTL→GDSII.", link: null, type: "research" },
    { title: "Near-memory crypto engine", oneLine: "AES at PCIe Gen5 throughput; nonce, replay, ready/valid flow.", link: null, type: "research" },
    { title: "Semiconductor Physics Tool", oneLine: "Flask, Plotly, Python. Fermi-Dirac, Drude, phonon, Kronig-Penney.", link: "https://github.com/Sankalpa-Hota/semiconductor-physics-tool", type: "tool" },
    { title: "VLSI PCIe", oneLine: "Verilog endpoint: Physical, Data Link, Transaction; link training, DLLP/TLP.", link: "https://github.com/Sankalpa-Hota/VLSI_PCIe", type: "code" },
    { title: "RTL in Verilog", oneLine: "RTL blocks from basic to advanced.", link: "https://github.com/Sankalpa-Hota/RTL_IN_VERILOG", type: "code" },
    { title: "Chacha20-Poly1305 in-memory", oneLine: "In-memory processing and encryption for memory architectures.", link: "https://github.com/Sankalpa-Hota/Chacha20-Poly1305-Memory-Processing", type: "code" }
  ],
  previously: "Semiconductor Engineer at Micron (2022–2025). RTL, PCIe Gen5, NVMe, Flash/Cache, FPGA bring-up. Three US patents.",
  chapters: [
    { when: "Apr 2024 – Aug 2025", role: "Semiconductor Engineer II", company: "Micron", story: "I led RTL and integration for Flash/Cache retention and PCIe Gen5 datapaths, and worked across NAND, DDR, NVMe, and PCIe on FPGA. A lot of debug: waveforms, protocol traces, JTAG. Tight collaboration with firmware and physical design. Shipped three US patents on firmware-hardware co-design." },
    { when: "Aug 2022 – Apr 2024", role: "Semiconductor Engineer I", company: "Micron", story: "I built RTL validation for microSD on Zynq 7000 and ran stress-driven verification for NVMe 2.0 ARM controllers. Focus was on data retention, recovery, and closing firmware and link-level issues." }
  ]
};
