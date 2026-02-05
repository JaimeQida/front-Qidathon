import { Sparkles, Calendar, List, Plus } from "lucide-react"
import { PersonalNotes } from "./PersonalNotes"
import { LastCallCard } from "./LastCallCard"
import { Communication } from "./Communication"

export function MainContent() {
  return (
    <div className="flex flex-1 min-h-0 gap-6 p-6 w-full">
      <div className="flex flex-col gap-5 h-full flex-1">
        <Communication />
        <LastCallCard />
      </div>
      {/* Intelligence Column */}
      <div className="flex flex-col gap-5 h-full flex-2">
        <PersonalNotes />

        {/* AI-Generated Summary Card */}
        <div className="flex flex-col flex-1 h-full rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* AI Header */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 w-full">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#9B8AA8]" />
              <span className="text-sm font-semibold text-[#2D2D2D]">AI-Generated Summary</span>
            </div>
            <span className="text-[11px] text-[#8E8E93]">Updated 5 min ago</span>
          </div>

          {/* AI Content */}
          <div className="flex flex-col gap-3 p-5 border-t-2 border-transparent bg-[#F5F3FF]">
            <div className="flex flex-col gap-3 w-full">
              {/* Insight 1 */}
              <div className="flex gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#9B8AA8] flex-shrink-0">
                  <span className="text-xs font-medium text-white">1</span>
                </div>
                <p className="text-sm text-[#2D2D2D]">
                  Your smart home upgrades have significantly improved energy efficiency.
                </p>
              </div>

              {/* Insight 2 */}
              <div className="flex gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#9B8AA8] flex-shrink-0">
                  <span className="text-xs font-medium text-white">2</span>
                </div>
                <p className="text-sm text-[#2D2D2D]">
                  Consider scheduling regular maintenance for optimal performance.
                </p>
              </div>

              {/* Insight 3 */}
              <div className="flex gap-2.5">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#9B8AA8] flex-shrink-0">
                  <span className="text-xs font-medium text-white">3</span>
                </div>
                <p className="text-sm text-[#2D2D2D]">
                  Integration with voice assistants could enhance convenience.
                </p>
              </div>
            </div>
          </div>

          {/* Card Actions (disabled) */}
          <div className="flex items-center gap-2 h-[68px] px-6 border-t border-transparent opacity-0" />
        </div>
      </div>

      {/* Scheduling Column */}
      <div className="flex flex-col gap-5 h-full w-[340px]">
        {/* Calendar Card */}
        <div className="flex flex-col h-[340px] rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Calendar Header */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 w-full">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--color-primary-500)]" />
              <span className="text-sm font-semibold text-[#2D2D2D]">February 2026</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-primary-500)]">
              <Plus className="w-3.5 h-3.5 text-white" />
              <span className="text-xs font-medium text-white">Add Event</span>
            </button>
          </div>

          {/* Calendar Content */}
          <div className="flex flex-col gap-2 h-full px-4 py-3 border-t-2 border-transparent">
            {/* Week Days */}
            <div className="flex items-center justify-around h-6 w-full">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <span key={index} className="text-[11px] font-medium text-[#8E8E93] text-center flex-1">
                  {day}
                </span>
              ))}
            </div>

            {/* Week 1 */}
            <div className="flex items-center justify-around h-8 w-full">
              {[' ', ' ', ' ', ' ', '5', '6', '7'].map((date, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-center h-full flex-1 ${date === '5' ? 'rounded-lg bg-[var(--color-primary-500)]' : ''
                    }`}
                >
                  <span
                    className={`text-sm font-medium ${date === '5' ? 'text-white' : 'text-[#2D2D2D]'
                      }`}
                  >
                    {date}
                  </span>
                </div>
              ))}
            </div>

            {/* Week 2 */}
            <div className="flex items-center justify-around h-8 w-full">
              {['8', '9', '10', '11', '12', '13', '14'].map((date) => (
                <div key={date} className="flex items-center justify-center h-full flex-1">
                  <span className="text-sm font-medium text-[#2D2D2D]">{date}</span>
                </div>
              ))}
            </div>

            {/* Week 3 */}
            <div className="flex items-center justify-around h-8 w-full">
              {['15', '16', '17', '18', '19', '20', '21'].map((date) => (
                <div key={date} className="flex items-center justify-center h-full flex-1">
                  <span className="text-sm font-medium text-[#2D2D2D]">{date}</span>
                </div>
              ))}
            </div>

            {/* Week 4 */}
            <div className="flex items-center justify-around h-8 w-full">
              {['22', '23', '24', '25', '26', '27', '28'].map((date) => (
                <div key={date} className="flex items-center justify-center h-full flex-1">
                  <span className="text-sm font-medium text-[#2D2D2D]">{date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Actions (disabled) */}
          <div className="flex items-center gap-2 h-[68px] px-6 border-t border-transparent opacity-0" />
        </div>

        {/* Tasks Card */}
        <div className="flex flex-col h-full rounded-xl bg-[var(--card)] border border-[var(--border)] shadow-[0_1px_1.75px_rgba(0,0,0,0.05)] overflow-hidden">
          {/* Tasks Header */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 w-full">
            <div className="flex items-center gap-2">
              <List className="w-4 h-4 text-[var(--color-primary-500)]" />
              <span className="text-sm font-semibold text-[#2D2D2D]">Upcoming Tasks</span>
            </div>
            <div className="flex items-center justify-center px-2 py-0.5 rounded-xl bg-[rgba(124,144,112,0.08)]">
              <span className="text-[11px] font-medium text-[var(--color-primary-500)]">3 pending</span>
            </div>
          </div>

          {/* Tasks Content */}
          <div className="flex flex-col h-full px-4 py-2 border-t-2 border-transparent">
            <div className="flex flex-col w-full">
              {/* Task 1 */}
              <div className="flex gap-2.5 px-3 py-3 w-full border-b border-[#E5E7EB]">
                <div className="flex items-center justify-center w-4 h-4 rounded border-2 border-[var(--color-primary-500)] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-sm font-medium text-[#2D2D2D]">Review project proposal</span>
                  <span className="text-xs text-[#8E8E93]">Due today at 3:00 PM</span>
                </div>
              </div>

              {/* Task 2 */}
              <div className="flex gap-2.5 px-3 py-3 w-full border-b border-[#E5E7EB]">
                <div className="flex items-center justify-center w-4 h-4 rounded border-2 border-[var(--color-primary-500)] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-sm font-medium text-[#2D2D2D]">Schedule team meeting</span>
                  <span className="text-xs text-[#8E8E93]">Tomorrow at 10:00 AM</span>
                </div>
              </div>

              {/* Task 3 */}
              <div className="flex gap-2.5 px-3 py-3 w-full">
                <div className="flex items-center justify-center w-4 h-4 rounded border-2 border-[var(--color-primary-500)] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5 flex-1">
                  <span className="text-sm font-medium text-[#2D2D2D]">Update documentation</span>
                  <span className="text-xs text-[#8E8E93]">Feb 7, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Actions (disabled) */}
          <div className="flex items-center gap-2 h-[68px] px-6 border-t border-transparent opacity-0" />
        </div>
      </div>
    </div>
  );
}
