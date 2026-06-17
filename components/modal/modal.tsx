import { cn } from "@/utils/utils"
import React from "react"

const Modal = ({
   openModal,
  children,
  setOpenModal,
}: {
  openModal: boolean
  children: React.ReactNode
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
     <div
      className={cn(
        "fixed inset-0 cursor-pointer flex justify-center transition-all duration-500",
        openModal
          ? "visible opacity-100"
          : "invisible opacity-0"
      )}
    >
      <div className='fixed inset-0 z-40  bg-black/50' />
      <div
        className={cn("relative z-100 transition-all duration-3000 ease-in-out ")}
        onMouseLeave={() => setOpenModal(false)}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
