
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from '@/contexts/AuthContext';
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CreateTimetable from "./pages/CreateTimetable";
import EditTimetable from "./pages/EditTimetable";
import ViewTimetablePage from "./pages/ViewTimetablePage";
import NotFound from "./pages/NotFound";
import ManageSubjects from "./pages/ManageSubjects";
import ManageFaculty from "./pages/ManageFaculty";
import AdminSettingsPage from "./pages/AdminSettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-timetable" element={<CreateTimetable />} />
            <Route path="/edit-timetable/:id" element={<EditTimetable />} />
            <Route path="/view-timetable/:id" element={<ViewTimetablePage />} />
            <Route path="/manage-subjects" element={<ManageSubjects />} />
            <Route path="/manage-faculty" element={<ManageFaculty />} />
            <Route path="/admin-settings" element={<AdminSettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
