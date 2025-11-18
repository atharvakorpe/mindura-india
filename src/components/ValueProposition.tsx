import { FileText, CheckCircle, Users, TrendingUp } from "lucide-react";

const ValueProposition = () => {
  const values = [
    {
      icon: FileText,
      title: "Create question papers in seconds",
      description: "AI-powered generation saves hours of prep time",
    },
    {
      icon: CheckCircle,
      title: "Automatically evaluate handwritten answers",
      description: "Advanced OCR reads and grades with consistency",
    },
    {
      icon: Users,
      title: "Give personalized practice to every student",
      description: "Tailored worksheets based on individual needs",
    },
    {
      icon: TrendingUp,
      title: "Track progress in real time",
      description: "Monitor students, classes, and subjects instantly",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for Schools. Built for Teachers.{" "}
            <span className="text-primary">Powered by AI.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card hover:bg-card/80 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;