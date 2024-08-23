import type { ServerProps } from 'payload'

export default function Component(args: ServerProps) {
  const { user } = args
  console.log(user)

  if (!user) {
    return null
  }

  return <p>works!</p>
}
