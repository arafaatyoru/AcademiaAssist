import React, { useState, useEffect } from 'react';
import { LayoutDashboard, CalendarCheck, Book, Bot, CheckSquare, Menu, Download, Sun, Moon, LogOut, CalendarPlus, Search, Trash2, Info } from 'lucide-react';
import { Dashboard } from './components/Dashboard';
import { AttendanceTracker } from './components/AttendanceTracker';
import { Courses } from './components/Courses';
import { AIChat } from './components/AIChat';
import { Assignments } from './components/Assignments';
import { GlobalSearch } from './components/GlobalSearch';
import { AttendanceRecord, Assignment, DailySchedule } from './types';
import { StorageService } from './services/storageService';
import { MOTIVATIONAL_QUOTES, TIPS, COURSES, SCHEDULE } from './constants';
import { LoginScreen } from './components/LoginScreen';

type View = 'dashboard' | 'attendance' | 'courses' | 'assignments' | 'ai';

function App() {
  const [user, setUser] = useState(() => StorageService.loadUser());
  const [view, setView] = useState<View>('attendance');
  const [records, setRecords] = useState<AttendanceRecord[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [schedule, setSchedule] = useState<DailySchedule[]>(SCHEDULE);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [aiInitialQuery, setAiInitialQuery] = useState<string>('');
  const [aiInitialFile, setAiInitialFile] = useState<{data: string, mimeType: string, name: string} | null>(null);
  const [quote, setQuote] = useState(MOTIVATIONAL_QUOTES[0]);
  const [tip, setTip] = useState(TIPS[0]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : true; 
    }
    return true;
  });
  const [isLoadingData, setIsLoadingData] = useState(false);

  // Initial Data Load (Async)
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setIsLoadingData(true);
        const loadedRecords = await StorageService.loadAttendance(user.id);
        const loadedAssignments = await StorageService.loadAssignments(user.id);
        const loadedSchedule = await StorageService.loadSchedule(user.id);
        
        setRecords(loadedRecords || []);
        setAssignments(loadedAssignments || []);
        setSchedule(loadedSchedule || SCHEDULE);
        setIsLoadingData(false);
      }
    };
    fetchData();

    setQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
    setTip(TIPS[Math.floor(Math.random() * TIPS.length)]);

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [user]);

  // Theme effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleUpdateRecord = (newRecord: AttendanceRecord) => {
    if (!user) return;
    setRecords(prev => {
      const filtered = prev.filter(r => !(
        r.courseId === newRecord.courseId && 
        r.date === newRecord.date && 
        (r.sessionTime === newRecord.sessionTime || (!r.sessionTime && !newRecord.sessionTime))
      ));
      const updated = newRecord.status === 'none' ? filtered : [...filtered, newRecord];
      StorageService.saveAttendance(user.id, updated); // Async save, fire and forget
      return updated;
    });
  };

  const handleClearHistory = () => {
    if (!user) return;
    // Removed window.confirm to ensure the button functions immediately and reliably across all devices
    const emptyRecords: AttendanceRecord[] = [];
    setRecords(emptyRecords); // Reset state immediately
    StorageService.saveAttendance(user.id, emptyRecords); // Reset storage
  };

  const handleAddAssignment = (newAssignment: Assignment) => {
    if (!user) return;
    const updated = [...assignments, newAssignment];
    setAssignments(updated);
    StorageService.saveAssignments(user.id, updated);
  };

  const handleUpdateAssignment = (updatedAssignment: Assignment) => {
    if (!user) return;
    const updated = assignments.map(a => a.id === updatedAssignment.id ? updatedAssignment : a);
    setAssignments(updated);
    StorageService.saveAssignments(user.id, updated);
  };

  const handleDeleteAssignment = (id: string) => {
    if (!user) return;
    const updated = assignments.filter(a => a.id !== id);
    setAssignments(updated);
    StorageService.saveAssignments(user.id, updated);
  };

  const handleImportSchedule = (newSchedule: DailySchedule[]) => {
    if (!user) return;
    setSchedule(newSchedule);
    StorageService.saveSchedule(user.id, newSchedule);
    alert('Schedule imported successfully!');
  };

  const handleAnalyzeExamRoutine = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1];
        setAiInitialFile({
            data: base64Data,
            mimeType: file.type,
            name: file.name
        });
        setAiInitialQuery("Analyze this exam routine. 1) List the detected exams with their dates and times. 2) For each exam, create a comprehensive study plan leading up to the exam date, breaking down key topics from the syllabus. 3) Provide preparation tips.");
        setView('ai');
    };
    reader.readAsDataURL(file);
  };

  const handleAIChatInitialized = () => {
      setAiInitialQuery('');
      setAiInitialFile(null);
  };

  const handleLogin = (u: any) => {
    setUser(u);
  };

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      await StorageService.clearSession();
      setUser(null);
    }
  };

  const handleGlobalNavigate = (targetView: View, id?: string, query?: string) => {
    setView(targetView);
    if (targetView === 'ai' && query) {
        setAiInitialQuery(query);
    }
    // Logic to scroll to specific ID could be added here later if needed
  };

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  const NavItem = ({ id, icon, label }: { id: View, icon: React.ReactNode, label: string }) => (
    <button
      onClick={() => { setView(id); setMobileMenuOpen(false); }}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
        view === id 
          ? 'bg-accent-500 text-navy-900 shadow-[0_0_20px_rgba(47,211,199,0.2)]' 
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="fixed inset-0 flex h-full w-full bg-slate-50 dark:bg-navy-900 text-slate-800 dark:text-gray-100 font-sans selection:bg-accent-500 selection:text-navy-900 transition-colors duration-300 overflow-hidden">
      
      {/* Global Search Modal */}
      <GlobalSearch 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)}
        courses={COURSES}
        assignments={assignments}
        onNavigate={handleGlobalNavigate}
      />

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-navy-900 border-r border-slate-200 dark:border-white/5 p-6 flex flex-col z-50 transition-transform duration-300 shadow-2xl md:shadow-none md:relative md:translate-x-0 overflow-y-auto ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col gap-4 mb-8 px-2">
          <div className="leading-tight pt-2">
            <h1 className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">AcademiaAssist</h1>
            <p className="text-[10px] text-slate-600 dark:text-slate-400 uppercase tracking-wider leading-relaxed mt-1 font-semibold">
              Department of Communication & Journalism<br/>University of Chittagong
            </p>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          <NavItem id="dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem id="attendance" icon={<CalendarCheck size={20} />} label="Attendance" />
          <NavItem id="assignments" icon={<CheckSquare size={20} />} label="Assignments" />
          <NavItem id="courses" icon={<Book size={20} />} label="Courses" />
          <NavItem id="ai" icon={<Bot size={20} />} label="AI Help" />
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5 space-y-4">
           {/* Theme Toggle */}
           <button 
             onClick={toggleTheme}
             className="w-full flex items-center justify-between px-3 py-2 bg-slate-100 dark:bg-navy-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-gray-200 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-colors"
           >
             <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
             {isDarkMode ? <Moon size={14} /> : <Sun size={14} />}
           </button>

           {/* Tip Drawer */}
           <div className="bg-slate-100 dark:bg-navy-800 rounded-lg p-3 text-xs text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-white/5 shadow-inner">
              <span className="text-teal-600 dark:text-accent-500 font-bold block mb-1">Quick Tip:</span>
              {tip}
           </div>
           
           <div className="grid grid-cols-2 gap-2">
             <button 
               onClick={() => StorageService.exportToCSV(records)}
               className="flex items-center justify-center gap-2 text-xs bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 p-2 rounded-lg transition-colors font-medium"
               title="Export Attendance to CSV"
             >
               <Download size={14} /> Export
             </button>
             <button 
               onClick={() => StorageService.exportToICS(schedule, assignments)}
               className="flex items-center justify-center gap-2 text-xs bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 text-slate-700 dark:text-slate-300 p-2 rounded-lg transition-colors font-medium"
               title="Sync Schedule to Calendar"
             >
               <CalendarPlus size={14} /> Sync Cal
             </button>
           </div>
           
           <button 
             onClick={handleClearHistory}
             className="w-full flex items-center justify-center gap-2 text-xs bg-slate-100 dark:bg-navy-800 hover:bg-red-50 dark:hover:bg-red-900/10 text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 p-2 rounded-lg transition-colors font-medium border border-transparent hover:border-red-200 dark:border-red-900/30"
           >
             <Trash2 size={14} /> Reset History
           </button>

           <a 
             href="https://mohammad-arafat-hossain-zuwi27p.gamma.site/?fbclid=IwY2xjawObmJFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR5Q7AKTMhDZrDh9CEpGFr-5I18jirng3Vllu_AKHqFhyxHz2DThUGHcXASOVw_aem_nf43gxfhfi6q4pcd5-igAQ"
             target="_blank"
             rel="noopener noreferrer"
             className="w-full flex items-center justify-center gap-2 text-xs bg-indigo-50 dark:bg-indigo-900/10 hover:bg-indigo-100 dark:hover:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 p-2 rounded-lg transition-colors font-medium border border-transparent hover:border-indigo-200 dark:border-indigo-900/30"
           >
             <Info size={14} /> <span>About the Creator</span>
           </a>

             <button 
               onClick={handleLogout}
               className="w-full flex items-center justify-center gap-2 text-xs bg-red-50 dark:bg-red-900/10 hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 p-2 rounded-lg transition-colors font-medium border border-transparent hover:border-red-200 dark:border-red-900/30"
               title="Logout"
             >
               <LogOut size={14} /> <span>Logout</span>
             </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full w-full min-w-0 transition-all duration-300 relative overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/90 dark:bg-navy-900/90 backdrop-blur-md border-b border-slate-200 dark:border-white/5 px-4 md:px-6 py-3 flex items-center justify-between transition-colors w-full">
          <div className="flex items-center gap-3">
             <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-slate-800 dark:text-white p-1 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg">
               <Menu size={22} />
             </button>
             <div className="flex items-center gap-2 md:gap-3">
                <img src={user.avatar} alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-teal-500/50 dark:border-accent-500/50 bg-navy-800" />
                <div className="block">
                   <p className="hidden md:block text-xs text-slate-700 dark:text-slate-400 font-medium">Welcome back,</p>
                   <p className="text-sm font-bold text-slate-900 dark:text-white leading-none truncate max-w-[120px] md:max-w-none">{user.name}</p>
                </div>
             </div>
          </div>
          
          <div className="hidden md:block">
            <p className="text-sm text-slate-600 dark:text-slate-400 italic font-medium">"{quote}"</p>
          </div>

          <div className="flex items-center gap-4">
             {/* Search Button */}
             <button 
               onClick={() => setSearchOpen(true)}
               className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-accent-500 transition-colors"
               title="Search (Cmd+K)"
             >
                <Search size={20} />
             </button>

            {/* Minimal Modern Clock */}
            <div className="text-right flex items-baseline gap-1 md:gap-2">
               <span className="text-lg md:text-2xl font-light tracking-tight text-slate-900 dark:text-white font-mono">
                 {currentTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
               </span>
               <span className="text-[10px] md:text-sm font-medium text-slate-600 dark:text-slate-400 w-3 md:w-5">
                 {currentTime.getSeconds().toString().padStart(2, '0')}
               </span>
            </div>
          </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 scroll-smooth w-full">
          <div className="max-w-6xl mx-auto w-full pb-10">
            {view !== 'assignments' && (
              <div className="mb-4 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1 md:mb-2 capitalize tracking-tight">
                  {view === 'ai' ? 'AI Assistant' : view}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm truncate md:whitespace-normal font-medium">
                  {view === 'dashboard' && 'Your academic progress and upcoming deadlines.'}
                  {view === 'attendance' && 'Track your daily classes and build your streak.'}
                  {view === 'courses' && 'Access comprehensive syllabus, readings, and materials.'}
                  {view === 'ai' && 'Ask questions based on your specific course syllabus and assignments.'}
                </p>
              </div>
            )}

            {isLoadingData ? (
               <div className="flex flex-col items-center justify-center py-20 opacity-50">
                  <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-xs text-muted-400">Syncing with cloud...</p>
               </div>
            ) : (
              <>
                {view === 'dashboard' && <Dashboard attendance={records} courses={COURSES} assignments={assignments} settings={{includeExcusedInCalc: false}} />}
                {view === 'attendance' && <AttendanceTracker records={records} onUpdate={handleUpdateRecord} schedule={schedule} onImportSchedule={handleImportSchedule} onClearHistory={handleClearHistory} />}
                {view === 'assignments' && <Assignments assignments={assignments} courses={COURSES} onAdd={handleAddAssignment} onUpdate={handleUpdateAssignment} onDelete={handleDeleteAssignment} onAnalyzeExamRoutine={handleAnalyzeExamRoutine} />}
                {view === 'courses' && <Courses />}
                {view === 'ai' && <AIChat initialQuery={aiInitialQuery} initialFile={aiInitialFile} onInitialized={handleAIChatInitialized} />}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;