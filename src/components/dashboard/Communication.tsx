import { MessageCircle } from "lucide-react"

export function Communication() {
  return (
    <div className="flex flex-col w-[380px] h-full">
      <div className="flex flex-col h-full rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-4 w-full">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#7C9070]" />
            <span className="text-sm font-semibold text-[#2D2D2D]">Family Communication</span>
          </div>
          <div className="flex items-center justify-center px-2 py-0.5 rounded-xl bg-[#7C9070]">
            <span className="text-[11px] font-semibold text-white">2</span>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex flex-col gap-3 p-4 h-full border-t-2 border-transparent">
          {/* Message 1 */}
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-[#2D2D2D]">Mom</span>
              <span className="text-xs text-[#8E8E93]">10:42 AM</span>
            </div>
            <div className="rounded-[4px_12px_12px_12px] bg-[#F0F4F5] px-[14px] py-[10px]">
              <p className="text-sm text-[#2D2D2D]">Don&apos;t forget to pick up groceries on your way home!</p>
            </div>
            <div className="flex items-center justify-end gap-1">
              <span className="text-[10px] text-[#8E8E93]">Read</span>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex flex-col items-end gap-1 w-full">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-[#8E8E93]">10:45 AM</span>
              <span className="text-xs font-medium text-[#2D2D2D]">You</span>
            </div>
            <div className="rounded-[12px_4px_12px_12px] bg-[rgba(124,144,112,0.08)] px-[14px] py-[10px]">
              <p className="text-sm text-[#2D2D2D]">Will do! Need anything else?</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-[#8E8E93]">Sent</span>
            </div>
          </div>
        </div>

        {/* Card Actions (disabled) */}
        <div className="flex items-center gap-2 h-[68px] px-6 border-t border-transparent opacity-0" />
      </div>
    </div>
  )
}
