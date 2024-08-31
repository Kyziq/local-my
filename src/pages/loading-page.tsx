import { Loader2 } from 'lucide-react'

type LoadingPageProps = {
  message?: string
}

export default function LoadingPage({ message }: LoadingPageProps) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Loader2 className="size-12 animate-spin" />
        <span className="text-center">{message}</span>
      </div>
    </div>
  )
}