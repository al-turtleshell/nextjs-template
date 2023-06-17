import { useSession, signOut, signIn } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <main>
        <div>
          <h1>Turtleshell</h1>
        </div>
        {session ? (
          <>
            Signed in as {session.user?.email || 'no email'} <br />
            <button onClick={() => signOut()}>Sign out</button>
          </>
        ) : (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </main>
    </>
  );
}
