import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Gallery from "@/pages/gallery";
import Story from "@/pages/story";
import Notes from "@/pages/notes";
import Custom404 from "@/pages/custom-404";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/story" component={Story} />
      <Route path="/notes" component={Notes} />
      <Route path="/404" component={Custom404} />
      <Route component={Custom404} />
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
