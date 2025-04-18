
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import AdminSettings from '@/components/AdminSettings';
import DashboardLayout from '@/components/DashboardLayout';

const AdminSettingsPage = () => {
  const { isAuthenticated, userRole } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
      return;
    }
    
    if (userRole !== 'admin') {
      navigate('/dashboard');
      return;
    }
  }, [isAuthenticated, userRole, navigate]);
  
  return (
    <DashboardLayout>
      <div className="container mx-auto py-8 px-4">
        <AdminSettings />
      </div>
    </DashboardLayout>
  );
};

export default AdminSettingsPage;
