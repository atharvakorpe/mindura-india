import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, UserCircle, Building2, FileQuestion, CheckSquare, BarChart, Upload, ClipboardList, TrendingUp, AlertTriangle } from "lucide-react";

const Features = () => {
  const features = {
    teachers: [
      {
        icon: FileQuestion,
        title: "Automated Question Paper Generator",
        description: "Create exams, homework, worksheets, and practice sheets with one click.",
      },
      {
        icon: CheckSquare,
        title: "Automatic Answer Checking",
        description: "AI evaluates long answers fairly, consistently, and instantly.",
      },
      {
        icon: BarChart,
        title: "Student Performance Dashboard",
        description: "See every student's strengths and weaknesses across chapters and concepts.",
      },
    ],
    students: [
      {
        icon: ClipboardList,
        title: "Personalized Learning Path",
        description: "Practice sheets tailored for each student based on their unique needs.",
      },
      {
        icon: TrendingUp,
        title: "Progress Tracking",
        description: "See improvements over time, understand weak areas, and build confidence.",
      },
    ],
    parents: [
      {
        icon: Upload,
        title: "Upload Answer Sheets from Home",
        description: "No app learning curve — simply click and upload from anywhere.",
      },
      {
        icon: BarChart,
        title: "Clear Reports",
        description: "Easy-to-understand performance insights and actionable suggestions.",
      },
    ],
    leaders: [
      {
        icon: Building2,
        title: "Class & Grade Level Insights",
        description: "Identify which classes need help and where to focus resources.",
      },
      {
        icon: Users,
        title: "Teacher Insights",
        description: "Understand teaching effectiveness using real student outcomes.",
      },
      {
        icon: AlertTriangle,
        title: "Live Remediation Alerts",
        description: "If multiple students struggle on a topic — Mindura flags it immediately.",
      },
    ],
  };

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Features Built for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed for teachers, students, parents, and school leaders
          </p>
        </div>

        <Tabs defaultValue="teachers" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 lg:grid-cols-4 h-auto">
            <TabsTrigger value="teachers" className="gap-2 py-3">
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Teachers</span>
            </TabsTrigger>
            <TabsTrigger value="students" className="gap-2 py-3">
              <UserCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Students</span>
            </TabsTrigger>
            <TabsTrigger value="parents" className="gap-2 py-3">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Parents</span>
            </TabsTrigger>
            <TabsTrigger value="leaders" className="gap-2 py-3">
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Leaders</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(features).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="border-border hover:border-primary/50 transition-all hover:shadow-lg">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Features;