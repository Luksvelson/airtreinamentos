import { Switch, Route } from "wouter";
import { Home } from "@/components/pages/Home";
import { Contact } from "@/components/pages/Contact";
import NotFound from "@/pages/not-found";

export function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contato" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}
