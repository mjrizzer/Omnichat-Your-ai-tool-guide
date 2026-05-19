import { useState } from "react";
import { Sparkles } from "lucide-react";
import { AI_TOOLS, CATEGORIES } from "@/lib/ai-tools";
import { AIToolCard } from "@/components/AIToolCard";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? AI_TOOLS
      : AI_TOOLS.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center gap-3 px-6 py-4">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary shadow-md">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">OmniChat</h1>
          <span className="ml-2 text-sm text-muted-foreground">AI Tools Directory</span>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          All your AI tools,{" "}
          <span className="bg-gradient-to-r from-primary to-[hsl(260,70%,55%)] bg-clip-text text-transparent">
            one&nbsp;place
          </span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Launch ChatGPT, Claude, Gemini, Cursor, and more — instantly.
        </p>
      </section>

      {/* Category filters */}
      <nav className="max-w-6xl mx-auto px-6 pb-6 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((tool) => (
            <AIToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
