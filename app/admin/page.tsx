'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import {
  ArrowLeft,
  Save,
  RefreshCw,
  Database,
  Lock,
  Plus,
  Trash2,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  User,
  Briefcase,
  Layers,
  Code2,
  GraduationCap,
  Mail,
  Sparkles,
} from 'lucide-react';
import { PortfolioData, ProjectItem, ExperienceItem, SkillCategory, EducationItem, LearningTopic } from '@/lib/types';
import { ThemeToggle } from '@/components/theme-toggle';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [secretInput, setSecretInput] = useState<string>('');
  const [adminSecret, setAdminSecret] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [seeding, setSeeding] = useState<boolean>(false);
  const [dbStatus, setDbStatus] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>('personal');
  const [data, setData] = useState<PortfolioData | null>(null);

  // Check stored credentials on mount
  useEffect(() => {
    const savedSecret = localStorage.getItem('portfolio_admin_secret');
    if (savedSecret) {
      verifyAndLoad(savedSecret);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyAndLoad = async (secret: string) => {
    setLoading(true);
    try {
      const authRes = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret }),
      });

      if (!authRes.ok) {
        localStorage.removeItem('portfolio_admin_secret');
        setIsAuthenticated(false);
        setLoading(false);
        toast.error('Invalid admin secret');
        return;
      }

      setAdminSecret(secret);
      setIsAuthenticated(true);
      localStorage.setItem('portfolio_admin_secret', secret);

      // Fetch current data
      await loadPortfolioData();
    } catch (err: any) {
      toast.error('Authentication failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadPortfolioData = async () => {
    try {
      const res = await fetch('/api/portfolio');
      const json = await res.json();
      if (json.success) {
        setData(json.data);
        setDbStatus(json.status);
      } else {
        toast.error(json.error || 'Failed to fetch data');
      }
    } catch (err: any) {
      toast.error('Network error loading data: ' + err.message);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!secretInput.trim()) {
      toast.error('Please enter admin password/PIN');
      return;
    }
    verifyAndLoad(secretInput.trim());
  };

  const handleLogout = () => {
    localStorage.removeItem('portfolio_admin_secret');
    setIsAuthenticated(false);
    setAdminSecret('');
    toast.info('Logged out from Admin panel');
  };

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);
    try {
      const res = await fetch('/api/portfolio', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': adminSecret,
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.success) {
        toast.success(json.message || 'Saved successfully!');
        await loadPortfolioData();
      } else {
        toast.error(json.error || 'Failed to save changes');
      }
    } catch (err: any) {
      toast.error('Save failed: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleSeed = async () => {
    if (!confirm('Are you sure you want to seed the Cloud Database with default portfolio data?')) {
      return;
    }
    setSeeding(true);
    try {
      const res = await fetch('/api/portfolio/seed', {
        method: 'POST',
        headers: {
          'x-admin-secret': adminSecret,
        },
      });

      const json = await res.json();
      if (json.success) {
        toast.success(json.message);
        await loadPortfolioData();
      } else {
        toast.error(json.error || 'Seeding failed');
      }
    } catch (err: any) {
      toast.error('Error seeding DB: ' + err.message);
    } finally {
      setSeeding(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <RefreshCw className="w-8 h-8 text-primary animate-spin" />
          <p className="text-muted-foreground text-sm font-medium">Loading Admin Dashboard...</p>
        </div>
      </div>
    );
  }

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <div className="max-w-md w-full p-8 rounded-2xl bg-card border border-border/80 shadow-2xl relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 mx-auto">
            <Lock className="w-7 h-7" />
          </div>

          <h1 className="text-2xl font-bold text-center text-foreground mb-2">Admin Portal</h1>
          <p className="text-sm text-center text-muted-foreground mb-6">
            Enter your admin secret to manage and update your portfolio live.
          </p>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">
                Admin Password / Secret PIN
              </label>
              <input
                type="password"
                value={secretInput}
                onChange={(e) => setSecretInput(e.target.value)}
                placeholder="Default: admin123"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-hidden focus:ring-2 focus:ring-primary text-foreground text-sm"
                autoFocus
              />
              <p className="text-[11px] text-muted-foreground mt-1.5">
                Configured in <code className="bg-secondary px-1 py-0.5 rounded">.env.local</code> as <code className="text-primary font-mono">ADMIN_SECRET</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-all cursor-pointer"
            >
              Unlock Dashboard
            </button>

            <div className="pt-4 text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-xl border border-border/70 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
              title="Return to website"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-xl font-bold text-foreground">Portfolio Admin</h1>
                {dbStatus?.connected ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    MongoDB Cloud Connected
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 border border-amber-500/20">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Local Fallback Active
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {dbStatus?.message || 'Manage your live portfolio values'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={handleSeed}
              disabled={seeding}
              className="px-3.5 py-2 text-xs font-semibold rounded-xl border border-border/80 hover:bg-secondary text-foreground flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Upload default dataset to MongoDB"
            >
              <Database className="w-3.5 h-3.5 text-accent" />
              {seeding ? 'Seeding...' : 'Seed Cloud DB'}
            </button>

            <button
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground shadow-md hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {saving ? 'Saving...' : 'Save Changes'}
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-2 text-xs font-medium text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content & Tabs */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-border/70 scrollbar-none">
          {[
            { id: 'personal', label: 'Personal & Hero', icon: User },
            { id: 'experience', label: 'Experience', icon: Briefcase },
            { id: 'projects', label: 'Projects', icon: Layers },
            { id: 'skills', label: 'Skills', icon: Code2 },
            { id: 'education', label: 'Education & Learning', icon: GraduationCap },
            { id: 'contact', label: 'Contact & Quick Facts', icon: Mail },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  active
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Personal & Bio */}
        {activeTab === 'personal' && (
          <div className="space-y-8 animate-fade-in">
            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs space-y-6">
              <h2 className="text-lg font-bold flex items-center gap-2 text-foreground">
                <User className="w-5 h-5 text-primary" /> Profile & Header Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    value={data.personal.name}
                    onChange={(e) =>
                      setData({ ...data, personal: { ...data.personal, name: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Primary Title</label>
                  <input
                    type="text"
                    value={data.personal.title}
                    onChange={(e) =>
                      setData({ ...data, personal: { ...data.personal, title: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Current Company</label>
                  <input
                    type="text"
                    value={data.personal.company}
                    onChange={(e) =>
                      setData({ ...data, personal: { ...data.personal, company: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Location</label>
                  <input
                    type="text"
                    value={data.personal.location}
                    onChange={(e) =>
                      setData({ ...data, personal: { ...data.personal, location: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Resume PDF URL / Path</label>
                  <input
                    type="text"
                    value={data.personal.resumeUrl}
                    onChange={(e) =>
                      setData({ ...data, personal: { ...data.personal, resumeUrl: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary text-sm font-mono text-xs"
                    placeholder="/resume.pdf"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Logo / Avatar Image URL</label>
                  <input
                    type="text"
                    value={data.personal.avatarUrl || ''}
                    onChange={(e) =>
                      setData({ ...data, personal: { ...data.personal, avatarUrl: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary text-sm font-mono text-xs"
                    placeholder="/apple-touch-icon.png or /icon.svg"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Career Start Date (Joining Date: YYYY-MM-DD)</label>
                  <input
                    type="date"
                    value={data.personal.careerStartDate || '2025-01-02'}
                    onChange={(e) =>
                      setData({ ...data, personal: { ...data.personal, careerStartDate: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary text-sm font-mono text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Hero Headline Bio</label>
                <textarea
                  rows={3}
                  value={data.personal.bio}
                  onChange={(e) =>
                    setData({ ...data, personal: { ...data.personal, bio: e.target.value } })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </div>

            {/* About Stats */}
            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs space-y-6">
              <h2 className="text-lg font-bold flex items-center gap-2 text-foreground">
                <Sparkles className="w-5 h-5 text-accent" /> About Section & Highlights
              </h2>

              <div className="space-y-4">
                <label className="block text-xs uppercase font-semibold text-muted-foreground">About Narrative Paragraphs</label>
                {data.about.paragraphs?.map((p, idx) => (
                  <div key={idx} className="flex gap-2">
                    <textarea
                      rows={2}
                      value={p}
                      onChange={(e) => {
                        const newP = [...(data.about.paragraphs || [])];
                        newP[idx] = e.target.value;
                        setData({ ...data, about: { ...data.about, paragraphs: newP } });
                      }}
                      className="flex-1 px-4 py-2 rounded-xl bg-background border border-border text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newP = data.about.paragraphs?.filter((_, i) => i !== idx);
                        setData({ ...data, about: { ...data.about, paragraphs: newP } });
                      }}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg self-center"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const newP = [...(data.about.paragraphs || []), ''];
                    setData({ ...data, about: { ...data.about, paragraphs: newP } });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Paragraph
                </button>
              </div>

              {/* Stats */}
              <div>
                <label className="block text-xs uppercase font-semibold text-muted-foreground mb-3">Stats Counters</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {data.about.stats.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-border bg-background space-y-2">
                      <input
                        type="text"
                        value={stat.value}
                        placeholder="Value (e.g. 1.5+)"
                        onChange={(e) => {
                          const newStats = [...data.about.stats];
                          newStats[idx].value = e.target.value;
                          setData({ ...data, about: { ...data.about, stats: newStats } });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-border bg-card font-bold text-lg text-primary text-center"
                      />
                      <input
                        type="text"
                        value={stat.label}
                        placeholder="Label"
                        onChange={(e) => {
                          const newStats = [...data.about.stats];
                          newStats[idx].label = e.target.value;
                          setData({ ...data, about: { ...data.about, stats: newStats } });
                        }}
                        className="w-full px-3 py-1 rounded-lg border border-border bg-card text-xs text-center text-muted-foreground"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Work Experience</h2>
              <button
                type="button"
                onClick={() => {
                  const newExp: ExperienceItem = {
                    id: 'exp-' + Date.now(),
                    role: 'Software Engineer',
                    company: 'Company Name',
                    location: 'City, Country',
                    period: '2025 - Present',
                    description: 'Role overview and core responsibilities.',
                    highlights: ['React', 'Node.js'],
                    achievements: ['Delivered key feature with high impact'],
                  };
                  setData({ ...data, experience: [newExp, ...data.experience] });
                }}
                className="px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add Experience
              </button>
            </div>

            {data.experience.map((exp, idx) => (
              <div key={exp.id || idx} className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs space-y-5">
                <div className="flex justify-between items-start gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Job Title / Role</label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => {
                          const list = [...data.experience];
                          list[idx].role = e.target.value;
                          setData({ ...data, experience: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-sm font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const list = [...data.experience];
                          list[idx].company = e.target.value;
                          setData({ ...data, experience: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-sm font-semibold text-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Period (Dates)</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => {
                          const list = [...data.experience];
                          list[idx].period = e.target.value;
                          setData({ ...data, experience: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Location</label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => {
                          const list = [...data.experience];
                          list[idx].location = e.target.value;
                          setData({ ...data, experience: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const list = data.experience.filter((_, i) => i !== idx);
                      setData({ ...data, experience: list });
                    }}
                    className="p-2 text-destructive hover:bg-destructive/10 rounded-xl"
                    title="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">Overview Description</label>
                  <textarea
                    rows={3}
                    value={exp.description}
                    onChange={(e) => {
                      const list = [...data.experience];
                      list[idx].description = e.target.value;
                      setData({ ...data, experience: list });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-border text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">
                    Tech Highlights (Comma-separated)
                  </label>
                  <input
                    type="text"
                    value={exp.highlights.join(', ')}
                    onChange={(e) => {
                      const list = [...data.experience];
                      list[idx].highlights = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                      setData({ ...data, experience: list });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                    placeholder="React, Node.js, Express, TypeScript"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-2">Key Achievements</label>
                  <div className="space-y-2">
                    {exp.achievements.map((ach, achIdx) => (
                      <div key={achIdx} className="flex gap-2">
                        <input
                          type="text"
                          value={ach}
                          onChange={(e) => {
                            const list = [...data.experience];
                            list[idx].achievements[achIdx] = e.target.value;
                            setData({ ...data, experience: list });
                          }}
                          className="flex-1 px-3 py-1.5 rounded-lg bg-background border border-border text-xs"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const list = [...data.experience];
                            list[idx].achievements = list[idx].achievements.filter((_, i) => i !== achIdx);
                            setData({ ...data, experience: list });
                          }}
                          className="p-1.5 text-destructive hover:bg-destructive/10 rounded-md"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        const list = [...data.experience];
                        list[idx].achievements.push('');
                        setData({ ...data, experience: list });
                      }}
                      className="text-xs text-primary font-semibold inline-flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" /> Add Achievement
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Projects */}
        {activeTab === 'projects' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">Projects & Case Studies</h2>
                <p className="text-xs text-muted-foreground">
                  Each project has a card summary and a full dynamic page at <code className="text-primary font-mono">/projects/[slug]</code>.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const newProj: ProjectItem = {
                    id: 'new-project-' + Date.now(),
                    title: 'New Exciting Project',
                    status: 'Featured',
                    description: 'Short 1-2 sentence description for home page card.',
                    fullDescription: 'Comprehensive overview paragraph for case study page.',
                    detailedDescription: 'In-depth architecture description and breakdown.',
                    techStack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
                    keyFeatures: ['Feature 1', 'Feature 2'],
                    engineeringHighlights: ['Engineered scalable pipeline'],
                    links: { demo: '', github: '' },
                  };
                  setData({ ...data, projects: [newProj, ...data.projects] });
                }}
                className="px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add Project
              </button>
            </div>

            {data.projects.map((proj, idx) => (
              <div key={proj.id || idx} className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs space-y-5">
                <div className="flex justify-between items-start gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">URL Slug (ID)</label>
                      <input
                        type="text"
                        value={proj.id}
                        onChange={(e) => {
                          const list = [...data.projects];
                          list[idx].id = e.target.value.toLowerCase().replace(/\s+/g, '-');
                          setData({ ...data, projects: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs font-mono"
                        placeholder="e.g. school-management"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Project Title</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const list = [...data.projects];
                          list[idx].title = e.target.value;
                          setData({ ...data, projects: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-sm font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Status Badge</label>
                      <select
                        value={proj.status}
                        onChange={(e) => {
                          const list = [...data.projects];
                          list[idx].status = e.target.value;
                          setData({ ...data, projects: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs font-semibold"
                      >
                        <option value="Featured">Featured</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/projects/${proj.id}`}
                      target="_blank"
                      className="p-2 text-muted-foreground hover:text-primary rounded-lg border border-border/60"
                      title="Preview page"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        const list = data.projects.filter((_, i) => i !== idx);
                        setData({ ...data, projects: list });
                      }}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">Short Card Description</label>
                  <input
                    type="text"
                    value={proj.description}
                    onChange={(e) => {
                      const list = [...data.projects];
                      list[idx].description = e.target.value;
                      setData({ ...data, projects: list });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1">
                    Detailed Case Study Narrative
                  </label>
                  <textarea
                    rows={4}
                    value={proj.detailedDescription || proj.fullDescription}
                    onChange={(e) => {
                      const list = [...data.projects];
                      list[idx].detailedDescription = e.target.value;
                      list[idx].fullDescription = e.target.value;
                      setData({ ...data, projects: list });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Tech Stack (Comma-separated)
                    </label>
                    <input
                      type="text"
                      value={proj.techStack.join(', ')}
                      onChange={(e) => {
                        const list = [...data.projects];
                        list[idx].techStack = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                        setData({ ...data, projects: list });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Key Features (Comma-separated)
                    </label>
                    <input
                      type="text"
                      value={proj.keyFeatures.join(', ')}
                      onChange={(e) => {
                        const list = [...data.projects];
                        list[idx].keyFeatures = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                        setData({ ...data, projects: list });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">GitHub Repo URL</label>
                    <input
                      type="text"
                      value={proj.links?.github || ''}
                      onChange={(e) => {
                        const list = [...data.projects];
                        list[idx].links = { ...list[idx].links, github: e.target.value };
                        setData({ ...data, projects: list });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs font-mono"
                      placeholder="https://github.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">Live Demo URL</label>
                    <input
                      type="text"
                      value={proj.links?.demo || ''}
                      onChange={(e) => {
                        const list = [...data.projects];
                        list[idx].links = { ...list[idx].links, demo: e.target.value };
                        setData({ ...data, projects: list });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs font-mono"
                      placeholder="https://..."
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Skills */}
        {activeTab === 'skills' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Skills & Technologies</h2>
              <button
                type="button"
                onClick={() => {
                  const newCat: SkillCategory = {
                    title: 'New Skill Category',
                    skills: ['Skill 1', 'Skill 2'],
                  };
                  setData({ ...data, skills: [...data.skills, newCat] });
                }}
                className="px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add Category
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.skills.map((cat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs space-y-4">
                  <div className="flex justify-between items-center gap-2">
                    <input
                      type="text"
                      value={cat.title}
                      onChange={(e) => {
                        const list = [...data.skills];
                        list[idx].title = e.target.value;
                        setData({ ...data, skills: list });
                      }}
                      className="flex-1 px-3 py-2 rounded-xl bg-background border border-border text-sm font-bold text-primary"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const list = data.skills.filter((_, i) => i !== idx);
                        setData({ ...data, skills: list });
                      }}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">
                      Skills List (Comma-separated)
                    </label>
                    <textarea
                      rows={3}
                      value={cat.skills.join(', ')}
                      onChange={(e) => {
                        const list = [...data.skills];
                        list[idx].skills = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                        setData({ ...data, skills: list });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                    />
                  </div>

                  {/* Badges preview */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cat.skills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-[11px] font-medium border border-border/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Education & Learning */}
        {activeTab === 'education' && (
          <div className="space-y-8 animate-fade-in">
            {/* Learning Tracks */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Continuous Learning Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.learning.map((topic, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs space-y-4">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        value={topic.icon}
                        onChange={(e) => {
                          const list = [...data.learning];
                          list[idx].icon = e.target.value;
                          setData({ ...data, learning: list });
                        }}
                        className="w-12 text-center text-xl px-2 py-2 rounded-xl bg-background border border-border"
                      />
                      <input
                        type="text"
                        value={topic.title}
                        onChange={(e) => {
                          const list = [...data.learning];
                          list[idx].title = e.target.value;
                          setData({ ...data, learning: list });
                        }}
                        className="flex-1 px-3 py-2 rounded-xl bg-background border border-border text-sm font-bold"
                      />
                    </div>

                    <textarea
                      rows={2}
                      value={topic.description}
                      onChange={(e) => {
                        const list = [...data.learning];
                        list[idx].description = e.target.value;
                        setData({ ...data, learning: list });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                    />

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">
                        Topics Covered (Comma-separated)
                      </label>
                      <input
                        type="text"
                        value={topic.topics.join(', ')}
                        onChange={(e) => {
                          const list = [...data.learning];
                          list[idx].topics = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                          setData({ ...data, learning: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold">Education Timeline</h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const list = [...data.education];
                          list[idx].degree = e.target.value;
                          setData({ ...data, education: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-sm font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Field / Stream</label>
                      <input
                        type="text"
                        value={edu.field}
                        onChange={(e) => {
                          const list = [...data.education];
                          list[idx].field = e.target.value;
                          setData({ ...data, education: list });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1">Year & Grade</label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={edu.year}
                          onChange={(e) => {
                            const list = [...data.education];
                            list[idx].year = e.target.value;
                            setData({ ...data, education: list });
                          }}
                          className="w-1/2 px-3 py-2 rounded-xl bg-background border border-border text-xs"
                          placeholder="Year"
                        />
                        <input
                          type="text"
                          value={edu.cgpa || edu.percentage || ''}
                          onChange={(e) => {
                            const list = [...data.education];
                            list[idx].cgpa = e.target.value;
                            setData({ ...data, education: list });
                          }}
                          className="w-1/2 px-3 py-2 rounded-xl bg-background border border-border text-xs"
                          placeholder="CGPA/Score"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1">Institution & Location</label>
                    <input
                      type="text"
                      value={edu.institution + ' — ' + edu.details}
                      onChange={(e) => {
                        const list = [...data.education];
                        list[idx].institution = e.target.value;
                        setData({ ...data, education: list });
                      }}
                      className="w-full px-3 py-2 rounded-xl bg-background border border-border text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Contact & Socials */}
        {activeTab === 'contact' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs space-y-6">
              <h2 className="text-lg font-bold flex items-center gap-2 text-foreground">
                <Mail className="w-5 h-5 text-primary" /> Contact Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    value={data.contact.email}
                    onChange={(e) =>
                      setData({ ...data, contact: { ...data.contact, email: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-muted-foreground mb-2">Headline Prompt</label>
                  <input
                    type="text"
                    value={data.contact.description}
                    onChange={(e) =>
                      setData({ ...data, contact: { ...data.contact, description: e.target.value } })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-sm"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div>
                <label className="block text-xs uppercase font-semibold text-muted-foreground mb-3">Social Profiles</label>
                <div className="space-y-3">
                  {data.contact.links.map((link, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <span className="w-24 text-xs font-bold text-foreground">{link.label}</span>
                      <input
                        type="text"
                        value={link.url}
                        onChange={(e) => {
                          const links = [...data.contact.links];
                          links[idx].url = e.target.value;
                          setData({ ...data, contact: { ...data.contact, links } });
                        }}
                        className="flex-1 px-4 py-2 rounded-xl bg-background border border-border text-xs font-mono"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div>
                <label className="block text-xs uppercase font-semibold text-muted-foreground mb-3">Quick Facts</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(data.contact.quickFacts || []).map((fact, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-border bg-background space-y-2">
                      <input
                        type="text"
                        value={fact.label}
                        onChange={(e) => {
                          const facts = [...(data.contact.quickFacts || [])];
                          facts[idx].label = e.target.value;
                          setData({ ...data, contact: { ...data.contact, quickFacts: facts } });
                        }}
                        className="w-full px-3 py-1 rounded-lg border border-border bg-card text-xs font-semibold text-muted-foreground"
                        placeholder="Fact Label (e.g. Location)"
                      />
                      <input
                        type="text"
                        value={fact.value}
                        onChange={(e) => {
                          const facts = [...(data.contact.quickFacts || [])];
                          facts[idx].value = e.target.value;
                          setData({ ...data, contact: { ...data.contact, quickFacts: facts } });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg border border-border bg-card text-sm font-bold text-foreground"
                        placeholder="Fact Value"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Save Bar */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-bold shadow-xl hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2.5 cursor-pointer disabled:opacity-50"
        >
          {saving ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
          {saving ? 'Saving changes...' : 'Save All Changes'}
        </button>
      </div>
    </div>
  );
}
