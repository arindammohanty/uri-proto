'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Loader2, LogOut } from 'lucide-react';

export default function TalentDashboardMock() {
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function resolveSession() {
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        window.location.href = '/crn';
        return;
      }

      const { data: profileData } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setSessionData({
        identity: user,
        roleDetection: profileData,
        timestamp: new Date().toISOString()
      });
      setLoading(false);
    }

    resolveSession();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/crn';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-slate-900" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 sm:p-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Talent Hub</h1>
            <p className="text-slate-500 mt-1">Temporary routing destination and data relay.</p>
          </div>
          <button 
            onClick={handleSignOut}
            className="flex items-center px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            End Session
          </button>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg overflow-hidden">
          <div className="border-b border-slate-700 pb-4 mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-3 animate-pulse"></span>
              Individual Role Detection Relay
            </h2>
            <p className="text-slate-400 text-sm mt-1">This payload will be injected into the central state manager during the next development phase.</p>
          </div>
          <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-blue-400 font-mono">
              {JSON.stringify(sessionData, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
