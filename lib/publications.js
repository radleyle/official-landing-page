export const publications = [
  {
    title:
      "Entropy-Based Dynamic Hybrid Retrieval for Adaptive Query Weighting in RAG Pipelines",
    venue: "ICML VecDB 2025",
    year: "2025",
    url: "https://openreview.net/forum?id=bwGaZOVo0c",
    image: "/projects/algoverse3.png",
    description:
      "Entropy-driven hybrid RAG pipeline with dynamic BM25–FAISS weighting for adaptive query-specific retrieval in RAG pipelines.",
    impact: "Up to 7% LLM-as-a-Judge gain on TriviaQA",
    highlights: [
      "Dynamic BM25–FAISS weighting using normalized Shannon entropy per query",
      "Statistically significant gains on TriviaQA (p < 0.01) with lightweight re-ranking",
      "Retriever-agnostic design — integrates into existing RAG pipelines without re-indexing",
    ],
  },
];
