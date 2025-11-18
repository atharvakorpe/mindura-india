import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Mindura comes from the words <span className="text-primary font-semibold">Mind + Aura</span> — the intelligence of the mind combined with the positive energy of a supportive learning environment.
            </p>
            <p className="text-xl text-foreground font-semibold">
              Make teaching easier. Make learning smarter. Make schools truly data-driven.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower teachers with smart tools, uplift students through personalized learning, and give schools actionable insight that improves outcomes.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every child receives exactly the support they need — at the moment they need it.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Why Mindura?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Because teachers need support, students deserve personalized learning, and schools need data-driven clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;