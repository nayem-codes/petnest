export default function Dashboard({ children }) {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      {/* Hidden toggle control for mobile responsiveness */}
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      
      {/* MAIN SCREEN PANEL CONTENT */}
      <div className="drawer-content flex flex-col p-6 lg:p-10">
        
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between w-full lg:hidden mb-6 bg-base-100 p-4 rounded-2xl border border-base-300/60 shadow-xs">
          <span className="font-bold text-neutral">Dashboard</span>
          <label htmlFor="dashboard-sidebar" className="btn btn-primary btn-sm rounded-xl drawer-button">
            menu 
          </label>
        </div>

        {/* Dynamic sub-page view injected here */}
        <main className="bg-base-100 rounded-3xl border border-base-300/40 p-6 min-h-[75vh] shadow-xs">
          {children}
        </main>
      </div>

      {/* SIDEBAR WRAPPER PANEL */}
      <div className="drawer-side z-40">
        <label htmlFor="dashboard-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
        
        <div className="menu p-6 w-72 min-h-full bg-base-100 text-neutral border-r border-base-300/60 flex flex-col justify-between">
          
          {/* Top Routes Navigation Group */}
          <div className="space-y-6">
            {/* Context Heading */}
            <div className="px-4">
              <h2 className="text-xl font-black text-neutral tracking-tight">Control Panel</h2>
              <p className="text-xs text-neutral/50 font-semibold uppercase tracking-wider mt-1">Management</p>
            </div>

            {/* Sidebar Routes List */}
            <ul className="gap-1">
              <li>
                <a className="rounded-xl font-semibold py-3 hover:bg-secondary/50 active:bg-primary active:text-base-100 text-neutral transition-colors">
                  📊 Dashboard Home
                </a>
              </li>
              <li>
                <a className="rounded-xl font-semibold py-3 hover:bg-secondary/50 active:bg-primary active:text-base-100 text-neutral transition-colors">
                  ✉️ My Requests
                </a>
              </li>
              <li>
                <a className="rounded-xl font-semibold py-3 hover:bg-secondary/50 active:bg-primary active:text-base-100 text-neutral transition-colors">
                  🐾 Add Pet
                </a>
              </li>
              <li>
                <a className="rounded-xl font-semibold py-3 hover:bg-secondary/50 active:bg-primary active:text-base-100 text-neutral transition-colors">
                  📋 My Listings
                </a>
              </li>
            </ul>
          </div>

          {/* Bottom Utility Anchors */}
          <div className="pt-4 border-t border-base-300/60">
            <a className="flex items-center gap-3 px-4 py-2 rounded-xl bg-secondary/30 border border-secondary/40">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm text-base-100 font-bold">
                ME
              </div>
              <div>
                <h4 className="font-bold text-sm text-neutral leading-tight">Alex Carter</h4>
                <p className="text-xs text-neutral/50 font-medium">Adopter Account</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}