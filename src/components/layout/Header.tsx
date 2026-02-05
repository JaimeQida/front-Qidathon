// components/Header.tsx
import { Heart, Phone, Video, FileText } from "lucide-react";

interface AlertBadgeProps {
  icon?: React.ReactNode;
  text: string;
}

interface PatientHeaderProps {
  initials: string;
  name: string;
  age: string;
  alert?: AlertBadgeProps;
  onAudioCall?: () => void;
  onVideoCall?: () => void;
  onViewPTI?: () => void;
}

export function Header({
  initials,
  name,
  age,
  alert,
  onAudioCall,
  onVideoCall,
  onViewPTI,
}: PatientHeaderProps) {
  return (
    <header className="flex items-center justify-between w-full h-[80px] px-6 py-4 bg-white border-b border-[#E5E7EB]">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="flex items-center justify-center w-12 h-12 rounded-[12px] bg-[#7C9070]">
          <span className="text-white text-lg font-semibold font-sans">
            {initials}
          </span>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col gap-0.5">
          <span className="text-[#2D2D2D] text-base font-semibold font-sans">
            {name}
          </span>
          <div className="flex items-center gap-3">
            <span className="text-[#6B6B6B] text-[13px] font-normal font-sans">
              {age}
            </span>
            {alert && (
              <>
                <span className="text-[#8E8E93] text-[13px] font-normal font-sans">
                  •
                </span>
                <div className="flex items-center gap-1 px-2 py-[3px] rounded-[6px] bg-[#FFE5E5]">
                  <Heart className="w-3 h-3 text-[#D93C15] fill-[#D93C15]" />
                  <span className="text-[#D93C15] text-[11px] font-medium font-sans">
                    {alert.text}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onAudioCall}
          className="flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E7EB] hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <Phone className="w-4 h-4 text-[#6B6B6B]" />
          <span className="text-[#2D2D2D] text-[13px] font-medium font-sans">
            Audio Call
          </span>
        </button>
        <button
          onClick={onAudioCall}
          className="flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-white border border-[#E5E7EB] hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <Video className="w-4 h-4 text-[#6B6B6B]" />
          <span className="text-[#2D2D2D] text-[13px] font-medium font-sans">
            Video Call
          </span>
        </button>

        <button
          onClick={onVideoCall}
          className="flex items-center gap-2 px-5 py-[11px] rounded-[10px] bg-[#7C9070] hover:bg-[#6B7F60] transition-colors cursor-pointer"
        >
          <FileText className="w-4 h-4 text-white" />
          <span className="text-white text-[13px] font-medium font-sans">
            Generate PTI
          </span>
        </button>
      </div>
    </header>
  );
}