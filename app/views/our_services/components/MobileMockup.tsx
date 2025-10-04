import { Bell, MessageCircle, TrendingUp, DollarSign } from 'lucide-react';

export function MobileMockup() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-[280px] h-[560px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border-[12px] border-gray-800 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl"></div>

        <div className="h-full w-full overflow-hidden rounded-[2rem] bg-black p-4">
          <div className="flex items-center justify-between mb-6 pt-4">
            <div>
              <p className="text-gray-400 text-xs">Good morning</p>
              <h3 className="text-white font-semibold text-sm">Dashboard</h3>
            </div>
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-blue-200 text-xs">Total Revenue</p>
              <TrendingUp className="w-4 h-4 text-blue-200" />
            </div>
            <p className="text-white text-2xl font-bold mb-1">$24,580</p>
            <p className="text-blue-200 text-xs">+12.5% from last month</p>
          </div>

          <div className="space-y-3">
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">New Messages</p>
                    <p className="text-gray-400 text-xs">24 unread</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Payments</p>
                    <p className="text-gray-400 text-xs">3 pending</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Analytics</p>
                    <p className="text-gray-400 text-xs">View reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
