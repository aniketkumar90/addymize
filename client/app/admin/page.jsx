'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  Mail,
  Calendar,
  Clock,
  Search,
  Filter,
  Trash2,
  ExternalLink,
  Download,
  RefreshCw,
  LogOut,
  Phone,
  Building2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  X,
  PlusCircle,
} from 'lucide-react';
import Logo from '@/components/Logo';
import {
  getAllSubmissions,
  getCurrentAdminUser,
  logoutAdmin,
  deleteSubmission,
  updateSubmissionStatus,
  submitContactForm,
} from '@/lib/api';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all'); // 'all' | 'contact' | 'lead'
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'new' | 'contacted' | 'resolved'
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  // Authentication check
  useEffect(() => {
    const adminUser = getCurrentAdminUser();
    if (!adminUser) {
      router.push('/admin/login');
    } else {
      setUser(adminUser);
      loadData();
    }

    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const loadData = async () => {
    setLoading(true);
    const data = await getAllSubmissions();
    setSubmissions(data || []);
    setLoading(false);
  };

  const handleLogout = () => {
    logoutAdmin();
    router.push('/admin/login');
  };

  const handleDelete = async (id, type, e) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to delete this submission?')) {
      await deleteSubmission(id, type);
      setSubmissions((prev) => prev.filter((item) => item._id !== id));
      if (selectedItem?._id === id) {
        setSelectedItem(null);
      }
    }
  };

  const handleStatusChange = async (id, type, newStatus, e) => {
    e?.stopPropagation();
    await updateSubmissionStatus(id, type, newStatus);
    setSubmissions((prev) =>
      prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
    );
    if (selectedItem?._id === id) {
      setSelectedItem((prev) => ({ ...prev, status: newStatus }));
    }
  };

  // Helper to format ISO date & time
  const formatDateTime = (isoString) => {
    if (!isoString) return { date: 'N/A', time: 'N/A', relative: '' };
    try {
      const d = new Date(isoString);
      const dateStr = d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
      const timeStr = d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });

      // Relative calculation
      const diffMs = Date.now() - d.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMins / 60);
      const diffDays = Math.floor(diffHours / 24);

      let relative = 'Just now';
      if (diffMins > 0 && diffMins < 60) relative = `${diffMins}m ago`;
      else if (diffHours >= 1 && diffHours < 24) relative = `${diffHours}h ago`;
      else if (diffDays >= 1) relative = `${diffDays}d ago`;

      return { date: dateStr, time: timeStr, relative };
    } catch (e) {
      return { date: 'Invalid Date', time: '', relative: '' };
    }
  };

  // Filter submissions
  const filteredSubmissions = submissions.filter((item) => {
    // Type filter
    if (filterType !== 'all' && item.type !== filterType) return false;
    // Status filter
    if (statusFilter !== 'all' && (item.status || 'new') !== statusFilter) return false;
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = (item.name || '').toLowerCase().includes(q);
      const matchEmail = (item.email || '').toLowerCase().includes(q);
      const matchCompany = (item.company || '').toLowerCase().includes(q);
      const matchPhone = (item.phone || '').toLowerCase().includes(q);
      const matchMessage = (item.message || '').toLowerCase().includes(q);
      if (!matchName && !matchEmail && !matchCompany && !matchPhone && !matchMessage) {
        return false;
      }
    }
    return true;
  });

  // KPI Metrics
  const totalSubmissions = submissions.length;
  const contactCount = submissions.filter((s) => s.type === 'contact').length;
  const leadCount = submissions.filter((s) => s.type === 'lead').length;

  const todayCount = submissions.filter((s) => {
    if (!s.createdAt) return false;
    const d = new Date(s.createdAt);
    const today = new Date();
    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  }).length;

  // Export to CSV with full date and time
  const exportToCSV = () => {
    if (filteredSubmissions.length === 0) {
      alert('No submissions to export.');
      return;
    }

    const headers = ['ID', 'Type', 'Name', 'Email', 'Phone', 'Company', 'Message', 'Source', 'Status', 'Date', 'Time', 'ISO Timestamp'];
    const rows = filteredSubmissions.map((s) => {
      const dt = formatDateTime(s.createdAt);
      return [
        `"${s._id || ''}"`,
        `"${s.type || 'contact'}"`,
        `"${(s.name || '').replace(/"/g, '""')}"`,
        `"${(s.email || '').replace(/"/g, '""')}"`,
        `"${(s.phone || '').replace(/"/g, '""')}"`,
        `"${(s.company || '').replace(/"/g, '""')}"`,
        `"${(s.message || '').replace(/"/g, '""')}"`,
        `"${(s.source || '').replace(/"/g, '""')}"`,
        `"${s.status || 'new'}"`,
        `"${dt.date}"`,
        `"${dt.time}"`,
        `"${s.createdAt || ''}"`,
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `addymize_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Test form simulator (quick verification button)
  const handleSimulateTestSubmission = async () => {
    const testNames = ['Aarav Patel', 'Pooja Singhania', 'Aditya Roy', 'Neha Joshi'];
    const randomName = testNames[Math.floor(Math.random() * testNames.length)];
    const randomId = Math.floor(100 + Math.random() * 900);

    const testData = {
      name: `${randomName} (${randomId})`,
      email: `client${randomId}@enterprise.com`,
      phone: `+91 98${randomId} 12345`,
      company: `Apex Global Tech ${randomId}`,
      message: 'Inquiring about full-stack modular Next.js architecture and automated CRM telemetry integration.',
    };

    await submitContactForm(testData);
    await loadData();
  };

  return (
    <div className="min-h-screen bg-[#073e4a] text-slate-100 selection:bg-amber-400 selection:text-black">
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-[#063b46]/90 backdrop-blur-xl border-b border-teal-300/20 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-300/30 text-xs font-semibold text-teal-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
              <span>Admin Console</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Clock */}
            {currentTime && (
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-teal-300/15 text-xs text-teal-200/80 font-mono">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span>{currentTime}</span>
              </div>
            )}

            {/* View Public Website */}
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-teal-300/20 text-xs font-medium text-slate-200 transition-all"
            >
              <span>View Site</span>
              <ExternalLink className="w-3 h-3 text-teal-300" />
            </Link>

            {/* Refresh Data */}
            <button
              type="button"
              onClick={loadData}
              title="Refresh submissions"
              className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-teal-300/20 text-teal-200 transition-all cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            {/* Admin User Pill */}
            <div className="flex items-center gap-2 pl-2 border-l border-teal-300/20">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400/40 via-teal-400/40 to-cyan-400/40 border border-teal-300/30 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                {(user?.name || 'A').charAt(0).toUpperCase()}
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs font-bold text-white leading-tight">
                  {user?.name || 'Administrator'}
                </span>
                <span className="text-[10px] text-teal-200/60">
                  {user?.email || 'admin@addymize.com'}
                </span>
              </div>

              {/* Logout Button */}
              <button
                type="button"
                onClick={handleLogout}
                title="Sign out"
                className="ml-1 p-2 rounded-xl text-rose-300 hover:text-rose-200 hover:bg-rose-500/20 transition-all cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Total */}
          <div className="p-5 rounded-2xl bg-[#06424f]/70 border border-teal-300/25 backdrop-blur-xl shadow-lg flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-teal-200/80">Total Submissions</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">{totalSubmissions}</h3>
              <span className="text-[11px] text-slate-300 mt-1 block">Live form responses</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shadow-md">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          {/* Card 2: Today's Inquiries */}
          <div className="p-5 rounded-2xl bg-[#06424f]/70 border border-teal-300/25 backdrop-blur-xl shadow-lg flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-teal-200/80">Today's Inquiries</span>
              <div className="flex items-center gap-2 mt-1">
                <h3 className="text-2xl sm:text-3xl font-black text-white">{todayCount}</h3>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <span className="text-[11px] text-emerald-300 mt-1 block">Active incoming leads</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-md">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          {/* Card 3: Contact Messages */}
          <div className="p-5 rounded-2xl bg-[#06424f]/70 border border-teal-300/25 backdrop-blur-xl shadow-lg flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-teal-200/80">Contact Messages</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">{contactCount}</h3>
              <span className="text-[11px] text-slate-300 mt-1 block">General inquiries</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-md">
              <Mail className="w-6 h-6" />
            </div>
          </div>

          {/* Card 4: Demo Requests */}
          <div className="p-5 rounded-2xl bg-[#06424f]/70 border border-teal-300/25 backdrop-blur-xl shadow-lg flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-teal-200/80">Demo Bookings</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">{leadCount}</h3>
              <span className="text-[11px] text-slate-300 mt-1 block">High-intent leads</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-md">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Submissions Management Explorer */}
        <div className="rounded-3xl bg-[#06424f]/70 border border-teal-300/25 backdrop-blur-2xl p-5 sm:p-7 shadow-2xl space-y-6">
          {/* Header & Controls Bar */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-4 border-b border-teal-300/15">
            {/* Left: Tab Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#042d36]/80 border border-teal-300/20 overflow-x-auto">
              <button
                type="button"
                onClick={() => setFilterType('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterType === 'all'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                All Submissions ({submissions.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('contact')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterType === 'contact'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Contact Form ({contactCount})
              </button>
              <button
                type="button"
                onClick={() => setFilterType('lead')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filterType === 'lead'
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Demo Requests ({leadCount})
              </button>
            </div>

            {/* Right: Actions (Search, Export, Simulate) */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative min-w-[200px] flex-1 sm:flex-initial">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search leads, email, company..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#042f38]/90 border border-teal-300/25 text-white placeholder-teal-200/50 text-xs focus:outline-none focus:border-teal-300 transition-all"
                />
                <Search className="w-3.5 h-3.5 text-teal-300/60 absolute left-3 top-2.5" />
              </div>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#042f38]/90 border border-teal-300/25 text-xs text-white focus:outline-none cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="resolved">Resolved</option>
              </select>

              {/* Export CSV */}
              <button
                type="button"
                onClick={exportToCSV}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] border border-teal-300/20 text-xs font-semibold text-teal-100 transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-amber-300" />
                <span>Export CSV</span>
              </button>

              {/* Simulate Test Form */}
              <button
                type="button"
                onClick={handleSimulateTestSubmission}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 border border-teal-300/30 text-xs font-semibold text-teal-200 transition-all cursor-pointer shadow-sm"
              >
                <PlusCircle className="w-3.5 h-3.5 text-teal-300" />
                <span>+ Test Lead</span>
              </button>
            </div>
          </div>

          {/* Submissions Table with Exact Time & Date */}
          <div className="overflow-x-auto rounded-2xl border border-teal-300/15">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#032932]/90 text-teal-200/80 uppercase font-semibold border-b border-teal-300/15">
                <tr>
                  <th className="py-3 px-4">Submitter & Company</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Contact Details</th>
                  <th className="py-3 px-4">Message / Requirements</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-300/10 bg-[#053742]/50">
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="text-center py-12 text-slate-300">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <FileText className="w-8 h-8 text-teal-300/40" />
                        <span className="font-semibold">No form submissions found.</span>
                        <span className="text-xs text-teal-200/60">
                          When visitors fill the Contact Form or Demo Modal, submissions will appear here instantly with full time and date.
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((item) => {
                    const dt = formatDateTime(item.createdAt);
                    const statusColor =
                      item.status === 'contacted'
                        ? 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30'
                        : item.status === 'resolved'
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30'
                        : 'bg-amber-500/15 text-amber-300 border-amber-400/30';

                    return (
                      <tr
                        key={item._id}
                        onClick={() => setSelectedItem(item)}
                        className="hover:bg-white/[0.05] transition-colors cursor-pointer group"
                      >
                        {/* Submitter & Company */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col">
                            <span className="font-bold text-white group-hover:text-amber-300 transition-colors">
                              {item.name || 'Anonymous'}
                            </span>
                            <span className="text-[11px] text-teal-200/70 font-medium">
                              {item.company || 'Private Client'}
                            </span>
                          </div>
                        </td>

                        {/* Type Badge */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                              item.type === 'lead'
                                ? 'bg-purple-500/20 text-purple-300 border-purple-400/30'
                                : 'bg-teal-500/20 text-teal-300 border-teal-400/30'
                            }`}
                          >
                            {item.type === 'lead' ? 'Demo Request' : 'Contact Form'}
                          </span>
                        </td>

                        {/* Contact Details */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col gap-0.5">
                            <a
                              href={`mailto:${item.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="text-slate-200 hover:text-amber-300 flex items-center gap-1.5 transition-colors"
                            >
                              <Mail className="w-3 h-3 text-teal-300/70" />
                              <span className="truncate max-w-[160px]">{item.email}</span>
                            </a>
                            {item.phone && (
                              <a
                                href={`tel:${item.phone}`}
                                onClick={(e) => e.stopPropagation()}
                                className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors text-[11px]"
                              >
                                <Phone className="w-3 h-3 text-teal-300/70" />
                                <span>{item.phone}</span>
                              </a>
                            )}
                          </div>
                        </td>

                        {/* Message Preview */}
                        <td className="py-3.5 px-4 max-w-[220px]">
                          <p className="text-slate-300 truncate text-[11px]" title={item.message}>
                            {item.message || '(No message content provided)'}
                          </p>
                        </td>

                        {/* Date & Time Timestamp */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1.5 text-white font-medium">
                              <Calendar className="w-3 h-3 text-amber-300" />
                              <span>{dt.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-teal-200/70 text-[11px]">
                              <Clock className="w-3 h-3 text-teal-300/60" />
                              <span>{dt.time}</span>
                              <span className="text-amber-300/80 font-semibold">({dt.relative})</span>
                            </div>
                          </div>
                        </td>

                        {/* Status Dropdown */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <select
                            value={item.status || 'new'}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) =>
                              handleStatusChange(item._id, item.type, e.target.value, e)
                            }
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold border capitalize cursor-pointer focus:outline-none ${statusColor}`}
                          >
                            <option value="new" className="bg-[#042d36] text-amber-300">
                              New
                            </option>
                            <option value="contacted" className="bg-[#042d36] text-cyan-300">
                              Contacted
                            </option>
                            <option value="resolved" className="bg-[#042d36] text-emerald-300">
                              Resolved
                            </option>
                          </select>
                        </td>

                        {/* Actions */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              type="button"
                              onClick={() => setSelectedItem(item)}
                              title="View details"
                              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                            >
                              <ArrowUpRight className="w-4 h-4 text-teal-300" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => handleDelete(item._id, item.type, e)}
                              title="Delete submission"
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-all cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-3xl bg-[#06424f] border border-teal-300/30 p-6 shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider ${
                    selectedItem.type === 'lead'
                      ? 'bg-purple-500/20 text-purple-300 border-purple-400/30'
                      : 'bg-teal-500/20 text-teal-300 border-teal-400/30'
                  }`}
                >
                  {selectedItem.type === 'lead' ? 'Demo Request' : 'Contact Inbound'}
                </span>
                <span className="text-xs text-amber-300 font-mono">
                  {formatDateTime(selectedItem.createdAt).date} &bull;{' '}
                  {formatDateTime(selectedItem.createdAt).time}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-1">
                {selectedItem.name || 'Anonymous Submitter'}
              </h2>
              <span className="text-xs text-teal-200/80 mb-4 block">
                {selectedItem.company || 'Private Entity'}
              </span>

              <div className="space-y-3 bg-[#042f38]/90 rounded-2xl p-4 border border-teal-300/20 mb-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Email:</span>
                  <a
                    href={`mailto:${selectedItem.email}`}
                    className="text-white font-medium hover:text-amber-300 underline"
                  >
                    {selectedItem.email}
                  </a>
                </div>
                {selectedItem.phone && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Phone:</span>
                    <a
                      href={`tel:${selectedItem.phone}`}
                      className="text-white font-medium hover:text-amber-300 underline"
                    >
                      {selectedItem.phone}
                    </a>
                  </div>
                )}
                {selectedItem.source && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Source:</span>
                    <span className="text-teal-200">{selectedItem.source}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Recorded At:</span>
                  <span className="text-slate-200 font-mono">
                    {selectedItem.createdAt || 'N/A'}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                  Full Message / Specifications:
                </label>
                <div className="p-3.5 rounded-xl bg-[#042830] border border-teal-300/15 text-slate-200 text-xs leading-relaxed max-h-48 overflow-y-auto whitespace-pre-wrap">
                  {selectedItem.message || 'No additional message provided.'}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-teal-300/15">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Status:</span>
                  <select
                    value={selectedItem.status || 'new'}
                    onChange={(e) =>
                      handleStatusChange(selectedItem._id, selectedItem.type, e.target.value)
                    }
                    className="px-2.5 py-1 rounded-lg bg-[#042f38] border border-teal-300/25 text-xs text-white cursor-pointer"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${selectedItem.email}?subject=Addymize Response: Inbound Inquiry`}
                    className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs shadow-md"
                  >
                    Reply via Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
