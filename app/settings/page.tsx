'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Badge from '@/components/Badge';
import { Moon, Sun, Lock, Trash2, Save } from 'lucide-react';

const SettingsPage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [workspaceName, setWorkspaceName] = useState('My Workspace');
  const [aiModel, setAiModel] = useState('gpt-4');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSave = () => {
    // Simulate save
    console.log('Settings saved');
  };

  return (
    <div className="flex bg-gray-950">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header title="Settings" subtitle="Manage your workspace" />

        <div className="p-6 max-w-4xl space-y-6">
          {/* Workspace Settings */}
          <Card variant="glass" className="p-6 space-y-4">
            <h2 className="text-lg font-bold">Workspace</h2>
            <Input
              label="Workspace Name"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Workspace ID</label>
              <div className="px-4 py-2 bg-gray-800 rounded-lg text-gray-400 font-mono text-sm border border-gray-700">
                ws_1234567890
              </div>
            </div>
          </Card>

          {/* Theme Settings */}
          <Card variant="glass" className="p-6 space-y-4">
            <h2 className="text-lg font-bold">Appearance</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Theme</label>
              <div className="flex gap-4">
                <Button
                  variant={theme === 'dark' ? 'primary' : 'ghost'}
                  className="flex items-center gap-2"
                  onClick={() => setTheme('dark')}
                >
                  <Moon size={16} />
                  Dark
                </Button>
                <Button
                  variant={theme === 'light' ? 'primary' : 'ghost'}
                  className="flex items-center gap-2"
                  onClick={() => setTheme('light')}
                >
                  <Sun size={16} />
                  Light
                </Button>
              </div>
            </div>
          </Card>

          {/* AI Settings */}
          <Card variant="glass" className="p-6 space-y-4">
            <h2 className="text-lg font-bold">AI Settings</h2>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">AI Model</label>
              <select
                value={aiModel}
                onChange={(e) => setAiModel(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-blue-600"
              >
                <option value="gpt-4">GPT-4 (Most Powerful)</option>
                <option value="gpt-3.5-turbo">GPT-3.5 Turbo (Faster)</option>
              </select>
            </div>
          </Card>

          {/* Notification Settings */}
          <Card variant="glass" className="p-6 space-y-4">
            <h2 className="text-lg font-bold">Notifications</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-gray-400 text-sm">Receive updates about your leads</p>
              </div>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notificationsEnabled ? 'bg-blue-600' : 'bg-gray-700'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </Card>

          {/* API Keys */}
          <Card variant="glass" className="p-6 space-y-4">
            <h2 className="text-lg font-bold">API Keys</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Lock size={18} className="text-gray-400" />
                  <div>
                    <p className="text-white text-sm">Default API Key</p>
                    <p className="text-gray-400 text-xs">sk_test_1234...7890</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Copy</Button>
              </div>
            </div>
            <Button variant="secondary" className="w-full">Generate New Key</Button>
          </Card>

          {/* Danger Zone */}
          <Card variant="glass" className="p-6 space-y-4 border-red-900/50">
            <h2 className="text-lg font-bold text-red-400">Danger Zone</h2>
            <p className="text-gray-400 text-sm">These actions cannot be undone.</p>
            <Button variant="danger" className="w-full flex items-center justify-center gap-2">
              <Trash2 size={18} />
              Delete Workspace
            </Button>
          </Card>

          {/* Save Button */}
          <div className="flex gap-2 pt-4">
            <Button variant="primary" size="lg" className="flex-1 flex items-center justify-center gap-2" onClick={handleSave}>
              <Save size={18} />
              Save Changes
            </Button>
            <Button variant="secondary" size="lg" className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;