import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      description: "For small schools",
      price: "Contact us",
      features: [
        "AI question paper generator",
        "OCR + handwriting reading",
        "Basic dashboards",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Growth Plan",
      description: "For mid-size schools",
      price: "Contact us",
      features: [
        "Everything in Starter",
        "Automated answer checking",
        "Personalized practice sheets",
        "Parent upload portal",
        "Full analytics",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise Plan",
      description: "For large institutions",
      price: "Custom",
      features: [
        "Everything in Growth",
        "Custom integrations",
        "Dedicated support",
        "Deep reporting",
        "Multi-school management",
        "API access",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plans designed for schools of all sizes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-xl scale-105 md:scale-110"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="#contact">Request Pricing</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;