import { useSession, signIn, signOut } from 'next-auth/react'
import Button from './Button'
export default function GoogleLogin() {
  const { data: session } = useSession()

  return session ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      Signed in as {session.user?.email} <br />
      <br />
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  ) : (
    <div>
      Not signed in <br />
      <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  )
}
