import { CheckCircle2, Clock, ListTodo, User } from 'lucide-react';

const  WorkflowMockup = () => {
  return (
    <div className="bg-gradient-to-br from-primary to-black border border-white/10 rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
        <span className="text-sm font-medium">All Tasks</span>
        <span className="text-sm text-gray-500">Waiting for approval</span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3">
            <ListTodo className="w-5 h-5 text-purple-400" />
            <div>
              <div className="font-medium">Lead list</div>
              <div className="text-sm text-gray-400">70% prepared</div>
            </div>
          </div>
          <div className="text-purple-400 text-sm">03</div>
        </div>

        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-400" />
            <div>
              <div className="font-medium">Payment reminder</div>
              <div className="text-sm text-gray-400">Sent to selected clients</div>
            </div>
          </div>
          <CheckCircle2 className="w-5 h-5 text-green-400" />
        </div>

        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-[#4402fa]" />
            <div>
              <div className="font-medium">Payroll management</div>
              <div className="text-sm text-gray-400">Due on 2nd July</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 opacity-50">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-gray-400" />
            <div>
              <div className="font-medium text-gray-400">Employee Tracking</div>
              <div className="text-sm text-gray-500">2 days ago</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
        Last updated by User
      </div>
    </div>
  );
}

export default WorkflowMockup