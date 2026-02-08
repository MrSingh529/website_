import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ClickSpark from "@/components/ClickSpark";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import UseCasesPage from "@/pages/UseCasesPage";
import ClientCaseStudiesPage from "@/pages/ClientCaseStudiesPage";
import { HelmetProvider } from 'react-helmet-async';
import BenefitsROIPage from "@/pages/BenefitsROIPage";
import TechnologyStackPage from "@/pages/TechnologyStackPage";
import WhyUsPage from "@/pages/WhyUsPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import SchemaMarkup from "@/components/SchemaMarkup";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/use-cases" component={UseCasesPage} />
      <Route path="/case-studies" component={ClientCaseStudiesPage} />
      <Route path="/benefits-roi" component={BenefitsROIPage} />
      <Route path="/technology" component={TechnologyStackPage} />
      <Route path="/why-us" component={WhyUsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SchemaMarkup />
          <ClickSpark
            sparkColor='#0ea5e9'
            sparkSize={12}
            sparkRadius={20}
            sparkCount={8}
            duration={500}
            easing='ease-out'
          >
            <Toaster />
            <Router />
          </ClickSpark>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;