import { useState } from "react"
import { Phone, Video, FileText, FolderOpen, ArrowLeftRight, CheckCircle } from "lucide-react"
import { QidaLogo } from "./QidaLogo"
import { StatusBadge } from "../ui/StatusBadge"

interface AlertBadgeProps {
  icon?: React.ReactNode
  text: string
}

interface PatientHeaderProps {
  initials: string
  name: string
  age: string
  alert?: AlertBadgeProps
  onAudioCall?: () => void
  onVideoCall?: () => void
  onViewPTI?: () => void
}

export function Header({
  initials,
  name,
  age,
  onAudioCall,
  onVideoCall,
  onViewPTI,
}: PatientHeaderProps) {
  const [isTraspasadoToRS, setIsTraspasadoToRS] = useState(false)

  return (
    <header className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-2 md:gap-4 min-h-[80px] px-4 md:px-6 py-3 md:py-4 bg-white border-b border-[#E5E7EB]">
      {/* Logo - izquierda */}
      <div className="flex items-center shrink-0 min-w-0">
        <QidaLogo
          className="h-8 w-auto text-[var(--color-primary-500)]"
          width={80}
          height={34}
        />
      </div>

      {/* Botones - centro */}
      <div className="flex items-center justify-center gap-2 min-w-0">
        <button
          onClick={onAudioCall}
          className="flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-[10px] bg-white border border-[#E5E7EB] hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#6B6B6B]" />
          <span className="text-[#2D2D2D] text-[13px] font-medium font-sans whitespace-nowrap">
            Air Call
          </span>
        </button>
        <button
          onClick={onVideoCall}
          className="flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-[10px] bg-white border border-[#E5E7EB] hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <Video className="w-4 h-4 text-[#6B6B6B]" />
          <span className="text-[#2D2D2D] text-[13px] font-medium font-sans whitespace-nowrap">
            Videollamada
          </span>
        </button>
        <button
          onClick={() => setIsTraspasadoToRS(true)}
          className="flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-[10px] bg-white border border-[#E5E7EB] hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <ArrowLeftRight className="w-4 h-4 text-[#6B6B6B]" />
          <span className="text-[#2D2D2D] text-[13px] font-medium font-sans whitespace-nowrap">
            Traspasar a RS
          </span>
        </button>
        <button
          onClick={onViewPTI}
          className="flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-[10px] bg-[var(--color-primary-500)] hover:bg-[#6B7F60] transition-colors cursor-pointer"
        >
          <FileText className="w-4 h-4 text-white" />
          <span className="text-white text-[13px] font-medium font-sans whitespace-nowrap">
            Pre-generar PTI
          </span>
        </button>
      </div>

      {/* Profile - derecha */}
      <div className="flex items-center justify-end gap-4 shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-[12px] bg-[var(--color-primary-500)] shrink-0">
          <span className="text-white text-lg font-semibold font-sans">
            {initials}
          </span>
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-[#2D2D2D] text-base font-semibold font-sans truncate">
            {name}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#6B6B6B] text-[13px] font-normal font-sans">
              {age}
            </span>
            <span className="text-[#8E8E93] text-[13px] font-normal font-sans">
              •
            </span>
            {isTraspasadoToRS ? (
              <StatusBadge variant="light" color="success" size="sm">
                <CheckCircle className="w-3 h-3 text-[var(--color-success-700)]" />
                <span className="text-[var(--color-success-700)] text-[11px] font-medium font-sans">
                  Traspasado a RS
                </span>
              </StatusBadge>
            ) : (
              <StatusBadge variant="light" color="info" size="sm">
                <FolderOpen className="w-3 h-3 text-[#2563EB]" />
                <span className="text-[#2563EB] text-[11px] font-medium font-sans">
                  Abierto
                </span>
              </StatusBadge>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
