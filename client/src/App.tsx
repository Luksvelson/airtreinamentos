import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Home } from "@/components/pages/Home";
import { About } from "@/components/pages/About";
import { TrainingPresencial } from "@/components/pages/TrainingPresencial";
import { TrainingOnline } from "@/components/pages/TrainingOnline";
import { TrainingInCompany } from "@/components/pages/TrainingInCompany";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/treinamentos/presenciais" component={TrainingPresencial} />
      <Route path="/treinamentos/online" component={TrainingOnline} />
      <Route path="/treinamentos/in-company" component={TrainingInCompany} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
