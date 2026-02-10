import type { PropsWithChildren } from 'react'

export const BackgroundPattern = ({ children }: PropsWithChildren) => (
  <div className="relative min-h-screen overflow-x-hidden py-8 text-soft">
    <div className="pointer-events-none absolute inset-0 opacity-25">
      <div className="absolute -left-20 top-6 h-52 w-52 rotate-12 rounded-[40px] border-4 border-blue-200/40" />
      <div className="absolute right-4 top-20 h-40 w-64 -rotate-6 rounded-[52px] border-4 border-blue-100/35" />
      <div className="absolute bottom-48 left-1/2 h-44 w-56 -translate-x-1/2 rotate-[20deg] rounded-[44px] border-4 border-blue-100/35" />
      <div className="absolute -right-14 bottom-16 h-64 w-64 rotate-[15deg] rounded-[48px] border-4 border-blue-100/30" />
    </div>
    <div className="relative z-10 mx-auto flex w-full max-w-md flex-col gap-7 safe-px">{children}</div>
  </div>
)
