// Update: greeting, fallback, links and replies when you change site content
window.CHATBOT_KNOWLEDGE = {
  greeting: "Hi, I'm a quick FAQ bot for Sankalpa's site. Ask about education, experience, projects, blog, GitHub, or how to contact him. Try: \"What does Sankalpa do?\" or \"How can I reach him?\"",

  fallback: "Not sure about that. Try About, Learn, Chapters, Building, Code, Blog, or <a href=\"mailto:sankalpahota503@gmail.com\">email him</a>.",

  links: {
    email: "mailto:sankalpahota503@gmail.com",
    linkedin: "https://linkedin.com/in/sankalpa-hota-86937517a/",
    github: "https://github.com/Sankalpa-Hota",
    instagram: "https://instagram.com/sankalpa_hota_",
    connect: "connect.html"
  },

  replies: [
    {
      keywords: ["who are you", "what is this", "hello", "hi", "hey"],
      reply: "I'm a small FAQ bot on Sankalpa's site. Ask me about his education, work, projects, or how to get in touch!"
    },
    {
      keywords: ["contact", "email", "reach", "mail", "get in touch", "phone", "number"],
      reply: "You can reach Sankalpa by email at <a href=\"mailto:sankalpahota503@gmail.com\">sankalpahota503@gmail.com</a>. All contact options are on the <a href=\"connect.html\">Connect</a> page."
    },
    {
      keywords: ["linkedin", "linked in", "profile"],
      reply: "LinkedIn: <a href=\"https://linkedin.com/in/sankalpa-hota-86937517a/\" target=\"_blank\" rel=\"noopener\">linkedin.com/in/sankalpa-hota-86937517a</a>. Profile and projects here are synced from LinkedIn and GitHub."
    },
    {
      keywords: ["education", "degree", "university", "ucsd", "nit", "rourkela", "gpa", "master", "bachelor"],
      reply: "UC San Diego (MS ECE, 3.77, SEELAB) and NIT Rourkela (B.Tech EE, CSE minor, 3.93). <a href=\"education.html\">Learn</a>."
    },
    {
      keywords: ["experience", "work", "job", "micron", "semiconductor", "engineer", "patents"],
      reply: "He was a Semiconductor Engineer II then Engineer I at Micron (2022 to 2025). RTL, PCIe, NVMe, memory, 3 US patents. See <a href=\"experience.html\">Chapters</a>."
    },
    {
      keywords: ["projects", "systolic", "accelerator", "crypto", "ml", "vlsi", "fpga"],
      reply: "Research: systolic array, ML accelerator for attention, near-memory crypto, NC-FINFET biosensors (NIT). Tools: Semiconductor Physics Tool (Flask/Plotly). Code: VLSI PCIe, RTL, Chacha20-Poly1305. <a href=\"projects.html\">Building</a>."
    },
    {
      keywords: ["github", "repos", "repositories", "code", "verilog", "rtl", "pcie"],
      reply: "Code lives at <a href=\"https://github.com/Sankalpa-Hota\" target=\"_blank\" rel=\"noopener\">github.com/Sankalpa-Hota</a>. VLSI PCIe, RTL blocks, FIR filter, Chacha20-Poly1305. See <a href=\"github.html\">Code</a>."
    },
    {
      keywords: ["startup", "startups", "interest", "building"],
      reply: "Sankalpa is interested in startups and building from zero. Product thinking, fast iteration, deep tech and venture. He's open to conversations. Email him at <a href=\"mailto:sankalpahota503@gmail.com\">sankalpahota503@gmail.com</a> or read the <a href=\"about.html\">About</a> page."
    },
    {
      keywords: ["what does sankalpa do", "who is sankalpa", "about sankalpa", "background"],
      reply: "MS ECE at UCSD (VLSI, ML accelerators). Previously at Micron: RTL, PCIe, NVMe, 3 patents. Into startups. <a href=\"about.html\">About</a> · <a href=\"experience.html\">Chapters</a>."
    },
    {
      keywords: ["instagram", "insta", "social"],
      reply: "His Instagram is <a href=\"https://instagram.com/sankalpa_hota_\" target=\"_blank\" rel=\"noopener\">@sankalpa_hota_</a>. For professional networking, use LinkedIn or email."
    },
    {
      keywords: ["reports", "pdf", "papers", "publications"],
      reply: "Technical reports and write-ups are linked on the <a href=\"reports.html\">Reports</a> page. You can also <a href=\"mailto:sankalpahota503@gmail.com\">email</a> him to ask for a copy or discuss."
    },
    {
      keywords: ["blog", "blogs", "posts", "articles", "writing"],
      reply: "Sankalpa writes a blog on VLSI, RTL, ML accelerators, and building. Check it out: <a href=\"blog/index.html\">Blog</a>."
    }
  ]
};
