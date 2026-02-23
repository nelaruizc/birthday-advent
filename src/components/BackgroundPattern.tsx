import type { PropsWithChildren } from 'react'

export const BackgroundPattern = ({ children }: PropsWithChildren) => (
  <div className="relative min-h-screen overflow-x-hidden pb-6 pt-7 text-[#5f667d]">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(209,221,235,0.3)_0%,rgba(245,241,236,0)_70%)]" />
      <div className="absolute -left-12 top-64 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(241,223,208,0.25)_0%,rgba(245,241,236,0)_72%)]" />
      <div className="absolute -right-16 bottom-40 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(220,227,238,0.24)_0%,rgba(245,241,236,0)_70%)]" />
    </div>
    <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-6 safe-px">{children}</div>
  </div>
)
