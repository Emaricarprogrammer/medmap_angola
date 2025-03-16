interface MedicinalStatusProps {
  status: "expired" | "valid"
}

export function MedicinalStatus({ status }: MedicinalStatusProps) {
  return (
    <div className="flex items-center gap-1">
      {status === "expired" && (
        <>
          <span className="w-2 h-2 rounded-full bg-rose-600"></span>
          <span>Expirado</span>
        </>
      )}
      {status === "valid" && (
        <>
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          <span>Válido</span>
        </>
      )}
    </div>
  )
}
