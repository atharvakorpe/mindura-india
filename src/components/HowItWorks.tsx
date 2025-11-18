import { Upload, Brain, BarChart3, Target } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Upload",
      description: "Teachers or parents upload handwritten answer sheets or homework",
    },
    {
      icon: Brain,
      number: "02",
      title: "AI Understands",
      description: "Mindura reads handwriting, extracts text, and evaluates answers",
    },
    {
      icon: BarChart3,
      number: "03",
      title: "Insight Delivered",
      description: "Teachers get instant scoring + detailed topic-wise analysis",
    },
    {
      icon: Target,
      number: "04",
      title: "Personalized Practice",
      description: "System creates customized worksheets based on each student's weaknesses",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From upload to insights in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 -translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-6"></div>
                    <div className="relative bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;