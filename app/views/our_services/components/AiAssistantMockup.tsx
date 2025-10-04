import { Bot, Calendar, FileText, MoreHorizontal } from 'lucide-react';

export function AIAssistantMockup() {
  return (
    <div className="bg-gradient-to-br from-primary to-black border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium">AI Assistant</span>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        <div className="bg-primary/20 border border-primary/30 rounded-xl p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium mb-1">Daily Summary Ready</div>
              <div className="text-xs text-gray-400">Your daily briefing is prepared</div>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Emails processed:</span>
              <span className="font-medium">47</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Meetings today:</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Tasks completed:</span>
              <span className="font-medium text-green-400">12/15</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
          <Calendar className="w-5 h-5 text-blue-400" />
          <div className="flex-1">
            <div className="text-sm font-medium">Schedule optimization</div>
            <div className="text-xs text-gray-400">3 conflicts resolved</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
          <FileText className="w-5 h-5 text-green-400" />
          <div className="flex-1">
            <div className="text-sm font-medium">Reports generated</div>
            <div className="text-xs text-gray-400">Monthly analytics ready</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <button className="w-full py-2 bg-gradient-to-b from-purple-800 to-primary hover:bg-blue-800 rounded-lg text-sm font-medium transition-colors">
          View All Activities
        </button>
      </div>
    </div>
  );
}

