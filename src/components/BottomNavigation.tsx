const tabs = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <path d="M4 11.6 12 5l8 6.6v7.2a1.2 1.2 0 0 1-1.2 1.2h-5.2v-5.8h-3.2V20H5.2A1.2 1.2 0 0 1 4 18.8z" />
    ),
    active: true,
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: (
      <path d="M7 4.5v2M17 4.5v2M5.8 8h12.4M6 20h12a2 2 0 0 0 2-2V8.8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V18a2 2 0 0 0 2 2Z" />
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: (
      <path d="M12 12.4a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Zm-6.6 6.8a6.6 6.6 0 0 1 13.2 0" />
    ),
  },
]

export const BottomNavigation = () => {
  return (
    <nav aria-label="Primary" className="sticky bottom-4 z-20 pt-2">
      <div className="mx-auto flex w-full max-w-[330px] items-center justify-between rounded-[28px] bg-[#f8f5f1]/92 px-4 py-3 shadow-soft backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex min-w-[86px] flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs transition ${
              tab.active ? 'bg-[#f2e1d6] text-[#8c6052]' : 'text-[#9196a6]'
            }`}
            aria-current={tab.active ? 'page' : undefined}
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {tab.icon}
            </svg>
            <span className="text-[0.7rem] font-medium tracking-[0.01em]">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
